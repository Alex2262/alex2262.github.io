---
title: "3D RoPE NKI Kernel"
date: "2026-04-18"
description: "A custom AWS Neuron (NKI) kernel for 3D rotary positional embeddings, exploring accelerator programming and hardware-aware optimization."
tags: ["aws-neuron", "nki", "kernels", "accelerators"]
category: "ML systems / kernels"
featured: true
---

A custom AWS Neuron kernel for 3D rotary positional embeddings, focused on
understanding accelerator programming, memory layout, and the practical gap
between reference implementations and hardware-aware kernels.

The project involved working through tensor layout on the accelerator,
correctness testing against a reference implementation, and benchmarking to
measure speedup. It was a useful way to build intuition for how NKI maps
computation onto Neuron hardware.
