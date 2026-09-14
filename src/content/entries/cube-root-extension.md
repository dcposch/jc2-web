---
title: "Why adjoining a cube root can simplify a problem"
date: 2026-08-26
description: "At partial degrees six and nine the leading coefficients are a square and a cube of the same polynomial, and one cube root makes both of them one. The symmetry that comes with it grades every remaining equation."
---

Enlarging the field you work over looks like the wrong direction. You wanted to solve a problem over $k(x)$, and now you have a bigger object with more elements in it. But an extension comes with a symmetry group, and a symmetry group sorts things. Sometimes the sorting is worth more than the simplicity you gave up.

Here is a case where the trade is obviously good.

## Two leading coefficients, one root

The setting is a pair $p, q \in k[x][y]$ of outer degrees six and nine in $y$, with a nonzero constant Keller bracket, and with leading coefficients that are not independent:

$$
p = H^{2}y^{6} + \cdots, \qquad q = H^{3}y^{9} + \cdots
$$

for a single $H$. The exponents are the thing to notice. Six and nine are both multiples of three, and the leading coefficients are the square and the cube of the same $H$. Write

$$
t = H^{1/3} .
$$

Then $t^{6} = H^{2}$ and $t^{9} = H^{3}$, so in the variable $z = t\,y$ both leading terms become $z^{6}$ and $z^{9}$. One substitution makes both polynomials monic at once. That is the whole reason to adjoin the root: not to make the field bigger, but to make the two leading coefficients disappear together.

## What you get in exchange

If $H$ is a cube in $k(x)$ then $t$ was already there and nothing happened. The interesting case is when $H$ is a **noncube**. Then $y^3 - H$ is irreducible, $k(x)(t)$ is a degree-three extension, and it is cyclic: the map

$$
\sigma : t \longmapsto \omega t, \qquad \omega^{3}=1,\ \omega \neq 1,
$$

generates its automorphism group. Applying $\sigma$ permutes the three cube roots $t, \omega t, \omega^{2}t$ cyclically and fixes everything in $k(x)$.

That gives a grading. Every element of the extension splits into three pieces according to how $\sigma$ scales it: weight $0$ for the pieces $\sigma$ fixes, weight $1$ for those it multiplies by $\omega$, weight $2$ for $\omega^{2}$. The weight-$0$ part is exactly $k(x)$.

:::figure{src="cube-root" label="Figure 1" wide alt="On the left, three dots evenly spaced on a circle labelled t, omega t and omega squared t, with curved arrows carrying each to the next. On the right, a table of powers of t in three columns headed weight 0, weight 1 and weight 2, with the weight 0 column marked as fixed by the map."}
Left: the deck map rotates the three cube roots of $H$ into one another and fixes the base field. Right: it therefore sorts powers of $t$ into three weights. The weight-zero column is just $1, H, H^{2}$, which is to say the part that was in $k(x)$ all along.
:::

The grading is what does the work. An identity that has to hold over $k(x)$ must hold weight by weight, so one equation in the extension becomes three separate equations, each shorter than the original. Better still, any expression built to be $\sigma$-invariant is automatically an expression in $H$, with the cube root gone. The extension is scaffolding: you put it up, use the symmetry to organize the equations, and take it down again.

## Alignment

The first place this pays is the leading Keller row. Cleared of denominators it says that a particular combination is constant under differentiation, and it is a weight-one quantity. A weight-one quantity that has to be fixed by $\sigma$ has to be zero, because $\sigma$ multiplies it by $\omega \neq 1$. So the nontrivial cubic action forces that discriminator to vanish, which pins down a relation among the coefficients before any elimination starts. The campaign calls this alignment: the symmetry aligns the two polynomials with each other at no cost.

From there the argument depresses both polynomials simultaneously, integrates the eight high bracket rows into a normal form with five coefficients and one extra parameter, and then extracts the four lower rows. The invariant part splits into two sheets, and the remaining work is to rule each one out.

## The statement

**Noncube exclusion at partial degrees $(6,9)$.** Let $p, q \in k[x][y]$ have outer degrees six and nine, leading coefficients $H^{2}$ and $H^{3}$, and nonzero constant Keller bracket. If $3 \mid \deg H$, then $H$ cannot be a noncube.

It is [formalized in Lean 4](https://github.com/dcposch/jc2-lean/tree/main/gcd3-69-noncube). The statement is worth reading carefully for what it does **not** contain: no preselected cubic extension, no affine normalization, no coefficient weights, no constant-field hypothesis, and no rational numerator and denominator presentation. All of that is constructed inside the proof from the literal polynomial hypotheses. That matters, because a statement that assumed the extension would be assuming the convenient half of the setup.

Three sheets have to be excluded to finish: a zero sheet, an elliptic sheet, and a shifted Davenport–Stothers sheet. They are excluded separately, and the third is the one that needs real work.

## Scope

This is the noncube branch and nothing else. It does not prove the cube branch, where $H$ **is** a cube and the extension above is trivial, so the entire grading argument is unavailable and a different mechanism is needed. It does not cover all of $(6,9)$. It does not reach maximum partial degree eleven. It does not prove the plane Jacobian conjecture.

Saying which half is done is the point. The noncube case is the one where the symmetry exists, which is exactly why it fell first. The cube case is harder for a reason that the proof above makes clear rather than hides: there is no deck action to grade by.

This mechanism was found in a single degree cell. For why cells alone cannot finish the problem, see [The census never empties](/entries/census-never-empties).


## A question to take away

The grading came free because $H$ was not a cube. When $H$ is a cube, $k(x)(H^{1/3}) = k(x)$ and there is no symmetry to exploit.

Is there a substitute? One direction worth trying is a different root: at partial degrees six and nine the exponents are divisible by three, but they are also even and odd respectively, so a square root behaves differently on the two polynomials. Another is to look for a grading that is not Galois at all, coming from a filtration rather than a group action. A mechanism that organizes the cube branch as cheaply as the deck action organizes the noncube branch would close the gap that this result leaves open, and it would probably be reusable well beyond $(6,9)$.
