# Overflow on assignment

Even when PowerBuilder performs a calculation at high enough precision to handle the results, assignment to a lower precision variable can cause overflow, producing the wrong result.



- Example 1 Consider this code: integer a = 32000, b = 1000

- long d



d = a + b



The final value of d is 33000. The calculation proceeds like this:



- Convert integer a to long
- Convert integer b to long Add the longs a and b Assign the result to the long d Because the variable d is a long, the value 33000 does not cause overflow.



Example 2 In contrast, consider this code with an assignment to an integer variable:



integer a = 32000, b = 1000, c long e



- c = a + b






- e = c The resulting value of c and e is -32536. The calculation proceeds like this: Add the integers a and b Assign the result to c Convert integer c to long and assign the result to e




The assignment to the integer variable c causes the long result of the addition to be truncated, causing overflow and wrapping. Assigning c to e cannot restore the lost information.



- 4.3.2 String and char datatypes in PowerBuilder General information There is no explicit char literal type. String literals convert to type char using the following rules:


- • When a string literal is assigned to a char variable, the first character of the string literal is assigned to the variable. For example:




char c = "xyz"



results in the character x being assigned to the char variable c.



- • Special characters (such as newline, formfeed, octal, hex, and so on) can be assigned to char variables using string conversion, such as: char c = "~n"




String variables assigned to char variables also convert using these rules. A char variable assigned to a string variable results in a one-character string.
