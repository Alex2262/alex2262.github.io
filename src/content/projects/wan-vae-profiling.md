---
title: "Wan VAE Decoder Memory Profiling"
date: "2026-05-05"
description: "A memory analysis of a video diffusion VAE decoder, focused on peak live allocations, cache tensor lifetimes, and convolution-dominated memory usage."
tags: ["ml-systems", "memory", "profiling", "diffusion"]
category: "ML systems / kernels"
featured: true
---

A memory analysis of a video diffusion VAE decoder, focused on identifying peak
live allocations, cache tensor lifetimes, and why particular intermediate
tensors dominate memory usage.

The work looked at the Wan 2.2 TI2V 5B VAE decoder: tracing live tensor sets
through the convolution layers, attributing peak allocation to specific
intermediates, and understanding how large tensors of shape like
`(1, 512, 2, 352, 640)` drive overall memory footprint.
