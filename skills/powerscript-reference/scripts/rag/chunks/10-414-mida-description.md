# 10.414 MidA Description

Temporarily converts a string to DBCS, then returns the specified number of bytes from the string, starting from a specified position.



Syntax



MidA (string, start, {length})



- Table 10.504:




|Argument|Description|
|---|---|
|string|The string you want to search.|
|start|A long specifying the position of the first byte you want returned. (The position of the first byte of the string is 1.)|
|length (optional)|A long whose value is the number of bytes you want returned. If you do not enter length or if length is greater than the number of bytes to the right of start, MidA returns the remaining bytes in the string.|



Return value String. Returns characters specified by the number of bytes searched in a source string, beginning



- at the byte specified in the start argument. If start is greater than the number of bytes in string, the MidA function returns an empty string (""). If length is greater than the number of bytes remaining after the start character, MidA returns the remaining bytes. The return string is not filled with spaces to make it the specified length. If any argument's value is null, MidA returns null. Usage MidA replaces the functionality that Mid had in DBCS environments in PowerBuilder 9.
