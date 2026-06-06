---
title: "N-Body Simulator"
date: "2024-10-01"
description: "A simulator of orbital mechanics and the N-body gravitational problem, capable of simulating 100,000 objects using asymptotic algorithms and parallel processing."
tags: ["python", "simulation", "numerical methods", "numba"]
category: "Simulations"
---

A simulator of orbital mechanics and the N-body gravitational problem, capable
of handling 100,000 objects simultaneously. The implementation uses numerical
integration, asymptotic algorithms (Barnes-Hut style approximations), and
parallel processing with Numba to reach that scale.

A significant part of the work was understanding and reducing approximation
error — balancing the accuracy tradeoffs that come with treating clusters of
bodies as point masses, and optimizing the gravitational force calculations to
keep the simulation tractable.
