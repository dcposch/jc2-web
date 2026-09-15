// An editorial snapshot, not a second research ledger. Pin developments to
// evidence; question links follow current strategy. See the README contract.
const repository = 'https://github.com/dcposch/jc2';
const basis = '9c5e10896c5d7064be5defab614a0d939b456087';
const evidence = `${repository}/blob/${basis}`;
const strategy = `${repository}/blob/master/APPROACHES.md`;

export const frontier = {
  updated: '2026-09-15T06:47:00Z',
  basis,
  strategy,
  journal: `${repository}/blob/master/PROGRESS.md`,
  credit: 'swarmHQ · Astra / Fable',
  questions: [
    {
      id: 'geometry',
      question: 'Can global geometry force invertibility?',
      context: 'Study the boundary added when a polynomial map is completed to a finite map.',
      href: `${strategy}#8-global-geometry-and-external-interfaces`,
      date: '2026-09-15T06:45:00Z',
      headline: 'A local smoothness shortcut fails',
      status: 'Producer-checked',
      kind: 'provisional',
      development: 'An explicit map from a singular surface passes even the strengthened local boundary test. Those local conditions cannot force the surface to be smooth.',
      // GitHub cannot render notes.md at its current size. The dated digest
      // records the outcome; the strategy link supplies the research context.
      source: `${evidence}/PROGRESS.md#2026-09-15`,
      sourceLabel: 'Read the research log →',
      next: 'Use the global requirement that the boundary complement is the whole affine plane. The local countermodel fails this requirement; the local test is closed.',
    },
    {
      id: 'descent',
      question: 'Can a higher-dimensional counterexample descend to the plane?',
      context: 'Look for symmetries that leave just two independent polynomial coordinates.',
      href: `${strategy}#8-global-geometry-and-external-interfaces`,
      date: '2026-09-15T03:45:00Z',
      headline: 'One symmetry route is ruled out',
      status: 'Reviewed theorem',
      kind: 'proved',
      development: 'In dimension n ≥ 3, equivariant Keller maps are invertible for the reviewed class of effective linear torus actions of rank n − 2, with trivial determinant character and invariant ring C[u,v].',
      source: `${evidence}/xmodel/volume-neutral-torus-first-swarmHQ-fable5-20260915T0323Z.md`,
      report: `${evidence}/xmodel/volume-neutral-torus-quotient-swarmHQ-root-20260915.md`,
      next: 'Find a descent mechanism outside these hypotheses that preserves a constant nonzero Jacobian and a collision. Arbitrary higher-dimensional maps remain outside this theorem.',
    },
    {
      id: 'construction',
      question: 'Can a formal construction become a polynomial map?',
      context: 'Turn compatible local formulas into a globally regular pair with constant Jacobian.',
      href: `${strategy}#7-st-construction-and-algebraization`,
      date: '2026-09-14',
      headline: 'A conditional way to remove poles',
      status: 'Producer-checked',
      kind: 'provisional',
      development: 'For a polynomial submersion p and a given rational q with J(p,q) = 1, a draft argument removes the poles of q when every fiber supporting a pole is irreducible.',
      source: `${evidence}/xmodel/rational-mate-polar-fibers-swarmHQ-root-20260914.md`,
      next: 'Construct a suitable pair in the first place, or establish global polynomiality for a formal candidate. No counterexample follows from finite jets or this conditional argument.',
    },
  ],
} as const;
