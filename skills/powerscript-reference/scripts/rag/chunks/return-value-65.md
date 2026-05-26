# Return value

The datatype of x or y, whichever datatype is more precise. If any argument's value is null, Max returns null.



Usage If either of the values being compared is null, Max returns null. Examples This statement returns 7:



Max(4,7)



This statement returns -4:



Max(- 4, - 7)



This statement returns 8.2, a decimal value:



Max(8.2, 4)



See also Min Max method for DataWindows in Section 2.4.74, “Max” in DataWindow Reference.



- 10.408 MD5 Description Calculates the MD5 value of a blob. Applies to CrypterObject object Syntax crypter.MD5 (variable)


- Table 10.498:




|Argument|Description|
|---|---|
|crypter|The name of the CrypterObject object|
|variable|A blob whose value is the data you want to process with MD5.<br><br>When using the system blob function to convert a string to a blob, it is recommended to specify its encoding argument to be EncodingANSI! (for English characters only) or EncodingUTF8!, otherwise, the default EncodingUTF16LE! will be used.|
