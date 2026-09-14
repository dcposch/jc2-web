---
title: "The census never empties"
date: 2026-09-03
description: "Three explicit unbounded families pass every one of Moh's printed conditions, so no degree bound can come from the numerical skeleton alone. Any uniform proof has to use a datum the skeleton does not carry."
---

For two weeks the campaign's centre of gravity was a census. Here is what the census was, what it promised, and the theorem that ended the promise.

## What a degree program hopes for

Moh's 1983 paper attaches to any hypothetical counterexample $(f,g)$ a finite list of integers and rationals describing how the two polynomials behave at infinity: the degrees $n = \deg_y g$ and $m = \deg_y f$, a tower of "major discs" with radii and multiplicities, and denominators that record how the Puiseux branches split. He then prints thirteen compatibility conditions that this data must satisfy, and he runs the search by hand for $n \le 100$. The output is a short list of surviving rows.

The hope built into this is simple. If the list of surviving rows is finite, then a counterexample has bounded degree, the problem becomes a finite computation, and the computation can be done. The campaign pushed this program as far as it would go. Our own corrected survivor list, with Moh's $(64,48)$ row restored, gives $D_{\min} \ge 105$ for a noninvertible Keller map, and the three rows at degree $105$ became a named target.

Pushing the census further needed it to be automated, and automating it is what killed the hope.

## Three families that never stop

On 3 September, Sol exhibited an explicit infinite family of skeletons that pass all thirteen conditions. For every $a \ge 0$, put $L = 8a+5$ and take

$$
n = 21L, \qquad m = 14L, \qquad s = 3, \qquad V = (1, 5),
$$

with the radii $\delta = \bigl(-1,\ \tfrac{12a+7}{6(5a+3)},\ \tfrac{7}{12}\bigr)$. The first member has degree $105$; the next have degrees $273$, $441$, $609$, and so on without end. Twenty-one members were run through the exact census implementation and all pass. This is [promoted](https://github.com/dcposch/jc2-lean) at the skeleton level after a different-model review that re-derived the identities in $a$ symbolically.

The same morning brought a correction worth recording, because it is the kind of thing this site exists to record. The family was announced with its geometric degree pinned at $N = 6$. That value came from a packet that turned out to be only part of a Galois orbit. The orbit-admissible value is $N = 15a+9$, and it grows. The family stands; the pinned $N$ did not. A second ray, found in the review, does what the first was claimed to do: for $P = 7t+6$, $n = 9P$, $m = 6P$, the orbit-admissible $N$ is $6$ for every $t$, at degrees $54, 117, 180, \ldots$ That one is provisional, with the review as producer.

The third family is the cleanest. For every integer $t \ge 1$, with $e = 3t+1$ and $d = 2t+1$,

$$
n = 48t + 16, \qquad m = 32t + 16, \qquad N = 6t + 3 .
$$

Its greatest common divisor is $16$ at every $t$, hence the name, the $K = 16$ ray. It produces exactly one row at each of its degrees, it passes every screen the campaign owns, and it is promoted after a hostile gate confirmed all six of its claimed properties. Its first member, $t = 1$, is the $(64,48)$ row that Moh himself killed in his Appendix II. Its second, at $(112,80)$, is the first honest instance above Moh's table.

:::figure{src="census-rays" label="Figure 1" wide alt="A scatter of geometric degree N against n for three families. The L equals 8a plus 5 ray rises steeply from degree 105. The A2 equals 6 ray sits flat at N equals 6 from degree 54 onward. The K equals 16 ray rises from degree 64. All three run off the right edge."}
Three families of admissible skeletons, plotted by geometric degree against $n$. Each runs to infinity; none ever fails a printed condition. The flat one is the ray with $N$ pinned at $6$. Tiers: the $L = 8a+5$ and $K=16$ rays are promoted; the $A_2 = 6$ ray is provisional.
:::

## What the theorem says

Six independent readings of the round agreed on the consequence, and the ledger records it in one line: emptiness of the numerical space cannot prove JC2. The screen is a target-list generator, not a proof program. Any uniform theorem must consume a datum that is not in the scalar skeleton.

That is a negative result about a method, and it is a strong one. It does not say the census is useless; the census is what produced the target rows every later attack is calibrated against. It says that the census can never be the last step.

## What is not claimed

None of these families is a Keller map. They are numerical skeletons that satisfy the printed conditions plus a formal packing of discs. Whether any member is geometrically realised by an actual pair of polynomials is open for all three rays, and the question is registered as such. Realising the first member of the $A_2 = 6$ ray, at degree $54$, would be a counterexample. Refuting it needs one of the data described in the next three entries.

## What happened next

The round named three data outside the skeleton, each with an instrument and a lane: trace and moment identities on the fibre $g = c$, which grow with the degree while $N$ stays pinned; Moh's own descent, which sends a pair to a smaller pair with a monomial Jacobian; and the Galois orbit structure of the discs, which had been assumed and turned out not to be a theorem. The three rows at degree $105$ were demoted the same day from flagship to regression client. The next three entries take the three data in turn.

## A question to take away

Every one of the three families has $s = 3$, three levels of major discs. Is there an admissible family with $s = 4$? If there is not, then a uniform theorem would only need to consume one datum at the fourth level, and the search for it becomes much narrower.
