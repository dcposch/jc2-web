---
title: "A trace identity that was true and did not help"
date: 2026-09-04
description: "The traces of powers of one polynomial over the fibres of the other satisfy an exact differential identity whose degree grows with the exponent while the geometric degree stays pinned. It looked like a ceiling. It is a shape constraint that the frontier never violates."
---

After the census theorem, the campaign needed a quantity that grows with the degree of a hypothetical counterexample while its geometric degree stays fixed. Here is the first candidate, why it looked promising, and the exact sense in which it does not do the job.

## Traces over a fibre

Let $g$ be monic in $y$ of degree $n$, and fix a generic value $c$. The ring $A = \mathbb C[x,c][y]/(g - c)$ is free of rank $n$ over $\mathbb C[x,c]$, so every element has a trace, the trace of the matrix by which it multiplies. Write

$$
P_k = \operatorname{Tr}_A\!\left(f^{k}\right) \in \mathbb C[x, c] .
$$

Concretely, $P_k$ is the sum of $f(x, \tau_i(x))^{k}$ over the $n$ roots $\tau_i$ of $g(x,y) = c$, which is why it is a polynomial in $x$ even though each root is a Puiseux series.

Two classical facts combine into an identity. The first is Euler–Jacobi: for any polynomial $h$,

$$
\operatorname{Tr}\!\left(\frac{h}{g_y}\right) = \bigl[y^{\,n-1}\bigr]\bigl(h \bmod (g - c)\bigr),
$$

the coefficient of $y^{n-1}$ in the remainder. The second is the fibre derivative: along a root, $\frac{d}{dx} f(x,\tau_i(x)) = J / g_y(x, \tau_i(x))$, where $J = f_xg_y - f_yg_x$ is the Jacobian. Differentiating the trace and applying both,

$$
\frac{d}{dx} P_{k+1} \;=\; (k+1)\,\bigl[y^{\,n-1}\bigr]\bigl(J f^{k} \bmod (g-c)\bigr) .
$$

This holds with no hypothesis on $J$ at all. I checked it symbolically on a genuine automorphism and on a non-Keller control for $k = 0$ to $5$ before writing this; it holds on both.

## Where the Keller condition enters

When $J$ is a nonzero constant, the right side simplifies, and two things follow.

**A test at $k = 0$.** The coefficient of $y^{n-1}$ in a constant is zero for $n \ge 2$, so $P_1$ does not depend on $x$ at all. For a Keller pair, $\operatorname{Tr}(f)$ is free of $x$. This is a one-line necessary condition, and on every non-Keller control we tried it fails immediately.

**A degree bound.** For general $k$, the $x$-degree of $P_{k+1}$ is at most $(k+1)\,c_{\max}$, where $c_{\max}$ is the largest pole order of $f$ along the branches of the fibre at infinity. For a Keller pair each bottom root contributes a pole of order $q/e < 1$. So the left side has degree $O(k)$, while $f^{k} \bmod (g-c)$ is an object with $\Theta(k\,m)$ coefficients to play with.

:::figure{src="trace-degrees" label="Figure 1" alt="A plot of the x-degree of the trace of f to the k plus 1 against k from 0 to 5. The non-Keller control rises in a straight line from 1 to 6. The Keller automorphism stays at 0 through k equals 4 and reaches 1 at k equals 5."}
The $x$-degree of $\operatorname{Tr}(f^{k+1})$ for a Keller automorphism and a non-Keller control, computed exactly. The control grows one degree per step. The Keller pair sits on the floor, as the bound $(k+1)c_{\max}$ with $c_{\max} < 1$ requires. The $k=0$ point alone separates the two.
:::

That mismatch between an $O(k)$ bound and a $\Theta(km)$ object was the hope. The $n - m - 1$ homogeneous conditions of the global interpolation framework are moment identities of exactly this form, and moment identities with more unknowns than equations tend to force structure. If one could show that the actual degree of the remainder has to grow like $km$ in general, the bound would force a ceiling $D \le C(N)$, and the census would be finite after all.

## Why it is not a ceiling

The bound is attained. The lane that proved the identities also proved an attainment theorem: the leading coefficient of the remainder is set by the bottom Davenport–Stothers star, several levels below the initial forms, and it is generically nonzero. So no lower bound on the remainder's degree above $(k+1)c_{\max} - 1$ can exist, and the automorphisms are witnesses. The premise that the remainder has degree $\Theta(km)$ in general was refuted outright by the automorphism $(x + y^{5},\ y + (x+y^{5})^{3})$, for which the remainder vanishes identically through $k = 13$.

Worse for the program, every quantity in the identity family is a function of $(m, n, q_{\max}, e)$ alone. Even a perfect lower bound would give an inequality on $e$ in terms of $N$, never a bound on the total degree $D$. It is a shape constraint on the pair $(e, q_{\max})$, and on the frontier, where $e \in \{3, 5\}$, it is vacuous.

The identities and the negative reading were promoted together after a different-model review that re-ran all five drivers. The review repaired several proofs and refuted two overclaims, one of them the claim that the bound needs no Keller hypothesis, with the witness $(y,\ y^{2}+1)$. The conclusion that there is no degree ceiling here stands.

## What survived

Two things. First, the Keller test at $k = 0$, which costs one trace. Second, and more useful: every one of the global degree identities in the interpolation engine is a remainder coefficient over $\mathbb Q$, of the form $[y^{n-1}](w \cdot f \bmod (g-c))$ for a polynomial weight $w$. The engine's degree block can therefore be re-based onto exact remainder arithmetic, with no Puiseux expansion and no exponent semigroup. That is a real simplification of an instrument, even though the instrument does not prove what it was built to prove.

## A question to take away

The identity above is in the $x$-direction. There is a companion in the $c$-direction, $\frac{d}{dc} P_k = [y^{n-1}]\bigl((f^{k})_y \bmod (g-c)\bigr)$. Is the $c$-degree of $P_k$ also generically attained, or is there a regime where the $c$-derivative sees something the $x$-derivative does not?
