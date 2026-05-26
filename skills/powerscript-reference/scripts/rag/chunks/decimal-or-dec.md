# Decimal or Dec

Signed decimal numbers, positive or negative, with up to 28 digits. You can place the decimal point anywhere within the 28 digits -- for example, 123.456,



- 0.000000000000000000000001 or 12345678901234.5678901234. Using literals




To assign a literal value, use any number with a decimal point and no exponent. The plus sign is optional (95 and +95 are the same). For numbers between zero and one, the zero to the left of the decimal point is optional (for example, 0.1 and .1 are the same). For whole numbers, zeros to the right of the decimal point are optional (32.00, 32.0, and 32. are all the same). For example:



12.34 0.005 14.0 -6500 +3.5555



Double A signed floating-point number with 15 digits of precision and a range from



- 2.2250738585073E-308 to 1.79769313486231E+308, and -2.2250738585073E-308 to



-1.79769313486231E+308. Integer or Int 16-bit signed integers, from -32768 to +32767. Using literals To assign a literal value, use any whole number (positive, negative, or zero). The leading plus sign is optional (18 and +18 are the same). For example:



1 123 1200 +55 -32



Long 32-bit signed integers, from -2147483648 to +2147483647. Using literals Use literals as for integers, but longer numbers are permitted. LongLong 64-bit signed integers, from -9223372036854775808 to 9223372036854775807. Using literals Use literals as for integers, but longer numbers are permitted. Longptr 4 bytes in the 32-bit platform and 8 bytes in the 64-bit platform. Using literals In the 32-bit platform, longptr is the same as long; you can continue using long wherever longptr is required in 32-bit applications. In 64-bit applications, however, using long to hold longptr variables will lead to data truncation from 8 bytes to 4 bytes, or memory corruption if you pass a long ref variable when a longptr ref is required. If you want to move to 64-bit, use longptr wherever required. It does no harm to 32-bit. Real A signed floating-point number with six digits of precision and a range from 3.402822E-38 to



- 3.402822E+38, and -3.402822E-38 to -3.402822E+38. Using literals




To assign a literal value, use a decimal value, followed by E, followed by an integer; no spaces are allowed. The decimal number before the E follows all the conventions specified above for decimal literals. The leading plus sign in the exponent (the integer following the E) is optional (3E5 and 3E+5 are the same). For example:



2E4 2.5E38 +6.02E3 -4.1E-2



-7.45E16 7.7E+8 3.2E-38



String Any string of Unicode characters with variable length (0 to 1073741823).



Most of the character-based data in your application, such as names, addresses, and so on, will be defined as strings. PowerScript provides many functions that you can use to manipulate strings, such as a function to convert characters in a string to uppercase and functions to remove leading and trailing blanks.



For more information about passing character-based data to external functions, see Section 23.1, “Using external functions” in Application Techniques. For information about datatype conversion when assigning strings to chars and vice versa, see String and char datatypes in PowerBuilder.



Using literals To assign a literal value, enclose as many as 1024 characters in either single or double quotes, including a string of zero length or an empty string. For example:



string s1 s1 = 'This is a string' s1 = "This is a string"



You can embed a quotation mark in a string literal if you enclose the literal with the other quotation mark. For example, the following statements result in the string Here's a string:



string s1 s1 = "Here's a string."



You can also use a tilde (~) to embed a quotation mark in a string literal. For example:



string s1 = 'He said, "It~'s good!"'



Complex nesting When you nest a string within a string that is nested in another string, you can use tildes to tell the parser how to interpret the quotation marks. Each pass through the parser strips away the outermost quotes and interprets the character after each tilde as a literal. Two tildes become one tilde, and tilde-quote becomes the quote alone.



- Example 1 This string has two levels of nesting: "He said ~"she said ~~~"Hi ~~~" ~" " The first pass results in: He said "she said ~"Hi ~" " The second pass results in: she said "Hi" The third pass results in: Hi

- Example 2




A more probable example is a string for the Modify function that sets a DataWindow property. The argument string often requires complex quotation marks (because you must specify one or more levels of nested strings). To understand the quotation marks, consider how PowerBuilder will parse the string. The following string is a possible argument for the Modify function; it mixes single and double quotes to reduce the number of tildes:



"bitmap_1.Invert='0~tIf(empstatus=~~'A~~',0,1)'"



The double quotes tell PowerBuilder to interpret the argument as a string. It contains the expression being assigned to the Invert property, which is also a string, so it must be quoted. The expression itself includes a nested string, the quoted A. First, PowerBuilder evaluates the argument for Modify and assigns the single-quoted string to the Invert property. In this pass through the string, it converts two tildes to one. The string assigned to Invert becomes:



'0[tab]If(empstatus=~'A~',0,1)'



Finally, PowerBuilder evaluates the property's expression, converting tilde-quote to quote, and sets the bitmap's colors accordingly.



- Example 3




There are many ways to specify quotation marks for a particular set of nested strings. The following expressions for the Modify function all have the same end result:



"emp.Color = ~"0~tIf(stat=~~~"a~~~",255,16711680)~"" "emp.Color = ~"0~tIf(stat=~~'a~~',255,16711680)~"" "emp.Color = '0~tIf(stat=~~'a~~',255,16711680)'" "emp.Color = ~"0~tIf(stat='a',255,16711680)~""



Rules for quotation marks and tildes When nesting quoted strings, the following rules of thumb might help:



- • A tilde tells the parser that the next character should be taken as a literal, not a string terminator
- • Pairs of single quotes ( ' ) can be used in place of pairs of tilde double quotes (~")
- • Pairs of tilde tilde single quotes (~~') can be used in place of pairs of triple tilde double quotes (~~~")
