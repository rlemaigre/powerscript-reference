# See also Pos

- 10.363 Left Description Obtains a specified number of characters from the beginning of a string. Syntax Left ( string, n )


- Table 10.446:




|Argument|Description|
|---|---|
|string|The string you want to search|



|Argument|Description|
|---|---|
|n|A long specifying the number of characters you want to return|



Return value String. Returns the leftmost n characters in string if it succeeds and the empty string ("") if an error occurs. If any argument's value is null, Left returns null. If n is greater than or equal to the length of the string, Left returns the entire string. It does not add spaces to make the return value's length equal to n. Examples This statement returns BABE:



Left("BABE RUTH", 4)



This statement returns BABE RUTH:



Left("BABE RUTH", 40)



These statements store the first 40 characters of the text in the SingleLineEdit sle_address in emp_address:



string emp_address emp_address = Left(sle_address.Text, 40)



For sample code that uses Left to parse two tab-separated values, see the Pos function. See also Mid Pos Right Left method for DataWindows in Section 2.4.63, “Left” in DataWindow Reference.
