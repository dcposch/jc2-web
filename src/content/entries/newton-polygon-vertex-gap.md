---
title: "How a gap in a Newton polygon forces coefficients to vanish"
date: 2026-08-20
description: "The Jacobian bracket reads off one equation per lattice point, and at a corner that equation has a single term. Following the consequences empties a whole chart of the strip family."
---

A Keller map has to satisfy one equation, $P_xQ_y - P_yQ_x = 1$. That looks like a single condition, but a polynomial identity is really a long list of conditions, one for each monomial. The useful question is which of those conditions are short. Short equations are the ones that force things to be zero, and where they sit is decided by the shape of the exponents rather than by the coefficients.

## One equation per lattice point

Write $P = \sum_p a_p\, x^{p_1}y^{p_2}$ and $Q = \sum_q b_q\, x^{q_1}y^{q_2}$, indexing coefficients by their exponent vectors. Differentiating and collecting terms gives

$$
[P,Q] \;=\; P_xQ_y - P_yQ_x \;=\; \sum_{p,q} \det(p,q)\, a_p b_q\; x^{p_1+q_1-1}\, y^{p_2+q_2-1},
$$

where $\det(p,q) = p_1q_2 - p_2q_1$. Reading off a single monomial,

$$
\bigl[\,x^{i}y^{j}\,\bigr]\,[P,Q] \;=\; \sum_{p+q=(i+1,\,j+1)} \det(p,q)\, a_p b_q .
$$

Two features of this formula do all the work.

The first is that $\det(p,q)$ vanishes when $p$ and $q$ are parallel. Exponent pairs that lie on a common ray through the origin contribute nothing at all, no matter how large their coefficients are. A whole edge of a Newton polygon can be invisible to the bracket for this reason.

The second is the shape of the index set. The term $a_pb_q$ appears in the equation at $(i,j)$ exactly when $p+q = (i+1,j+1)$. So the length of that equation is the number of ways the lattice point can be split into an exponent of $P$ plus an exponent of $Q$. That count is a question about the Minkowski sum of the two Newton polygons, and it is smallest where the sum is thinnest.

At a **vertex** of the Minkowski sum the count is one. There is exactly one way to write a corner as a sum, namely corner plus corner. The equation there is not a sum at all but a single product.

## The shortest equation on the board

In the normalized setting the relevant corners are $p_0 = (1,0)$ on the $P$ side and $q_0 = (2,1)$ on the $Q$ side. Their sum $(3,1)$ is the lattice point carrying $x^2$, and it is a vertex of the Minkowski sum. So its equation reads

$$
\det\bigl((1,0),(2,1)\bigr)\, a_1 b_3 = 1, \qquad \text{that is} \qquad a_1 b_3 = 1 .
$$

Both corner coefficients are forced to be nonzero, and each is the reciprocal of the other. That is the foothold. Everything afterwards is elimination: a nonzero coefficient is a pivot, and a pivot lets you solve one equation for one unknown and substitute it everywhere else.

:::figure{src="vertex-gap" label="Figure 1" wide alt="Two lattice panels. On the left, exponent points with two overlapping shaded bands running in the direction w equals 2i minus j, with the corner points a1 at (1,0) and b3 at (2,1) marked. On the right, arrows from the origin to (1,0) and then to (3,1), with (3,1) ringed and labelled as carrying x squared."}
Left: both supports lie in thin bands measured by $w = 2i - j$, which is what makes the Minkowski sum thin and its equations short. Right: the point $(3,1)$ carries $x^2$ and is a corner of the sum, so it has only one decomposition and its equation collapses to the single product $a_1b_3 = 1$.
:::

## Gaps, and the step that is not linear

A gap is a lattice point that the supports can barely reach. Where the strip leaves a column empty, the equation at the neighbouring point has very few terms, and with a pivot in hand those few terms can be solved to zero. Running this through the cell produces a cascade: each killed coefficient shortens the equations that mentioned it, which exposes the next short equation.

One step in that cascade is different in kind. Rather than a linear solve it produces

$$
(a_3 b_3)^2 = 0 .
$$

Since we are in a domain this gives $a_3b_3 = 0$, and since $b_3$ is invertible it gives $a_3 = 0$. This is worth pausing on: the equation the bracket hands you is not $a_3 = 0$, and no amount of linear elimination will produce $a_3 = 0$. It is a statement about a square, and you need to take a radical to read it. The cascade is arithmetic, not just linear algebra.

A later point contributes $a_2^2 a_6 = 0$ by the same kind of step.

## The statement

**Vertex-gap obstruction at $(2,2)$.** Let $K$ be a field of characteristic not in $\{2,3,5\}$, and let $P,Q \in K[x,y]$ be a normalized type-$(2,2)$ strip pair: writing $w(i,j) = 2i-j$,

$$
\operatorname{supp} P \subseteq \{0 \le w \le 2\},
\qquad
\operatorname{supp} Q \subseteq \{0 \le w \le 3\} \cap \{i \le 2j\},
$$

$$
[P,Q] = P_xQ_y - P_yQ_x = x^2 .
$$

Then $a_3 = a_{(1,2)} = 0$ and $a_2^2 a_6 = a_{(1,1)}^2 a_{(2,4)} = 0$.

The consequence is the useful part. The generic chart of the strip family is the one where $a_2a_6 \neq 0$, and the conclusion says that chart is empty. A family that looked like it had room turns out to have none.

This is [formalized in Lean 4](https://github.com/dcposch/jc2-lean/tree/main/vertex-gap) and registered as [PALOMAR-2026-08-20-000001](https://palomar-registry.org/entry?id=PALOMAR-2026-08-20-000001&version=1). The vertex equation and the gap kill are derived from the bracket inside the formalization rather than assumed, which is the part worth checking, since assuming them would beg the question.

## Scope

This is the $(2,2)$ case at polynomial level, both label assignments, together with the corner enumeration and the side-symmetric gap condition. It is what discards the generic chart of the $(8,28)$ strip subcase in [Guccione, Guccione, Horruitiner and Valqui](https://arxiv.org/abs/2204.14178), Proposition 4.3, subcase (2), at Newton-degree pair $(72,108)$.

A good deal around it is **not** formalized: the general-cell counting propositions, the gap-kill lemma at general $(k,d_2)$, the radical-membership refinement, the $(2,3)$ and $(2,4)$ variants, the certificates for $k \ge 3$, the worked $(8,28)$ example, the logarithmic-residue functional, and the block-variety theorem. The chart reduction that carries this to $(72,108)$ is also outside the formalized part. Only the $(2,2)$ statement above is machine-checked.

## A question to take away

The cascade above needed a radical step. Counting equations against unknowns would never have predicted it, because the obstruction is not that there are too many linear conditions but that one condition is a square.

So: for which cells $(k,d_2)$ does the cascade close using only linear elimination, and for which does it genuinely need to pass to a radical? A clean criterion would say in advance which cells are cheap and which need the heavier machinery, and it would make the general-cell argument much shorter than doing each case by hand.
