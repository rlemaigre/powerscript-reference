# Syntax

FillA (chars, n)



- Table 10.192:




|Argument|Description|
|---|---|
|chars|The string whose value is repeated to fill the return string|
|n|A long specifying the number of bytes in the return string|



Return value String. Returns a string n bytes long filled with the characters in the argument chars. If the argument chars has more than n bytes, the first n bytes of chars are used to fill the return string. If the argument chars has fewer than n bytes, the characters in chars are repeated until the return string has n bytes. If any argument's value is null, FillA returns null. Usage FillA replaces the functionality that Fill had in DBCS environments in PowerBuilder 9. In SBCS environments, Fill, FillW, and FillA return the same results.
