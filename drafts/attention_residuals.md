---
title: "Attention Residuals"
date: "2026-03-17"
description: "Rotating attention by 90 degrees"
tags: ["Transformers", "RNNs", "LLMs"]
---

# Introduction
The current Transformers architecture widely utilizes the Residual + PreNorm variant. While it has been quite effective, there are still some issues.

## Problems with the current Residual + PreNorm Arch
- Each layer accumulates the weights of all the preceeding layers which leads to uncontrolled growth of the hidden state.
- This accumulations also dilutes the contributions made by these layers.


# References
- [Attention Residual - Paper](https://github.com/MoonshotAI/Attention-Residuals/blob/master/Attention_Residuals.pdf)
- [When does Kimi's "Attention Residuals" work?](https://KindXiaoming.github.io/blog/2026/attention-residual/)
- [https://x.com/tokenbender/status/2033436835557658991](https://x.com/tokenbender/status/2033436835557658991)
