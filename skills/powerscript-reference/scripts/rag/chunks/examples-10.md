# Examples

The built-in Asc function takes a string as an argument and returns the Unicode code point value of the string's first character:



string S1 = "Carton" long Test Test=32+Asc(S1) // Test now contains the value 99



// (the code point value of "C" is 67).



The SelectRow function expects a row number as the first argument. The return value of the GetRow function supplies the row number:



dw_1.SelectRow(dw_1.GetRow(), true)



To ignore a return value, call the function as a single statement:



Beep(4) // This returns a value, but it is // rarely needed.
