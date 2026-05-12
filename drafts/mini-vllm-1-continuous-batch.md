---
title: "mini-vllm: Continuous Batching"
date: "2026-01-03"
description: "One after the another"
tags: ["inference", "vllm", "llms"]
---

# Introduction
Language Model inference has been part of the tech world since the boom of LLMs.
Running these models fast and efficiently has been a really huge bottleneck everyone want to tackle. 

In this series of blog posts, i will try to explain the various techniques that are used by modern inference engines like `vLLM` for making model inferencing fast and memory efficient.

# How AI slop is generated?
How LLMs work is pretty straight-forward, the user inputs a prompt and the model produces a sequence of tokens till the stop token is produces or maximum context length is reached.
For every iteration you get one output token from the model.

![LLM Inference Diagram](/llm-inference.png) 
*Figure1: One token is generated at each iteration till the `<end>` token*

- The intial prompt ingestion is known as the **Prefill Phase**. In this phase the model precomputes the KV Cache which is then used at every iteration. For ex., if the input prompt contains 100 tokens, the model is going to load up the weights and apply them to all the 100 tokens simultaneously, this is a `Matrix-Matrix` operation, which is `compute intensive`.
- Every subsequent token is generated in the **Decode Phase**. In this phase, the model loads the entire weights and multiplies them to the single output vector, this is a `Matrix-Vector` operation, which is `memory-bound` not compute bound.

# References
1. [Orca: A Distributed Serving System for Transformer-Based Generative Models](https://www.usenix.org/conference/osdi22/presentation/yu)
2. [Efficient Memory Management for Large Language Model Serving with PagedAttention](https://arxiv.org/abs/2309.06180)
3. [vLLM - Github](https://github.com/vllm-project/vllm)
4. [Aleksa Gordic - Inside vLLM: Anatomy of a High-Throughput LLM Inference System](https://www.aleksagordic.com/blog/vllm)
5. [Anyscale - How continuous batching enables 23x throughput in LLM inference while reducing p50 latency](https://www.anyscale.com/blog/continuous-batching-llm-inference)
6. [nano-vllm - Github](https://github.com/GeeeekExplorer/nano-vllm)