---
title: "Where Performance Goes"
date: "2026-06-04"
description: "A short field guide to figuring out where the time in a kernel actually goes — and a demonstration of how prose, code, and tables render here."
tags: ["ml-systems", "profiling", "performance"]
draft: false
---

Most performance work starts with a wrong guess. You assume the matmul is the
bottleneck, or that the custom kernel you wrote is faster than the vendor
library because *you* wrote it. The job is to replace those guesses with
measurements, and then to explain the measurements with a model of the hardware.

This post is partly a field guide and partly a **style specimen** — it shows how
headings, lists, code, quotes, and tables look on this site.

## The three questions

Before profiling anything, I try to answer three questions in order. Each one
narrows down where the time is going.

1. Is the workload **compute-bound** or **memory-bound**?
2. If memory-bound, is it bandwidth or latency?
3. If compute-bound, am I actually using the tensor cores, or just the FP32 path?

A useful first cut is the *arithmetic intensity* — FLOPs per byte moved. Compare
it against the hardware's ratio of peak FLOPs to peak bandwidth and you already
know which wall you're going to hit.

> The roofline model is less a precise tool than a way of refusing to be
> surprised. If you're far under the roof, the problem is yours, not the chip's.

### A note on custom kernels

It is genuinely common for a hand-written `Triton` kernel to be **several times
slower** than `cuDNN` on the same `Conv3D`. That is not a failure of Triton — it
is the result of decades of autotuning baked into the vendor library. The
interesting question is *which* part of the gap is recoverable.

## Reading an allocation trace

When the bottleneck is memory, I dump the live-tensor set at the peak and look
for the single allocation that dominates. For a video VAE decoder, it is almost
always one early convolution output:

```python
# Find the peak live allocation and the tensor responsible for it.
import torch

def peak_live_tensor(trace):
    peak = max(trace, key=lambda e: e.live_bytes)
    return peak.name, peak.shape, peak.live_bytes / 1e9  # GB

name, shape, gb = peak_live_tensor(trace)
print(f"{name}: {shape} -> {gb:.2f} GB live")
# conv_in.out: (1, 512, 2, 352, 640) -> 0.92 GB live
```

The shape `(1, 512, 2, 352, 640)` tells the whole story: 512 channels over a
large spatial grid, held live while the next layers run. No amount of kernel
tuning fixes that — you change *when* the tensor exists, not how fast it is
produced.

## Numbers, side by side

Here is a representative comparison for one Conv3D layer. Inline code like
`channels=512` is fine in tables too.

| Implementation      | Time (ms) | Peak mem (GB) | Notes                         |
| ------------------- | --------: | ------------: | ----------------------------- |
| PyTorch / cuDNN     |      4.10 |          1.8  | The baseline to beat          |
| Naive Triton        |     19.7  |          1.6  | Correct, but launch-bound     |
| Triton + autotune   |      6.3  |          1.5  | Closes most of the gap        |
| Fused decode block  |      5.8  |          1.1  | Wins on memory, not on time   |

A few things to take from the table:

- The naive kernel is **~5x slower** despite using *less* memory.
- Autotuning recovers most of the speed but never quite catches the vendor path.
- Fusion is a memory win first, a latency win second.

---

## What I actually do

In practice the loop is boring, which is the point:

- Measure first, with streaming output so a hang is obvious immediately.
- Check correctness against a reference *before* trusting any timing.
- Change one thing. Re-measure. Write down the number.

If you want the gory details, the benchmark harness lives on
[my GitHub](https://github.com/Alex2262), and there are longer notes in the
[Conv3D benchmarking](/projects) writeup.

The goal is never to be clever. It is to be *unsurprised* — to look at a number
and already know which line of the roofline it sits under.
