var hints = [{id: "modeling1a-h1", type: "hint", dependencies: [], title: "Find General Formula", text: "The first step is to identify what general formula can be used for direction variation with a cube.", variabilization: {}}, {id: "modeling1a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{25}{8}$$"], dependencies: ["modeling1a-h1"], title: "Solve for Constant", text: "Given $$y=25$$ and $$x=2$$, what is the value of constant k from the general formula?", variabilization: {}}, {id: "modeling1a-h3", type: "hint", dependencies: ["modeling1a-h2"], title: "Find Specific Formula", text: "Use the constant to write an equation that represents the relationship.", variabilization: {}}, {id: "modeling1a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["675"], dependencies: ["modeling1a-h3"], title: "Substitution", text: "What is y when $$x=6$$?", variabilization: {}}, ]; export {hints};