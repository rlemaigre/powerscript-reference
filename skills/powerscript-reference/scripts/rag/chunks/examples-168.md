# Examples

This example shows code you might use in an overridden InternetData function to display data from a GetURL function:



MessageBox("HTML from GetURL", & String(data, EncodingANSI!)) RETURN 1



The blob contains the actual data and is not Unicode encoded, therefore you must use the EncodingANSI! argument of the String function.



See also GetURL PostURL



- 10.336 IntHigh Description Returns the high word of a long value. Syntax IntHigh ( long )


- Table 10.418:




|Argument|Description|
|---|---|
|long|A long value|



Return value Integer. Returns the high word of long if it succeeds and -1 if an error occurs. If long is null, IntHigh returns null. Usage One use for IntHigh is for decoding values returned by external C functions and Windows messages. Examples These statements decode a long value LValue into its low and high integers:



integer nLow, nHigh long LValue = 274489 nLow = IntLow (LValue) //The Low Integer is 12345. nHigh = IntHigh(LValue) //The High Integer is 4.
