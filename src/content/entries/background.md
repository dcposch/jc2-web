---
title: "Background: reversible maps and JC2"
date: 2026-08-18
description: "What was known before the campaign: why reversibility near every point does not obviously give a single global inverse, and how the difficulty concentrates at infinity."
---

The plane Jacobian conjecture asks whether a polynomial transformation that is reversible in a small neighborhood of every point must be reversible everywhere. Its hypothesis comes straight from multivariable calculus: the determinant of the derivative is a nonzero constant. Its conclusion is much stronger: the transformation has a single, globally defined inverse, and that inverse is also polynomial.

This background describes the problem and the mathematical landscape before the campaign's results. The central difficulty is the passage from local information to global behavior, especially behavior at infinity.

## From linear algebra to polynomials

Start with linear algebra. A linear transformation of two variables has the form

$$
\begin{pmatrix}u\\v\end{pmatrix}
=A\begin{pmatrix}x\\y\end{pmatrix}.
$$

When $\det A\ne0$, every output has exactly one input, and the inverse transformation is another linear map. The same matrix describes the transformation everywhere, so a single determinant settles the question.

Now replace the linear expressions by polynomials:

$$
F(x,y)=\bigl(P(x,y),Q(x,y)\bigr).
$$

The derivative becomes a matrix that depends on the input:

$$
DF(x,y)=
\begin{pmatrix}
P_x&P_y\\
Q_x&Q_y
\end{pmatrix},
\qquad
J_F=P_xQ_y-P_yQ_x.
$$

Here $P_x$ means the partial derivative of $P$ with respect to $x$. The determinant $J_F$ is called the *Jacobian determinant*. The conjecture says that if

$$
J_F(x,y)=c\qquad\text{for every }(x,y),\qquad c\ne0,
$$

then there are polynomials $R,S$ such that

$$
F^{-1}(u,v)=\bigl(R(u,v),S(u,v)\bigr).
$$

