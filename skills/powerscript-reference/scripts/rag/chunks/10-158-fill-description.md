# 10.158 Fill Description

Builds a string of the specified length by repeating the specified characters until the result string is long enough.



Syntax



Fill ( chars, n )



- Table 10.191:




|Argument|Description|
|---|---|
|chars|A string whose value will be repeated to fill the return string|
|n|A long whose value is the length of the string you want returned|



Return value String. Returns a string n characters long filled with the characters in the argument chars. If the argument chars has more than n characters, the first n characters of chars are used to fill the return string. If the argument chars has fewer than n characters, the characters in chars are repeated until the return string has n characters. If any argument's value is null, Fill returns null. Usage



Use Fill in printing routines to create a line or other special effect. For example, you can fill the amount line of a check with asterisks, or simulate a total line in a screen display by repeating hyphens below a column of figures.



Examples This statement returns a string whose value is 35 stars:



Fill("*", 35)



This statement returns the string -+-+-+-:



Fill("-+", 7)



This statement returns 10 tildes (~):



Fill("~~", 10)



See also Space Fill method for DataWindows in Section 2.4.37, “Fill” in DataWindow Reference.
