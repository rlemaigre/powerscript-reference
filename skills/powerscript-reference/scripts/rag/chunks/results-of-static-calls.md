# Results of static calls

Static calls do not guarantee that the function or event identified at compile time is the one that is executed. Suppose that you define a variable of an ancestor type and it has a particular function definition. If you assign an instance of a descendant object to the variable and the



descendant has a function that overrides the ancestor's function (the one found at compile time), the function in the descendant is executed.
