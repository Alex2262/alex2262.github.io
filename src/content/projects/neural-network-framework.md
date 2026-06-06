---
title: "Neural Network Framework from Scratch"
date: "2025-03-01"
description: "A modular, sequential neural network framework in Python using only a linear algebra library, supporting layers from convolution to masked multi-headed self-attention."
tags: ["python", "deep learning", "transformers", "from-scratch"]
category: "Machine learning"
---

A modular, CPU-based neural network framework written from scratch using only a
linear algebra library — no PyTorch, no autograd. The framework supports a
range of components from convolutional layers to masked multi-headed
self-attention.

As a test of the implementation, I built a GPT-2 styled decoder-only LLM on top
of it and matched the training loss of a PyTorch-based baseline on the
tiny-shakespeare dataset. The project was primarily about understanding exactly
what happens under the hood: gradient flow, layer implementations, and the
details that frameworks usually abstract away.
