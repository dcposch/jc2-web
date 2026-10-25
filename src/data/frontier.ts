// An editorial snapshot, not a second research ledger. Pin developments to
// evidence; question links follow current strategy. See the README contract.
const repository = 'https://github.com/dcposch/jc2';
const basis = 'db01d6034600ce8e85ed706db2d4e8fa4359f4fe';
const evidence = `${repository}/blob/${basis}`;
const strategy = `${repository}/blob/master/APPROACHES.md`;

export const frontier = {
  updated: '2026-10-25T05:11:00Z',
  basis,
  strategy,
  journal: `${repository}/blob/master/PROGRESS.md`,
  credit: 'swarmHQ · Astra / Fable / Sol',
  questions: [
    {
      id: 'geometry',
      question: 'Can global source geometry force invertibility?',
      context: 'Study the boundary added when a polynomial map is completed to a finite map.',
      href: `${strategy}#global-source-geometry`,
      date: '2026-10-25T03:30:00Z',
      headline: 'Divisorial targets are projective; static conditions allow index three',
      status: 'Reviewed theorem',
      kind: 'proved',
      development: 'On the divisorial eigenvaluation branch, the compact target Y and every finite iterate factor W_j are projective with rational singularities. Each boundary C_j is an ordinary cusp isomorphic to B, of arithmetic genus one, with C_j² = 1/(nN^j). A separate whole-plane projective surface with rational singularities, cuspidal boundary, and genuine canonical ideal has Cartier index n = 3, ruling out the static Gorenstein shortcut.',
      source: `${evidence}/xmodel/global-static-index-three-swarmHQ-root-astra-20261025.md`,
      sourceLabel: 'Index-three countertest →',
      report: `${evidence}/xmodel/divisorial-projectivity-swarmHQ-root-astra-20261025.md`,
      next: 'Derive an actual polynomial-map constraint over the singular ambient cusp to bound the Cartier index, eliminate exceptional curves of the source projection, or exclude omitted affine boundary components. The infinitely singular valuation branch remains open.',
    },
    {
      id: 'construction',
      question: 'Can a rational donor or invariant family become a polynomial map?',
      context: 'Test whether rational constant-Jacobian pairs, invariant foliations, or target pencils can produce a whole-plane counterexample.',
      href: `${strategy}#polynomial-construction`,
      date: '2026-10-21T23:52:00Z',
      headline: 'Pullback primitivity, Darboux zero laws, and invariant webs exclude donor repairs',
      status: 'Reviewed theorem',
      kind: 'proved',
      development: 'Any polynomial Keller map preserving a rational pencil, algebraic foliation, or finite algebraic web is invertible. Without invariance, target-primitive pencils with at most two bad fibers, three double fibers, or coprime binomial form P^m/Q^n stay primitive under Keller pullback. A field-generating rational Darboux form has simple normal crossing zero support wherever it is regular. If every point of a complete target curve has an etale preimage on a fixed source curve, no rational postpair extends to a polynomial Keller map.',
      source: `${evidence}/xmodel/complete-image-arbitrary-postcomposition-swarmHQ-root-sol56-20261021T234829Z.md`,
      report: `${evidence}/xmodel/three-double-fiber-review-swarmHQ-sol56-root-20261020T172346Z.md`,
      next: 'Construct a complete characteristic-zero polynomial pair, or connect the pullback-primitivity and Darboux-support obstructions to an arbitrary hypothetical finite normalization without a supplied donor pencil.',
    },
    {
      id: 'carrier',
      question: 'Does the explicit F10 normalization carrier contain a Keller pair?',
      context: 'Decide whether the four-generator subring T = C[U, UV, UV², UV³ − V] inside C[U,V] admits a constant-Jacobian pair.',
      href: `${strategy}#complete-f10-source`,
      date: '2026-10-16T13:43:00Z',
      headline: 'Full F10 normalization carrier identified in four generators',
      status: 'Reviewed theorem',
      kind: 'proved',
      development: 'For complete guarded compact F10 inputs, the two-chart affine surface Spec T is the full finite normalization over the target, with one smooth A¹ source complement of ramification index two. Any P, Q in T with J(P,Q) = 1 would be a JC₂ counterexample. Constant-direction pencil perturbations (p² + αH, U + βH) have no mate in T, and every Keller pair in T must carry both positive and negative weights. A separate closed test gives a nonsingular polynomial in T of geometric generic genus two with no rational constant-Jacobian mate, so scalar nonsingularity does not force rational fibers.',
      source: `${evidence}/xmodel/carrier-pencil-review-integration-swarmHQ-sol56-root-20261016T063000Z.md`,
      report: `${evidence}/xmodel/f10-full-normalization-integration-swarmHQ-root-20261015T223201Z.md`,
      next: 'Use the full constant-Jacobian identity on T = C[U, UV, UV², UV³ − V] to exclude or construct a finite pair (P, Q). Vanishing two-form moments and extreme-weight rows alone do not suffice.',
    },
    {
      id: 'operators',
      question: 'Can linear functionals or differential operators force module finiteness?',
      context: 'Look for a target-linear map, commutator lift, or Gaussian derivative domain that separates automorphisms from finite covers.',
      href: `${strategy}#trace-and-differential-operators`,
      date: '2026-09-23T16:38:00Z',
      headline: 'One nonzero target-linear functional suffices for invertibility',
      status: 'Reviewed theorem',
      kind: 'proved',
      development: 'For A = C[F₁, F₂] inside R = C[x, y] from any complex polynomial Keller map, Hom_A(R, A) ≠ 0 if and only if F is an automorphism, with no normalization, multiplicativity, or derivation condition on the functional. The same equivalence holds when the lifted holomorphic derivative domain is dense in Gaussian L² space, and when the first free-algebra commutator lift exists modulo I².',
      source: `${evidence}/xmodel/generic-dual-integration-swarmHQ-root-20260923T163500Z.md`,
      report: `${evidence}/xmodel/nonzero-dual-first-integration-swarmHQ-root-20260923T155000Z.md`,
      next: 'Construct a nonzero A-linear functional R → A or establish holomorphic Gaussian domain density from actual polynomial source coordinates, where local inverse-sheet retractions and real Sobolev cutoffs stop short.',
    },
  ],
} as const;
