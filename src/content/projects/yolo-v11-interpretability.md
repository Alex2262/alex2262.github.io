---
title: "YOLO-v11 Mechanistic Interpretability"
date: "2025-11-01"
description: "Circuit discovery in YOLO-v11 for object detection via pixel-based activation optimization, with a novel importance-weighting algorithm for identifying class-relevant kernels."
tags: ["interpretability", "computer vision", "circuits", "pytorch"]
category: "Machine learning"
---

A mechanistic interpretability study of YOLO-v11, focused on identifying which
internal circuits are responsible for object detection. The approach used
pixel-based optimization of activations to discover these circuits, drawing on
ideas from feature visualization and circuit analysis.

As part of the project I developed a novel importance-weighting algorithm for
automatically identifying kernels relevant to specific object classes, and
experimented with receptive fields and feature sensitivity across different
layers of the network. The goal was to understand not just what the model
detects, but how it does so internally.
