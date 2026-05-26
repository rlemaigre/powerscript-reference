# Be careful

If you disallow dashes and have previously used dashes in variable names, you will get errors the next time you compile.



Examples Valid identifiers



ABC_Code Child-Id FirstButton response35 pay-before%deductions$ ORDER_DATE Actual-$-amount Part#



Invalid identifiers



2nd-quantity // Does not start with a letter ABC Code // Contains a space Child'sId // Contains invalid special character



- 1.3 Labels Description You can include labels in scripts for use with GOTO statements. Syntax Identifier: Usage



A label can be any valid identifier. You can enter it on a line by itself above the statement or at the start of the line before the statement.



For information about the GOTO statement, see GOTO. For information about valid identifiers, see Identifier names.



Examples On a line by itself above the statement



FindCity:IF city=cityname[1] THEN ...



At the start of the line before the statement



FindCity: IF city=cityname[1] THEN ...



- 1.4 Special ASCII characters Description




You can include special ASCII characters in strings. For example, you might want to include a tab in a string to ensure proper spacing or a bullet to indicate a list item. The tilde character



(~) introduces special characters. The tab is one of the common ASCII characters that can be entered by typing a tilde followed by a single keystroke. The bullet must be entered by typing a tilde followed by the decimal, hexadecimal, or octal ASCII value that represents it.



Syntax Follow the guidelines in the following table.



- Table 1.2: Using special ASCII characters in strings



|In this category|To specify this|Enter this|More information|
|---|---|---|---|
|Common ASCII characters|Newline|~n| |
| |Tab|~t| |
| |Vertical tab|~v| |
| |Carriage return|~r| |
| |Form feed|~f| |
| |Backspace|~b| |
| |Double quote|~"| |
| |Single quote|~'| |
| |Tilde|~~| |
|Any ASCII character|Decimal|~###|### = a 3-digit number from 000 to 255|
| |Hexadecimal|~h##|## = a 2-digit hexadecimal number from 01 to FF|
| |Octal|~o###|### = a 3-digit octal number from 000 to 377|



Examples Entering ASCII characters Here is how to use special characters in strings:



- Table 1.3:




|String|Description|
|---|---|
|"dog~n"|A string containing the word dog followed by a newline character|
|"dog~tcat~ttiger"|A string containing the word dog, a tab character, the word cat, another tab character, and the word tiger|
