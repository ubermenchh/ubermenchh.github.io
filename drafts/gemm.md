---
title: "Accelerating GEMM across kernels"
date: "2025-11-24"
description: "In the CUDA trenches"
tags: ["CUDA", "GEMM", "Matrix Multiplication"]
---

# Introduction
Matrix Muliplication is the most fundamental and the heart of linear algebra.
It is also very important in the field of deep learning and other scientific computing fields.

In this article, we will understand how to optimize a standard FP32 GEMM kernel on NVIDIA GPUs.

# General Matrix Multiplication (GEMM)
GEMM operation constitutes,
$$
D = \alpha AB + \beta C
$$
where, $D \in \mathbb{R}^{m \times n} $, $A \in \mathbb{R}^{m \times k}$, $B \in \mathbb{R}^{k \times n}$, $C \in \mathbb{R}^{m \times n}$ and $\alpha$ & $\beta$ floats.

# Kernel I: Naive
```cpp
__global__ void naive_gemm(const float* A, const float* B, float* C, int M, int N, int K, float alpha, float beta) {
    int row = blockIdx.y * blockDim.y + threadIdx.y;
    int col = blockIdx.x * blockDim.x + threadIdx.x;

    if (row < M && col < N) {
        float temp = 0.0f;
        for (int i = 0; i < K; i++) {
            temp += A[row * K + i] * B[i * N + col];
        }
        C[row * N + col] = alpha * temp + beta * C[row * N + col];
    }
}
```
