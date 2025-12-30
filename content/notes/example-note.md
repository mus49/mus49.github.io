+++
title = "Random Thoughts on Computation"
date = 2025-12-30
description = "Quick notes and observations about computation and complexity"
+++

## On Abstraction

The best abstractions hide complexity without sacrificing power. They make easy things easy and hard things possible.

## Lambda Calculus

Everything computable can be expressed with just three primitives:
- Variables: $x$
- Abstraction: $\lambda x. M$
- Application: $(M\ N)$

Yet this gives us Turing completeness.

## P vs NP

If $P = NP$, finding solutions would be as easy as verifying them. But maybe the universe fundamentally distinguishes between these activities—creation vs validation.

## Kolmogorov Complexity

The shortest program that generates a string is a measure of its "true" complexity. But computing this is itself uncomputable—a beautiful paradox.

## Curry-Howard Correspondence

Proofs are programs. Programs are proofs. Types are propositions. This isn't metaphor—it's a deep structural identity:

<div>
$$
\frac{\Gamma \vdash M : A \rightarrow B \quad \Gamma \vdash N : A}{\Gamma \vdash M\ N : B}
$$
</div>

Modus ponens and function application are the same thing.

## More to explore

- Gödel's incompleteness in formal systems
- Algorithmic information theory
- Computational complexity classes beyond NP
- Quantum computation and complexity
