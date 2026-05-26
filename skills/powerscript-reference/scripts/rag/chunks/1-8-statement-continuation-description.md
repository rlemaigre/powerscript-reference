# 1.8 Statement continuation Description

Although you typically put one statement on each line, you occasionally need to continue a statement to more than one line. The statement continuation character is the ampersand (&). (For the use of the ampersand character in accelerator keys, see the PowerBuilder Users Guide.) Syntax



Start of statement &



more statement & end of statement



The ampersand must be the last nonwhite character on the line or the compiler considers it part of the statement.



For information about white space, see White space.



You do not use a continuation character for:



- • Continuing comments



Do not use a continuation character to continue a comment. The continuation character is considered part of the comment and is ignored by the compiler.



- • Continuing SQL statements




You do not need a continuation character to continue a SQL statement. In PowerBuilder, SQL statements always end with a semicolon (;), and the compiler considers everything from the start of a SQL statement to a semicolon to be part of the SQL statement. A continuation character in a SQL statement is considered part of the statement and usually causes an error.



Examples Continuing a quoted string One way Place an ampersand in the middle of the string and continue the string on the next line:



IF Employee_District = "Eastern United States and& Eastern Canada" THEN ...



Note that any white space (such as tabs and spaces) before the ampersand and at the beginning of the continued line is part of the string.



A problem The following statement uses only the ampersand to continue the quoted string in the IF...THEN statement to another line; for readability, a tab has been added to indent the second line. The compiler includes the tab in the string, which might result in an error:



IF Employee_District = "Eastern United States and& Eastern Canada" THEN ...



A better way A better way to continue a quoted string is to enter a quotation mark before the continuation character ('& or "&, depending on whether the string is delimited by single or double quotation marks) at the end of the first line of the string and a plus sign and a quotation mark (+' or +") at the start of the next line. This way, you do not inadvertently include unwanted characters (such as tabs or spaces) in the string literal:



IF Employee_District = "Eastern United States and "&



+" Eastern Canada" THEN ...



The examples in the PowerBuilder documentation use this method to continue quoted strings. Continuing a variable name



Do not split a line by inserting the continuation character within a variable name. This causes an error and the statement fails, because the continuation character splits the variable name "Quantity":



Total-Cost = Price * Quan&



tity + (Tax + Shipping)
