---
title: "Altair Chess Engine"
date: "2025-12-01"
description: "A formerly top-30, 3600+ rated, superhuman chess engine in C++ with neural network evaluation, competing in international championships."
tags: ["C++", "chess", "search", "SIMD", "neural networks"]
category: "Algorithms / engines"
featured: true
links:
  github: "https://github.com/Alex2262/AltairChessEngine"
---

Altair is a UCI chess engine I built from August 2022 through December 2025.
At its peak it was ranked top-30 among over 1000 engines worldwide, with a
rating above 3600 — well into superhuman territory. It has been downloaded over
3000 times on GitHub and competed in the Chess.com Computer Chess Championship
(CCC) and the Top Chess Engine Championship (TCEC).

The engine uses an exhaustive alpha-beta search bolstered by neural networks
trained on 5 billion self-generated data points. Performance was pushed further
through statistical testing, profiling, SIMD intrinsics, and simultaneous
multi-processing. Building Altair was my first serious dive into low-level
optimization and shaped a lot of how I think about search, evaluation, and
performance engineering.
