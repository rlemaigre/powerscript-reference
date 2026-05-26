# Operators used in DataWindow objects

The documentation for DataWindows describes how operators are used in DataWindow expressions.



- 4.1.1 Arithmetic operators in PowerBuilder Description The following table lists the arithmetic operators used in PowerBuilder.


- Table 4.1: PowerBuilder arithmetic operators




|Operator|Meaning|Example|
|---|---|---|
|+|Addition|Total=SubTotal+Tax|
|-|Subtraction|Price=Price-Discount Unless you have prohibited the use of dashes in identifier names, you must surround the minus sign with spaces.|
|*|Multiplication|Total=Quantity*Price|
|/|Division|Factor=Discount/Price|
|^|Exponentiation|Rank=Rating^2.5|



Usage Operator shortcuts for assignments For information about shortcuts that combine arithmetic operators with assignments (such as



++ and +=), see Assignment.



Subtraction



If the option Allow Dashes in Identifiers is checked on the Script tab in the Options dialog box, you must always surround the subtraction operator and the -- operator with spaces. Otherwise, PowerBuilder interprets the expression as an identifier.



For information about dashes in identifiers, see Identifier names. Multiplication and division



Multiplication and division are carried out to full precision (16-28 digits). Decimal numbers are rounded (not truncated) on assignment.



Calculation with NULL



When you form an arithmetic expression that contains a NULL value, the expression's value is null. Thinking of null as undefined makes this easier to understand.



For more information about null values, see NULL values. Errors and overflows The following problems can occur when using arithmetic operators:



- • Division by zero, exponentiation of negative values, and so on cause errors at runtime.
- • Overflow of real, double, and decimal values causes errors at runtime.
- • Overflow of signed or unsigned integers and longs causes results to wrap. However, because integers are promoted to longs in calculations, wrapping does not occur until the result is explicitly assigned to an integer variable.




For more information about type promotion, see Datatype of PowerBuilder expressions. Examples Subtraction This statement always means subtract B from A:



A - B



If DashesInIdentifiers is set to 1, the following statement means a variable named A-B, but if DashesInIdentifiers is set to 0, it means subtract B from A:



A-B



Precision for division These examples show the values that result from various operations on decimal values:



decimal {4} a,b,d,e,f decimal {3} c



- a = 20.0/3 // a contains 6.6667
- b = 3 * a // b contains 20.0001
- c = 3 * a // c contains 20.000
- d = 3 * (20.0/3) // d contains 20.0000
- e = Truncate(20.0/3, 4) // e contains 6.6666
- f = Truncate(20.0/3, 5) // f contains 6.6667




Calculations with null



When the value of variable c is null, the following assignment statements all set the variable a to null:



integer a, b=100, c SetNULL(c) a = b+c // all statements set a to NULL a = b - c a = b*c a = b/c



Overflow This example illustrates the value of the variable i after overflow occurs:



integer i i = 32767 i = i + 1 // i is now -32768



- 4.1.2 Relational operators in PowerBuilder Description




PowerBuilder uses relational operators in boolean expressions to evaluate two or more operands. Logical operators can join relational expressions to form more complex boolean expressions.



The result of evaluating a boolean expression is always true or false. The following table lists relational and logical operators.



- Table 4.2: PowerBuilder relational and logical operators




|Operator|Meaning|Example|
|---|---|---|
|=|Equals|if Price=100 then Rate=.05|
|>|Greater than|if Price>100 then Rate=.05|
|<|Less than|if Price<100 then Rate=.05|
|<>|Not equal|if Price<>100 then Rate=.05|
|>=|Greater than or equal|if Price>=100 then Rate=.05|
|<=|Less than or equal|if Price<=100 then Rate=.05|
|NOT|Logical negation|if NOT Price=100 then Rate=.05|
|AND|Logical and|if Tax>3 AND Ship <5 then Rate=.05|
|OR|Logical or|if Tax>3 OR Ship<5 then Rate=.05|



Usage Comparing strings



When PowerBuilder compares strings, the comparison is case sensitive. Trailing blanks are significant.



For information on comparing strings regardless of case, see the functions Upper and Lower. To remove trailing blanks, use the RightTrim function. To remove leading blanks, use the LeftTrim function. To remove leading and trailing blanks, use the Trim function. For information about these functions, see RightTrim, LeftTrim, and Trim. Decimal operands



Relational operators that operate on numeric values (including =, >, <, <>, >=, and <=) can take decimal operands. The precision of the decimal operand is maintained in comparisons.



Null value evaluations



When you form a boolean expression that contains a null value, the AND and OR operators behave differently. Thinking of null as undefined (neither true nor false) makes the results easier to calculate.



For more information about null values, see NULL values. Examples Case-sensitive comparisons



If you compare two strings with the same text but different case, the comparison fails. But if you use the Upper or Lower function, you can ensure that the case of both strings are the same so that only the content affects the comparison:



City1 = "Austin" City2 = "AUSTIN" IF City1 = City2 ... // Returns FALSE



City1 = "Austin" City2 = "AUSTIN" IF Upper(City1) = Upper(City2)... // Returns TRUE



Trailing blanks in comparisons In this example, trailing blanks in one string cause the comparison to fail:



City1 = "Austin" City2 = "Austin " IF City1 = City2 ... // Returns FALSE



Logical expressions with null values



In this example, the expressions involving the variable f, which has been set to null, have null values:



boolean d, e = TRUE, f SetNull(f) d = e and f // d is NULL d = e or f // d is TRUE



- 4.1.3 Concatenation operator in PowerBuilder Description




The PowerBuilder concatenation operator joins the contents of two variables of the same type to form a longer value. You can concatenate strings and blobs.



The following table shows the concatenation operator.
