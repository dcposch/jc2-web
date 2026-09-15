---
title: "Which discs are conjugate, and how many configurations are really left"
date: 2026-09-06
description: "An assumption about which branches at infinity are Galois conjugates ran through two integration cycles and was not a theorem. Replacing it with the actual orbit law cut the necessary configurations at n ≤ 200 from twenty-four thousand to ninety. At n ≤ 100 it reproduces Moh's 1983 list exactly."
sources:
  - label: "Lane report"
    href: "https://github.com/dcposch/jc2/blob/master/xmodel/branch-orbits-v2-grok46-20260903.md"
  - label: "Hostile review (AUDIT 17(j))"
    href: "https://github.com/dcposch/jc2/blob/master/xmodel/branch-orbits-v2-review-gpt55-20260903.md"
  - label: "Stabilizer theorem"
    href: "https://github.com/dcposch/jc2/blob/master/xmodel/actual-stabilizer-soundness-opus5-20260906.md"
  - label: "Gate (AUDIT 17(ggggggggggg))"
    href: "https://github.com/dcposch/jc2/blob/master/xmodel/actual-stabilizer-screen-gate-astra-20260906.md"
---

The cube-root entry used a symmetry to sort equations by weight. This entry is about the same idea at infinity, where the symmetry is the Galois action on Puiseux branches, and about what happens when you assume more symmetry than you have.

## The assumption

In Moh's normal form the top homogeneous factor of $g$ is $L_1^{u} L_2^{v}$, a product of two linear forms with unequal multiplicities. The campaign's integration cycles sixteen and seventeen carried a working assumption, called (UNI), that the $u$ copies of $L_1$ sit in $u$ conjugate major discs, permuted transitively by the Galois action, so that the disc data are uniform across them. Under (UNI) every packet of discs came with an interval of admissible geometric degrees $N$.

(UNI) is not a theorem. Reading Moh's pages 194 and 200 as images shows that the $u$ slots lie under one major disc $D_{s-1}$, not $u$ of them. What is conjugate to what is decided further down, one level at a time.

## The orbit law

At each split $D_j \to D_{j-1}$ in the tower, Moh's condition (10) or (11) holds, and the two behave differently. On a (10)-level the local parameter satisfies $\pi \mapsto \omega^{B}\pi$ with $(A_j, B) = 1$, an action that is free of order exactly $A_j$; a root-of-unity centre or ramification higher up does not shrink it. On an (11)-level the relevant factor is $\pi$ itself and the action is trivial. So for one bottom-major disc in one tower,

$$
|O|(D_1) \;=\; \prod_{j=2}^{s-1} \omega_j, \qquad \omega_j = \begin{cases} A_j & \text{on a (10)-level,}\\ 1 & \text{on an (11)-level.}\end{cases}
$$

Each orbit satisfies conditions (8) through (13) on its own. What the orbits share is a packing constraint in the parent disc, and at $s = 3$ that packing is exact, because the unique parent is $D_2$ and its capacity is $u$ algebraically. Above $s = 3$ the flat packing is only a relaxation, and survivors there are an upper bound.

:::figure{src="orbit-screen" label="Figure 1" wide alt="Left: a schematic tower with a root disc splitting into a major and a minor child; the major child splits into four conjugate bottom discs joined by an arc labelled one orbit. Right: four horizontal bars on a log scale labelled 24,063 printed rows, 1,420 coarse stabilizer, 90 actual stabilizer theorem, and 64 full conjunction."}
Left: one tower with $s = 3$. The deck action rotates the bottom discs below the (10)-level into a single orbit of size $A_2$, and does nothing on an (11)-level. Right: the number of necessary configurations at $n \le 200$ after each screen, on a log scale. The last two bars are theorems; the first two are the historical counts.
:::

## What changed

This was promoted on 3 September with the review's repairs. Three consequences were immediate. Every (UNI) interval in the record was retyped as a relaxation and replaced by the orbit-admissible set. The three groups at degree $105$, which under (UNI) admitted $N$ anywhere from $6$ to $12$, are each a single orbit of size $18$, $13$ or $17$, and all three have $N = 9$. And degree $88$, which had survived, is empty in the window $[6,16]$ by exact $s=3$ packing. Moh's six printed rows, read the same way, have admissible sets $\{9\}, \varnothing, \{10\}, \{9\}, \{8\}, \{16\}$.

The larger consequence took three more days. Once the orbit law is a theorem, the census can be screened by the actual stabilizer of each configuration rather than a coarse one, and every clause of that screen was shown necessary at the actual modulus. The result, promoted on 6 September after a gate that independently replayed it:

$$
24{,}063 \;\longrightarrow\; 1{,}420 \;\longrightarrow\; 90
$$

necessary configurations at $n \le 200$, from the printed conditions, to the coarse stabilizer, to the actual one. At $n \le 100$ the same screen takes twenty rows to six, and those six are exactly the six Moh printed in 1983. A screen that reproduces the hand computation of the person who invented the census is the right kind of evidence that it is doing what it claims.

With one further screen, the exact-contact conditions from Xu's work on root splitting, the $90$ becomes $64$. That step is banked separately and it is the residual the descent entry refers to.

## Scope

The $90$ counts necessary configurations of a normalized minimal counterexample in Moh's presentation. It counts configurations, not pairs of polynomials; a realised pair supplies its own root multisets, and the theorem's content is that no other configuration can. The degree-reduction exclusions it uses require minimality, so the count does not transfer to descended children, whose Jacobian is a monomial. Above $s = 3$ the packing is a relaxation, registered as an open problem with a cheap dynamic-programming test. Geometric realisability of any packet is open, as it is throughout.

## A question to take away

The $64$ fall into three families of $23$, $22$ and $20$. Each family shares a tower shape. Is there an invariant of the tower shape, rather than of an individual row, that kills a whole family at once? The orbit law was one such invariant and it removed most of the census. The next one would remove most of what is left.
