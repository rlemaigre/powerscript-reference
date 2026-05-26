# How type promotion works

When PowerBuilder evaluates an expression, it converts the datatypes of constants and variables so that it can process or combine them correctly.



Numbers When PowerBuilder evaluates numeric expressions, it promotes the datatypes of values according to the operators and the datatypes of the other operands. For example, the datatype of the expression n/2 is double because it involves division -- the datatype of n does not matter. Strings When evaluating an expression that involves chars and strings, PowerBuilder promotes chars to strings. For more information on type promotion, see Datatype of PowerBuilder expressions. Using conversion functions



You can take control over the datatypes of expressions by calling a conversion function. The conversion function ensures that the datatype of the expression matches the function prototype you want to call.



For example, because the expression n/2 involves division, the datatype is double. However, if the function you want to call expects a long, you can use the Long function to ensure that the function call matches the prototype:



CalculateHalf(Long(n/2))
