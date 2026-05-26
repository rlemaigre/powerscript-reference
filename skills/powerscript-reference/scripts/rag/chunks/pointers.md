# Pointers

- Table 3.13: PowerBuilder datatypes for pointers



|Datatype in source code|Size, sign, precision|PowerBuilder datatype|
|---|---|---|
|* (any pointer)|32-bit pointer|Long|
|char *|Array of bytes of variable length|Blob|



Windows 32-bit FAR pointers, such as LPBYTE, LPDWORD, LPINT, LPLONG, LPVOID, and LPWORD, are declared in PowerBuilder as long datatypes. HANDLE is defined as 32 bits unsigned and is declared in PowerBuilder as an UnsignedLong.



Near-pointer datatypes (such as PSTR and NPSTR) are not supported in PowerBuilder. Characters and strings



- Table 3.14: PowerBuilder datatypes for characters and strings



|Datatype in source code|Size, sign, precision|PowerBuilder datatype|
|---|---|---|
|char|8 bits, signed|Char|
|string|32-bit pointer to a nullterminated array of bytes of variable length|String|



The Windows 32-bit FAR pointer LPSTR is declared in PowerBuilder as string.



Reference arguments



When you pass a string to an external function by reference, all memory management is done in PowerBuilder. The string variable must be long enough to hold the returned value. To ensure that this is true, first declare the string variable, and then use the Space function to fill the variable with blanks equal to the maximum number of characters that you expect the function to return.



Fixed-point values



- Table 3.15: PowerBuilder datatypes for fixed-point values




|Datatype in source code|Size, sign, precision|PowerBuilder datatype|
|---|---|---|
|byte|8 bits, unsigned|Byte|
|short|16 bits, signed|Integer|
|unsigned short|16 bits, unsigned|UnsignedInteger|
|int|32 bits, signed|Long|
|unsigned int|32 bits, unsigned|UnsignedLong|
|long|32 bits, signed|Long|
|unsigned long|32 bits, unsigned|UnsignedLong|
|longlong|64 bits, signed|LongLong|



The Windows definition WORD is declared in PowerBuilder as UnsignedInteger and the Windows definition DWORD is declared as an UnsignedLong. You cannot call external functions with return values or arguments of type short.
