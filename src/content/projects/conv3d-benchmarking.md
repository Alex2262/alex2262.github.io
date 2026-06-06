---
title: "Conv3D Benchmarking for Video VAE Decoders"
date: "2026-05-20"
description: "A benchmarking and profiling suite comparing PyTorch/cuDNN Conv3D against custom Triton implementations for video VAE decoder workloads."
tags: ["ml-systems", "triton", "benchmarking", "cuda"]
category: "ML systems / kernels"
featured: true
---

A benchmarking and profiling suite for Conv3D-heavy video VAE decoder workloads.
The goal is to compare PyTorch/cuDNN against custom Triton implementations,
measure correctness and performance, and understand where the bottlenecks come
from in realistic diffusion-model settings.

The suite handles correctness testing, performance benchmarking with streaming
output, and memory profiling. A recurring theme is understanding why custom
kernels can be much slower than vendor libraries — for example on VAE-like
tensors with 512 channels and spatial dimensions around 352×640.
