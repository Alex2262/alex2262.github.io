---
title: "NKI Kernels for AWS Trainium 2 (Annapurna Labs)"
date: "2026-02-01"
description: "Fused NKI kernels for attention and 3D-RoPE modules targeting AWS Trainium 2, with roofline analysis and MFU optimization for video diffusion inference."
tags: ["NKI", "aws-trainium", "kernels", "attention", "ml-systems"]
category: "ML systems / kernels"
featured: true
---

A contracted project with Amazon Annapurna Labs optimizing video diffusion model
inference for AWS Trainium 2 chips. The work centered on developing fused NKI
kernels for attention and 3D rotary positional embedding modules, performing
roofline analyses to identify bottlenecks, and making MFU (model FLOP
utilization) improvements.

The goal was to close the gap between theoretical hardware performance and what
the model actually achieves in practice — which comes down to understanding
memory movement, kernel fusion opportunities, and how operations map onto the
accelerator's compute units.