The variables and coefficients here are complex numbers. Thus $F$ maps $\mathbb C^2$ to $\mathbb C^2$. A map satisfying the nonzero constant Jacobian condition is often called a *Keller map*, after Ott-Heinrich Keller, who posed the problem in 1939. The abbreviation **JC2** means the Jacobian conjecture in two variables. [Van den Essen's survey](https://smf.emath.fr/publications/polynomial-automorphisms-and-jacobian-conjecture) gives the classical formulation and its equivalent versions.

There are many nonlinear examples that satisfy the conclusion. Consider

$$
F(x,y)=(x+y^2,y).
$$

Its Jacobian matrix and inverse are

$$
DF=
\begin{pmatrix}1&2y\\0&1\end{pmatrix},
\qquad
F^{-1}(u,v)=(u-v^2,v).
$$

The determinant is identically one. Geometrically, on the real slice, each horizontal line slides sideways by an amount depending on its height. Nothing is lost: the second coordinate remembers the height, allowing us to undo the slide.

More generally, $(x,y)\mapsto(x+h(y),y)$ works for every polynomial $h$, however large its degree. Composing such transformations with vertical versions and invertible affine maps produces much more complicated examples. Each composition remains invertible because we can undo its steps in reverse order.

:::figure{src="shear-grid" label="Figure 1" alt="Two panels sharing one coordinate frame. On the left, a square grid. On the right, its image under the shear: horizontal lines stay straight and slide sideways, while vertical lines bend into parabolas. Two marked points a and b move with the grid."}
A unit grid and its image under the shear $F(x,y)=(x+y^{2},y)$. Horizontal lines slide sideways by an amount fixed by their height; vertical lines bend into parabolas. Nothing is lost, because the second coordinate remembers the height. This is a real slice of a map defined over $\C^{2}$.
:::

In fact, the classical Jung–van der Kulk theorem says that every polynomial automorphism of $\mathbb C^2$—every polynomial map with a polynomial inverse—can be assembled from affine maps and transformations of this triangular kind. The theorem gives a remarkably complete description of the maps already known to be invertible. Applying it requires invertibility; the unresolved step is deriving that property from the Jacobian condition alone. [Lamy's geometric proof of the theorem](https://www.math.univ-toulouse.fr/~slamy/stock/jung_translation.pdf) explains this structure.

The condition in the conjecture is certainly necessary. Suppose $G$ is a polynomial inverse to $F$. The chain rule gives

$$
DG(F(x,y))\,DF(x,y)=I.
$$

Taking determinants,

$$
\det DG(F(x,y))\,J_F(x,y)=1.
$$

Both factors are polynomials in $x,y$. A product of two nonzero polynomials can equal one only when both are constants: the degree of a product is the sum of the degrees. Consequently, a polynomial inverse forces the Jacobian determinant to be a nonzero constant. JC2 asks whether this necessary condition is sufficient.

## Why the complex numbers

Why use complex numbers? They make the polynomial condition especially rigid. Every nonconstant polynomial in one complex variable has a root. The corresponding fact in several variables is that a nonconstant complex polynomial has a zero somewhere: one can restrict it to a suitable affine line and obtain a nonconstant one-variable polynomial. Therefore, for a complex polynomial Jacobian, “never zero” and “a nonzero constant” are equivalent.

Over the reals these statements differ. The polynomial $1+x^2$ never vanishes on $\mathbb R$, but it is not constant. This distinction matters: in 1994 Sergey Pinchuk constructed real polynomial maps of the plane with everywhere positive Jacobian that are not injective. Their determinants are nonconstant, so they do not satisfy the hypothesis of JC2. [Pinchuk's paper](https://link.springer.com/article/10.1007/BF02571929) disproved this stronger real analogue.

There is also a dimensional translation to keep in mind. Each complex number has two real coordinates, so $\mathbb C^2$ has four real dimensions. “Plane” refers to complex dimension two. Pictures drawn in an ordinary plane are slices or schematic illustrations. Likewise, a complex algebraic *curve* usually has two real dimensions: away from singularities, it is a surface.

The one-variable complex conjecture is elementary. If a polynomial $p(z)$ has nonzero constant derivative, then $p(z)=az+b$ with $a\ne0$, and its inverse is $(w-b)/a$. Two variables are the first setting where nonlinear terms can survive while the Jacobian stays constant: the shear above already demonstrates how.

## What the inverse function theorem settles

The inverse function theorem explains what the Jacobian tells us. If $J_F\ne0$ at a point, there are small neighborhoods of that point and its image on which $F$ has a unique smooth, indeed complex-analytic, inverse. A Keller map therefore has no local folds, pinches, or collapsed directions anywhere in its domain.

But these local inverses need not obviously fit together into one global inverse. A familiar real example is

$$
E(s,t)=(e^s\cos t,e^s\sin t).
$$

Its Jacobian determinant is $e^{2s}>0$ everywhere. Nevertheless,

$$
E(s,t)=E(s,t+2\pi).
$$

The map wraps the plane around the punctured plane infinitely many times. Every small piece is reversible, yet distant inputs can have the same output. This example uses nonpolynomial functions and has nonconstant determinant. Its purpose is to show precisely what the inverse function theorem leaves undecided.

:::figure{src="exponential-wrap" label="Figure 2" alt="On the left, the (s,t) plane cut into horizontal strips of height two pi, with two small patches marked one strip apart. On the right, the punctured plane ruled by circles and rays, with a single patch marked: the common image of both."}
Each strip of height $2\pi$ covers the whole punctured plane. The two marked patches sit a full strip apart in the domain and share one image, so $E$ is reversible near every point and still far from injective. Locally invertible, globally many-to-one — and not polynomial.
:::

## Properness, and why infinity enters

An additional condition would close this local-to-global gap: *properness*. For a map between these Euclidean spaces, properness means that the inverse image of every compact set is compact. Equivalently,

$$
\|z\|\longrightarrow\infty
\quad\Longrightarrow\quad
\|F(z)\|\longrightarrow\infty.
$$

In words, inputs cannot escape arbitrarily far away while their outputs stay bounded.

A proper local diffeomorphism $\mathbb C^2\to\mathbb C^2$ is a covering map onto the whole target. A covering map has a fixed collection of local inverse “sheets” over each sufficiently small target neighborhood. Because $\mathbb C^2$ is simply connected—every loop can be contracted to a point—a connected covering has only one sheet. Thus properness, together with the Jacobian condition, gives global invertibility. Classical algebraic results then give a polynomial inverse. The connection between properness and polynomial maps is developed in [Jelonek's work on non-properness](https://matwbn.icm.edu.pl/ksiazki/apm/apm58/apm5834.pdf).

This is why infinity enters a problem whose hypothesis concerns derivatives at ordinary, finite points. A hypothetical counterexample must have a sequence

$$
\|z_k\|\to\infty,
\qquad F(z_k)\to a\in\mathbb C^2.
$$

The finite point $a$ is called an *asymptotic value*. It records an output approached by inputs disappearing to infinity.

Polynomial formulas do allow this behavior. Consider

$$
H(x,y)=(x,xy).
$$

Along the path $(x,y)=(1/t,t)$,

$$
H(1/t,t)=(1/t,1)\longrightarrow(0,1)
\qquad(t\to+\infty).
$$

The input escapes while the output converges. For an output $(u,v)$ with $u\ne0$, the inverse is $(u,v/u)$, displaying exactly where the blow-up occurs. This map is not a Keller map: its Jacobian is $x$, which vanishes on a line. The open problem is whether such escape can occur for a complex polynomial map of the plane whose Jacobian never vanishes.

:::figure{src="escape-to-infinity" label="Figure 3" alt="On the left, the hyperbola xy equals one climbing toward the vertical axis, with four marked points running off the top of the frame. On the right, their images marching leftward along the horizontal line v equals one toward an open circle at the point zero, one."}
The input runs off to infinity along $xy=1$ while its image walks along the line $v=1$ toward the finite point $(0,1)$ — an *asymptotic value*. Polynomial formulas do permit this. Note the Jacobian of $H$ is $x$, which vanishes along a line, so $H$ is not a Keller map and the picture is not a counterexample.
:::

Collect all asymptotic values into a set $A_F$, called the *non-properness set*. Before the campaign, substantial theorems already restricted it. For a Keller map of the complex plane, if this set is nonempty, it is an algebraic curve, possibly with several components; each component admits a polynomial parametrization $t\mapsto(a(t),b(t))$. Thus escape cannot accumulate on an arbitrary fractal or an arbitrary collection of isolated points. It has an algebraic shape. These facts, and additional restrictions from the Jacobian condition, appear in [Nguyen Van Chau's work](https://arxiv.org/abs/math/0305088).

## Counting inverse sheets

To study that shape, it helps to reinterpret inversion as an intersection problem. Finding the inputs of $(u,v)$ means solving

$$
P(x,y)=u,\qquad Q(x,y)=v.
$$

Each equation defines a complex algebraic curve. Their intersection consists of the desired inputs. The Jacobian condition says that whenever they meet at a finite point, their tangent directions are independent: the intersection is transverse. On a real slice, picture two families of contour lines crossing cleanly. Clean crossings do not, by themselves, tell us how many crossings occur.

For a generic output—one outside a suitable exceptional algebraic set—the number of inputs is a fixed positive integer $N$. This is the *geometric degree*, also called the sheet number or, in this setting, the topological degree. A polynomial automorphism has $N=1$.

This degree is different from the degree of the formulas. The shear $(x+y^{100},y)$ has polynomial degree $100$ but geometric degree one. By contrast, $(x^2,y)$ has polynomial degree two and geometric degree two, though it fails the Jacobian condition on $x=0$. When reading about “degree bounds” in JC2, it is essential to know which degree is being counted.

Away from $A_F$, a Keller map gives an $N$-sheeted covering. Move a target point around a loop and follow all its inputs continuously. On returning, the inputs may have exchanged positions. The resulting permutation is called *monodromy*.

The square-root function supplies a small model: following the two solutions of $z^2=w$ once around $w=0$ exchanges them. For a hypothetical Keller counterexample, the obstacle around which one loops is the asymptotic curve. The map has no finite critical points; a failure to extend the covering across that curve must involve infinity.

:::figure{src="monodromy" label="Figure 4" alt="On the left, the two square roots of w traced as w circles the origin once: each covers a half turn, ending where the other began. On the right, a schematic: a wavy curve labelled the non-properness set, a dashed loop encircling part of it, and four arcs above representing inverse sheets."}
Left: carrying $w$ once around the origin exchanges the two solutions of $z^{2}=w$ — the smallest example of *monodromy*. Right: the corresponding picture for a hypothetical Keller counterexample. Because the map has no finite critical points, any failure to continue the sheets around the loop has to come from the behaviour at infinity, not from a branch point in the plane.
:::

There is a second useful way to examine the same geometry. Fix $u$ and restrict $Q$ to the curve

$$
C_u=\{(x,y):P(x,y)=u\}.
$$

This curve is smooth because the gradient of $P$ cannot vanish when $J_F\ne0$. A tangent vector is $(-P_y,P_x)$, and the derivative of $Q$ in that direction is

$$
(-P_y,P_x)\cdot(Q_x,Q_y)=J_F=c\ne0.
$$

Thus $Q$ has no critical points along the affine curve $C_u$. The two-variable Jacobian condition has become a statement about a function on a one-complex-dimensional surface.

Such a surface can have handles and ends. After adding its missing points at infinity, one obtains a compact Riemann surface; its genus counts the handles. The function $Q$ extends as a meromorphic function, allowing poles at those added points. Classical formulas, notably Riemann–Hurwitz, relate its degree, the genus, and its ramification. Since there is no ramification on the affine part, the necessary ramification must be accounted for at infinity. This brings topology and asymptotic algebra into the same calculation.

## Calculating at infinity

How does one calculate at infinity? A first step is *compactification*: enlarge the affine plane by adding a boundary. The standard projective plane adds a whole line at infinity, whose points record limiting directions. Parallel affine lines meet at the same point on this added line.

Directions alone do not capture everything. Curves can approach the same point at infinity with different rates, or agree through several terms before separating. Algebraic geometers resolve these distinctions using *blow-ups*. Locally, a blow-up replaces a point by the collection of directions through it. Repeating the operation separates branches with increasingly close contact. The resulting boundary curves and their intersections can be recorded by a graph. [Borisov's pre-campaign frameworks](https://people.math.binghamton.edu/borisov/documents/papers/Frameworks_EJC_final.pdf) illustrate how these graphs organize hypothetical Keller maps.

An equivalent computational viewpoint uses fractional-power expansions, or *Puiseux series*. For example, the curve

$$
y^2=x^3+x
$$

has large-$x$ expansions

$$
y=\pm x^{3/2}\sqrt{1+x^{-2}}
=\pm\left(x^{3/2}+\tfrac12x^{-1/2}
-\tfrac18x^{-5/2}+\cdots\right).
$$

The fractional powers encode how solutions behave as $x$ goes around infinity. Substituting $x=t^{-2}$ turns them into ordinary integer powers of a local parameter $t$. Several choices of a fractional root can describe the same geometric end, so counting series and counting ends require care.

A *Newton polygon* helps determine the possible leading terms. Write

$$
P(x,y)=\sum a_{ij}x^iy^j,
$$

plot each exponent pair $(i,j)$ with $a_{ij}\ne0$, and take their convex hull. If $y$ grows like $x^r$, the monomial $x^iy^j$ grows like $x^{i+rj}$. For an equation to hold, leading terms must cancel. Edges of the polygon identify possible balances. In $y^2-x^3-x=0$, balancing $y^2$ with $x^3$ gives $2r=3$, hence $r=3/2$.

The polygon is a diagram of exponents, not a picture of the curve itself. It extracts asymptotic information from the formula. Successive expansions refine that information into the branching and contact patterns used in the classical work of Moh and others. [Xu's study of root splitting](https://arxiv.org/abs/1604.07683) provides a later development of that approach.

:::figure{src="newton-polygon" label="Figure 5" wide alt="On the left, the lattice points zero-two, one-zero and three-zero with their convex hull, the edge from zero-two to three-zero emphasised and labelled slope minus two thirds. On the right, a real slice of the curve y squared equals x cubed plus x, drawn against the dashed graph of y equals plus or minus x to the three halves."}
The Newton polygon records exponents, not the curve. Balancing $y^{2}$ against $x^{3}$ along the emphasised edge gives $2r=3$, so $y$ grows like $x^{3/2}$ — and on the right, the curve and that leading approximation agree to leading order, separating only below it. The polygon extracts asymptotic behaviour from the formula alone.
:::

## What was already excluded

These methods had already produced serious restrictions before the campaign. For example, Żołądek's 2008 theorem proves invertibility when the geometric degree is at most five. Any counterexample therefore needs at least six generic preimages. This concerns the number of sheets, irrespective of how large the polynomial formulas are. See Theorem 6.12 of [*An application of Newton–Puiseux charts to the Jacobian problem*](https://doi.org/10.1016/j.top.2008.04.001).

Another line of work organized possible counterexamples by the total degrees $(\deg P,\deg Q)$, after suitable changes of coordinates. Moh's 1983 work reported exclusion through degree 100. Later literature examined both extensions and gaps: Xu identified an unresolved root-splitting possibility in the original treatment of $(99,66)$, while a 2022 paper by Guccione, Guccione, Horruitiner, and Valqui reported a degree-108 bound and reduced the remaining $(72,108)$ case to explicit polynomial systems. These are statements about the published record; the precise hypotheses and coverage of the reductions matter when using a numerical bound. [Xu](https://arxiv.org/abs/1604.07683), [Guccione and collaborators](https://arxiv.org/abs/2204.14178).

Why do explicit polynomial systems remain difficult? Suppose both coordinates have degree at most $d$. Each can contain $(d+1)(d+2)/2$ monomials. At $d=100$, that is 5,151 coefficients per coordinate before any simplification. Requiring $P_xQ_y-P_yQ_x=1$ gives a large collection of coupled nonlinear equations in those coefficients.

Moreover, this system has plenty of solutions: polynomial automorphisms. A search for counterexamples must distinguish them from any genuinely noninvertible solutions. Classical reductions use coordinate changes, leading terms, and geometry at infinity to narrow the problem to special families. Every such reduction needs a coverage argument: an impossible reduced family excludes a counterexample only if that counterexample would necessarily belong to it.

One can then use elimination methods, including Gröbner bases, to solve the coefficient equations or prove inconsistency. The calculations use exact arithmetic, but their size can grow enormously. Counting more equations than unknowns does not prove inconsistency: equations may be dependent, or all vanish on a special family. Likewise, checking any fixed range of polynomial degrees leaves infinitely many degrees untreated.

Even constructing the inverse locally does not settle the issue. After translating a point and normalizing the linear part, write $F(z)=z+\text{higher-degree terms}$. One can recursively calculate an inverse as a formal power series. The inverse function theorem guarantees a convergent inverse near the chosen point. A polynomial inverse requires that this series terminate, and local invertibility alone does not explain why it should.

## Where the problem stood

The broader historical setting changed shortly before this campaign. In July 2026, Alpöge announced a counterexample in three complex dimensions. A three-dimensional counterexample extends to every higher dimension by appending unchanged coordinates:

$$
(z_1,\ldots,z_n)\longmapsto
\bigl(F_3(z_1,z_2,z_3),z_4,\ldots,z_n\bigr).
$$

Its Jacobian determinant remains the same, and any collision remains a collision. Dimension one is elementary, so the complex plane became the remaining case. The higher-dimensional construction did not supply a two-variable map. [Gao's account](https://arxiv.org/abs/2608.00222) describes that development and its geometry.

At the start of the campaign, the plane problem therefore had a sharp geometric form. A counterexample would have to be polynomial and locally reversible everywhere, have multiple generic inverse sheets, and evade global invertibility through a highly constrained algebraic configuration at infinity. A proof would have to show that these requirements cannot coexist in two complex dimensions. Calculus supplies the local inverse; the unresolved work is controlling how all those local inverses fit together across the entire plane.
