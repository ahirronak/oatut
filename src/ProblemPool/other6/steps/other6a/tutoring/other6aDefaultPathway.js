var hints = [{id: "other6a-h1", type: "hint", dependencies: [], title: "Subtract", text: "Subract $$x^{\\frac{1}{2}}$$ from both sides, and we get the equation $$\\left(3\\right) x^{\\frac{3}{4}}-x^{\\frac{1}{2}}=0$$."}, {id: "other6a-h2", type: "hint", dependencies: ["other6a-h1"], title: "Rewrite", text: "Rewrite $$x^{\\frac{1}{2}}$$ as $$x^{\\frac{2}{4}}$$, and we get $$\\left(3\\right) x^{\\frac{3}{4}}-x^{\\frac{2}{4}}=0$$"}, {id: "other6a-h3", type: "hint", dependencies: ["other6a-h2"], title: "Factor", text: "Factor out $$x^{\\frac{2}{4}}$$, and we get x**(2/4)(3x**(1/4) - $$1)=0$$"}, {id: "other6a-h4", type: "hint", dependencies: ["other6a-h3"], title: "Zero Product Property", text: "This states that either $$x^{\\frac{2}{4}}=0$$ or (3x**(1/4) - $$1)=0$$"}, {id: "other6a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["0"], dependencies: ["other6a-h4"], title: "First Solution", text: "Set $$x^{\\frac{2}{4}}=0$$ and simplify. What is x?"}, {id: "other6a-h6", type: "hint", dependencies: ["other6a-h5"], title: "Next Solution", text: "Set $$\\left(3\\right) x^{\\frac{1}{4}}-\\left(1\\right)=0$$"}, {id: "other6a-h7", type: "hint", dependencies: ["other6a-h6"], title: "Add", text: "Add 1 to both sides, and we get $$\\left(3\\right) x^{\\frac{1}{4}}=1$$."}, {id: "other6a-h8", type: "hint", dependencies: ["other6a-h7"], title: "Divide", text: "Divide both sides by 3, and we get $$x^{\\frac{1}{4}}=\\frac{1}{3}$$."}, {id: "other6a-h9", type: "hint", dependencies: ["other6a-h8"], title: "Reciprocal", text: "Raise both sides to the power of 4(reciprocal of the exponent on the left side), and we get $$x={\\left(\\frac{1}{3}\\right)}^4$$."}, {id: "other6a-h10", type: "hint", dependencies: ["other6a-h9"], title: "Simplify", text: "Simplify the expression. What is x?"}, ]; export {hints};