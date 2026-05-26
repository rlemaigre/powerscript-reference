# 1.10 White space Description

Blanks, tabs, form feeds, and comments are forms of white space. The compiler treats white space as a delimiter and does not consider the number of white space characters.



Usage White space in string literals The number of white space characters is preserved when they are part of a string literal (enclosed in single or double quotation marks). Dashes in identifiers Unless you have prohibited the use of dashes in identifiers (see Identifier names), you must surround a dash used as a minus sign with spaces. Otherwise, PowerBuilder considers the dash as part of a variable name:



Order - Balance // Subtracts Balance from Order Order-Balance // A variable named Order-Balance



Examples



- Example 1 Here the spaces and the comment are white space, so the compiler ignores them: A + B /*Adjustment factor */+C

- Example 2 Here the spaces are within a string literal, so the compiler does not ignore them: "The value of A + B is:"
