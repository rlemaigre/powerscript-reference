# Return value

Integer. Returns the minutes portion of time (00 to 59). If time is null, Minute returns null. Examples



- This statement returns 1: Minute(19:01:31) See also Hour Second Minute method for DataWindows in Section 2.4.79, “Minute” in DataWindow Reference.



10.418 Mod



Description Obtains the remainder (modulus) of a division operation. Syntax



Mod ( x, y )



Table 10.507:



|Argument|Description|
|---|---|
|x|The number you want to divide by y|
|y|The number you want to divide into x|



Return value



The datatype of x or y, whichever datatype is more precise. If any argument's value is null, Mod returns null.



Examples



- This statement returns 2: Mod(20, 6) This statement returns 1.5: Mod(25.5, 4) This statement returns 2.5: Mod(25, 4.5) See also Mod method for DataWindows in Section 2.4.80, “Mod” in DataWindow Reference.
