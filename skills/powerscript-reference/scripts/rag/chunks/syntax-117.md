# Syntax

Right ( string, n )



- Table 10.665:



|Argument|Description|
|---|---|
|string|The string from which you want characters returned|
|n|A long whose value is the number of characters you want returned from the right end of string|



Return value



String. Returns the rightmost n characters in string if it succeeds and the empty string ("") if an error occurs. If any argument's value is null, Right returns null. If n is greater than or equal to the length of the string, Right returns the entire string. It does not add spaces to make the return value's length equal to n.



Examples This statement returns RUTH:



Right("BABE RUTH", 4)



This statement returns BABE RUTH:



Right("BABE RUTH", 75)



See also



Left Mid Pos



Right method for DataWindows in Section 2.4.106, “Right” in DataWindow Reference.



10.540 RightA



Description



Temporarily converts a string from Unicode to DBCS based on the current locale, then returns the specified number of bytes from the end of the string.



Syntax



RightA (string, n)



- Table 10.666:




|Argument|Description|
|---|---|
|string|The string you want to search|
|n|A long whose value is the number of bytes you want returned from the right end of string|
