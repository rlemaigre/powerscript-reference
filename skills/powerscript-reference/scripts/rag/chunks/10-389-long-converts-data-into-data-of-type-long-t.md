# 10.389 Long Converts data into data of type long. There are two syntaxes.

- Table 10.471:



|To|Use|
|---|---|
|Combine two unsigned integers into a long value|Syntax 1|
|Convert a string whose value is a number into a long or to obtain a long value stored in a blob|Syntax 2<br><br>|



- 10.389.1 Syntax 1: For combining integers Description Combines two unsigned integers into a long value. Syntax Long ( lowword, highword )



Table 10.472:



|Argument|Description|
|---|---|
|lowword|An UnsignedInteger to be the low word in the long|
|highword|An UnsignedInteger to be the high word in the long|



Return value Long. Returns the long if it succeeds and -1 if an error occurs. If any argument's value is null, Long returns null. Usage



Use Long for passing values to external C functions or specifying a value for the LongParm property of PowerBuilder's Message object.



Examples These statements convert the UnsignedIntegers nLow and nHigh into a long value:



UnsignedInt nLow // Low integer 16 bits UnsignedInt nHigh // High integer 16 bits long LValue // Long value 32 bits



nLow = 12345 nHigh = 0 LValue = Long(nLow, nHigh) MessageBox("Long Value", Lvalue)



- 10.389.2 Syntax 2: For converting strings and blobs Description Converts a string whose value is a number into a long or obtains a long value stored in a blob. Syntax






Long ( stringorblob )
