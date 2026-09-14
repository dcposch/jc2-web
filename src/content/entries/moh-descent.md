---
title: "Descending to a problem the campaign already knows how to solve"
date: 2026-09-05
description: "Moh's Appendix II sends a pair of degrees (n, m) to a smaller pair with a monomial Jacobian. The descended problems land where the campaign already holds certificates, an unbounded ray of them is now a theorem through its eighth member, and a printed step in Moh's own proof turned out to be wrong."
---

The second half of Moh's 1983 paper is easy to skip. The first half sets up the census; the second, in an appendix, kills the surviving rows one at a time by a change of variables. It took the campaign until September to read that appendix at the level of individual displayed formulas, and it turned out to contain the most reusable idea in the paper.

## The descent

At the lowest level of the tower of major discs, Moh's data include a degree $d_s$, a multiplicity $V_s$, and their difference $u_s = d_s - V_s$. When $u_s = 1$, Propositions 6.3 and 6.4 say that the pair $(f,g)$, of degrees $(n,m)$, descends: in new variables $(\gamma, \pi)$ it becomes a pair $(P, Q)$ of $\pi$-degrees

$$
\left(\frac{n}{d_s},\ \frac{m}{d_s}\right),
$$

with all the characteristic data divided by $d_s$, and with Jacobian

$$
[P, Q] = -\frac{u_s}{b}\,\gamma^{\,v_s - u_s - 1} .
$$

The child is not a Keller pair. Its Jacobian is a monomial rather than a constant. But that is exactly the "$[P,Q] = x^{k}$" world of the campaign's first avenue, the one the vertex-gap entry lives in, and the campaign already owns emptiness certificates there. A descended problem is a receiver: a certificate that the child is empty kills the parent.

Moh's own table on page 207 is the control: $(64,48)$ descends to $(16,12)$, $(84,56)$ to $(21,14)$, $(75,50)$ to $(15,10)$. Each was reproduced by machine from the printed data, and each child has between ten and twenty-five unknowns, which is a desk computation.

:::figure{src="descent" label="Figure 1" wide alt="Degree pairs plotted with n horizontal and m vertical. Filled points at the parent pairs (64,48), (84,56), (75,50), (112,80), (160,112) and (105,70), with arrows pointing toward the origin to ringed children at (16,12), (21,14), (15,10), (28,20) and (40,28). A dashed ray through the origin marks n to m equals 3 to 2."}
Descent moves each pair straight toward the origin along its own ray, dividing both degrees by $d_s$. The three left-hand parents are Moh's printed rows. The pairs on the dashed ray are the first members of the $K = 16$ family. The degree-$105$ pair descends two ways, because its three groups have different $d_s$.
:::

## What was promoted, and an erratum

The descent was promoted on 3 September after a different-model review that read the relevant pages of Moh as images and re-derived every printed number. Three things came out of it beyond the rule itself.

First, a conjecture the campaign had been carrying, that $M_2 > m$ for every Keller pair in Moh's normal form, is false. Twelve explicit polynomial automorphisms put into Moh's gauge violate it; the smallest has $n = 4$, $m = 2$, $M_2 = 1$. Moh says as much himself on page 151, in a passage about "our ignorance about the numbers $M_i$" that the campaign had not read carefully enough. Two proposed routes that used $M_2 > m$ as a hypothesis cannot work as posed.

Second, an erratum. Running Moh's $(15,10)$ case mechanically reproduces his quantity $\alpha$ but not his $\gamma$: the printed $-a_9^{2}a_{10}B$ must be $-a_9^{2}a_8B$. With the corrected $\gamma$, the case does not close where Moh's text says it does. It closes one step later, and decisively: five equations saturate to the unit ideal. His conclusion stands; his printed route to it does not. This was confirmed by hand in the review.

Third, a rule for the radii. The descended pair's own tower has radii, and they obey a closed form: $\delta_i' = (k+1)\cdot\delta_i$ where $k$ is the exponent of the monomial Jacobian and $\delta_i$ is the radius formula evaluated on the descended data. Ten of ten printed rationals match. This is what lets Moh's whole appendix be automated for any descended row.

## The K = 16 ray, and theorem (T)

The $K=16$ family from the census entry descends for every $t$, because $u_s = 1$ along the whole ray. The child of the $t$-th member is $(12t+4,\ 8t+4)$ with Jacobian proportional to $\gamma$. Killing the child is a statement the campaign calls theorem (T), and it is now proved for $t \le 8$, one member at a time, with the $t = 8$ case needing an FGLM conversion that ran for hours. Each proof is a certificate on a finite system; none of them is the uniform statement.

That uniform statement is the wall. Nine lanes have run at it under different names, and every one meets the same obstruction, a closed form in $t$ for one coefficient of a $4$-jet. The ray is a theorem through $t = 8$ and a conjecture beyond.

## Where the program stands

On 4 September the program along Moh's line was re-typed as two halves: a statement that the minor discs are empty, and descent plus theorem (T). Its scope deserves care. It reduces the stratum of counterexamples with two points at infinity and $M_s = n-2$ along Moh's line. It does not reduce all of plane JC2, and the leaks are named: the one-place case, eight assignments Moh's own argument leaves open at his $N_1$, a negative-$U$ branch, and $s' > 2$. The gap at $N_1$ is a genuine hole in Moh's published work, not a campaign artefact.

As of 6 September, the residual at $n \le 200$ under the full set of screens is $64$ necessary configurations. At $n \le 100$ the survivors are Moh's five rows and $(99,66)$, and the twelve fibres of the rows at $n \le 100$ are empty by tower arithmetic, so Moh's own range reduces to the closure of $(99,66)$. Brute force on the remaining charts is exhausted: Gröbner bases in Singular and msolve, and a Macaulay route, were run to a terabyte of memory and hours of time on the largest cloud machines available, without finishing a single one. The ledger's own phrase is that progress must come from structure.

## A question to take away

The $k=4$ ray, with data $(3K, 2K;\ 3K-6;\ K-1;\ k=4)$, unifies three of the hardest survivors: the $(99,66)$ case (A), the no-split arm at $D = 108$, and the rows with $\delta_1' = 0$. One statement about unsplit configurations on that ray would decide all of them uniformly. Write it down.
