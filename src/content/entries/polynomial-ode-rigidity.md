---
title: "When a polynomial differential equation forces a straight line"
date: 2026-08-19
description: "One short identity says that a polynomial whose derivative is balanced against a second polynomial in a particular way can only be linear, and that rigidity is what closes a block in the strip reduction."
---

Take two polynomials in one variable, $A$ and $C$, and form the combination

$$
A\,C' - \nu\,A'\,C,
$$

where $\nu$ is a positive integer. Suppose the result is a nonzero constant. What does that force?

For $\nu=1$ the combination is the Wronskian $AC' - A'C$, the classical test for whether two functions are linearly independent. Asking for it to be a nonzero constant is a strong demand. The answer, for every $\nu$, is surprisingly rigid: $A$ has to be linear or constant. No polynomial of degree two or more can appear.

## A first look at the top terms

Write $a = \deg A$ and $m = \deg C$, with leading coefficients $\alpha$ and $\gamma$. The two products have the same degree:

$$
\deg(A\,C') = a + m - 1, \qquad \deg(\nu A'C) = a + m - 1 .
$$

Their leading coefficients are $m\alpha\gamma$ and $\nu a\,\alpha\gamma$. So the coefficient of $y^{a+m-1}$ in the combination is

$$
(m - \nu a)\,\alpha\gamma .
$$

If $m \neq \nu a$, this is nonzero, so the combination has degree exactly $a+m-1$. A nonzero constant has degree zero, which forces $a + m = 1$. The only options are $a=0$ with $m=1$, or $a=1$ with $m=0$. Either way $\deg A \le 1$, which is the conclusion.

So the entire difficulty sits in one case: $m = \nu a$, where the top terms cancel and the degree count says nothing.

## The identity that removes the hard case

Write $E(A,C) = A C' - \nu A' C$. It is linear in $C$. The useful fact is what it does to one particular input:

$$
E(A, A^{\nu}) = A\cdot \nu A^{\nu-1}A' - \nu A' \cdot A^{\nu} = 0 .
$$

The combination annihilates $A^{\nu}$. By linearity, we may subtract any multiple of $A^{\nu}$ from $C$ without changing the value at all:

$$
E(A,\; C - \lambda A^{\nu}) = E(A,C).
$$

Now the hard case takes care of itself. Suppose $a \ge 2$. The degree count already showed $m = \nu a$. Since $\deg A^{\nu} = \nu a = m$, choosing $\lambda = \gamma/\alpha^{\nu}$ cancels the leading term of $C$, producing a $C_1$ with $\deg C_1 < \nu a$ and the same value $E(A,C_1) = c$. If $C_1 = 0$ then $c = 0$, which is excluded. Otherwise $\deg C_1 \neq \nu a$, so the first argument applies and gives $a + \deg C_1 = 1$. That contradicts $a \ge 2$.

:::figure{src="degree-lattice" label="Figure 1" wide alt="A lattice of degree pairs. A dashed line marks deg C equal to nu times deg A, where the leading terms cancel. An arrow runs straight down from a point on that line to a point below it. A short solid line marks deg A plus deg C equal to one, with its two lattice points ringed."}
Every solution has to sit somewhere on this lattice. Off the dashed line the leading terms survive, so the degree must fall to zero and only $\deg A + \deg C = 1$ is left. On the dashed line, subtracting a multiple of $A^{\nu}$ moves straight down off it without changing anything, so that case collapses into the first one. The two ringed points are all that remain.
:::

That is the whole proof. It uses nothing beyond the degree of a product and one line of differentiation.

## The statement

**Theorem A.** Let $F$ be an integral domain of characteristic zero, let $\nu \ge 1$ be an integer, and let $A, C \in F[y]$ satisfy

$$
A\,C' - \nu\,A'\,C = c, \qquad c \in F,\ c \neq 0 .
$$

Then $\deg A \le 1$.

This is [formalized in Lean 4 and kernel-checked](https://github.com/dcposch/jc2-lean/tree/main/theorem-a), and registered as [PALOMAR-2026-08-19-000005](https://palomar-registry.org/entry?id=PALOMAR-2026-08-19-000005&version=1).

## Where the characteristic matters

The proof leans on $(m - \nu a)\alpha\gamma$ being nonzero. Over a field of characteristic $p$ that step can fail, because $m - \nu a$ can be a nonzero integer that is still zero in the field. Bounding both quantities below $p$ repairs it, and that is exactly the hypothesis of the positive-characteristic version: the same conclusion holds in characteristic $p$ provided $\nu \deg A < p$ and $\deg C < p$.

Some bound is genuinely necessary. Take $\nu = 1$, $C = 1$, and

$$
A = y^{p} + y .
$$

In characteristic $p$ the derivative is $A' = p\,y^{p-1} + 1 = 1$, so

$$
A\,C' - A'\,C = 0 - 1 = -1 ,
$$

a nonzero constant, while $\deg A = p$. The theorem fails without a bound, and this example shows the bound $\nu \deg A < p$ is doing real work rather than being an artifact of the proof.

## What it is used for

The identity is the rigidity engine in the depth-two block of the strip reduction at Newton-degree pair $(72,108)$. Through the bridge from that block to the differential equation above, Theorem A forces the edge polynomial of a hypothetical Keller counterexample to be a binomial. A general polynomial edge has many coefficients to play with; a binomial has almost none. That collapse is what makes the surrounding argument finite.

## Scope, and what is not claimed

The characteristic-zero statement is elementary, and for $\nu = 1$ it is the classical fact that two polynomials with constant nonzero Wronskian cannot both be nonlinear. We do not claim the characteristic-zero case as new. What the campaign contributes here is an independent proof, the machine-checked formalization linked above, and the positive-characteristic extension with its bound. If you know a prior reference for the general $\nu$ statement, please send it and we will credit it here.

The block-variety theorem that consumes this result is a separate statement and is **not** formalized. The Lean development covers Theorem A only.

This mechanism was found in a single degree cell. For why cells alone cannot finish the problem, see [The census never empties](/entries/census-never-empties).


## A question to take away

The positive-characteristic bound $\nu \deg A < p$ is sufficient, and the example $A = y^{p}+y$ shows some bound is needed. Is $\nu \deg A < p$ sharp? For $\nu = 1$ the example sits exactly at $\deg A = p$, so nothing between is ruled out by it. A counterexample with $1 < \deg A < p$, or a proof that none exists, would pin the statement down.
