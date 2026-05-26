# 4.3 Datatype of PowerBuilder expressions General information

The datatype of an expression is important when it is the argument for a function or event. The expression's datatype must be compatible with the argument's definition. If a function is overloaded, the datatype of the argument determines which version of the function to call.



There are three types: numeric, string, and char datatypes.



- 4.3.1 Numeric datatypes in PowerBuilder General information All numeric datatypes are compatible with each other. What PowerBuilder does




PowerBuilder converts datatypes as needed to perform calculations and make assignments. When PowerBuilder evaluates a numeric expression, it converts the datatypes of operands to datatypes of higher precedence according to the operators and the datatypes of other values in the expression.



- 4.3.1.1 Datatype promotion when evaluating numeric expressions Order of precedence




The PowerBuilder numeric datatypes are listed here in order of highest to lowest precedence (the order is based on the range of values for each datatype):



Double Real Decimal LongLong UnsignedLong Long UnsignedInteger Integer Byte



Rules for type promotion Datatypes of operands



If operands in an expression have different datatypes, the value whose type has lower precedence is converted to the datatype with higher precedence.



Unsigned versus signed



Unsigned has precedence over signed, so if one operand is signed and the other is unsigned, both are promoted to the unsigned version of the higher type. For example, if one operator is a long and another UnsignedInteger, both are promoted to UnsignedLong.



Operators The effects of operators on an expression's datatype are:



- • +, -, *



The minimum precision for addition, subtraction, and multiplication calculations is long. Integer types are promoted to long types before doing the calculation and the expression's resulting datatype is, at a minimum, long. When operands have datatypes of higher precedence, other operands are promoted to match based on the Datatypes of operands rule above.



- • / and ^



The minimum precision for division and exponentiation is double. All types are promoted to double before doing the calculation, and the expression's resulting datatype is double.



- • Relational Relational operators do not cause promotion of numeric types.




Datatypes of literals



When a literal is an operand in an expression, its datatype is determined by the literal's value. The datatype of a literal affects the type promotion of the literal and other operands in an expression.



- Table 4.5: Datatypes of literal operands in an expression




|Literal|Datatype|
|---|---|
|Integer literals (no decimal point or exponent) within the range of Long|Long|
|Integer literals beyond the range of Long and within the range of UnsignedLong|UnsignedLong|
|Integer literals beyond the range of UnsignedLong and within the range of LongLong|LongLong|
|Numeric literals with a decimal point (but no exponent)|Decimal|
|Numeric literals with a decimal point and explicit exponent|Double|



Out of range Integer literals beyond the range of LongLong cause compiler errors.
