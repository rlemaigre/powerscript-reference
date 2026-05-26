# Usage

You can use Asc to find out the case of a character by testing whether its code point value is within the appropriate range.



Examples This statement returns 65, the code point value for uppercase A:



Asc("A")



This example checks if the first character of string ls_name is uppercase:



String ls_name IF Asc(ls_name) > 64 and Asc(ls_name) < 91 THEN ...



See also AscA Char Mid Asc method for DataWindows in Section 2.4.3, “Asc” in DataWindow Reference.



- 10.30 AscA Description Converts the first character of a string to its ASCII integer value. Syntax AscA ( string )


- Table 10.37:




|Argument|Description|
|---|---|
|string|The string for which you want the ASCII value of the first character|



Return value Integer. Returns the ASCII value of the first character in string. If string is null, AscA returns null. Usage



You can use AscA to find out the case of a character by testing whether its ASCII value is within the appropriate range. A separate function, Asc, is provided to return the Unicode code point of a character.



Examples This statement returns 65, the ASCII value for uppercase A:



AscA("A")



This example checks if the first character of string ls_name is uppercase:



String ls_name IF AscA(ls_name) > 64 and AscA(ls_name) < 91 THEN ...



This example is a function that converts an array of integers into a string. Each integer specifies two characters. Its low byte is the first character in the pair and the high byte (ASCII * 256) is the second character. The function has an argument (iarr) which is the integer array:



string str_from_int, hold_str integer arraylen



arraylen = UpperBound(iarr) FOR i = 1 to arraylen



// Convert first character of pair to a char hold_str = CharA(iarr[i])



// Add characters to string after converting // the integer's high byte to char str_from_int += hold_str + &



CharA((iarr[i] - AscA(hold_str)) / 256) NEXT



For sample code that builds the integer array from a string, see Mid. See also Asc CharA Mid AscA method for DataWindows in Section 2.4.4, “AscA” in DataWindow Reference.



- 10.31 ASin Description Calculates the arcsine of an angle. Syntax ASin ( n )


- Table 10.38:




|Argument|Description|
|---|---|
|n|The ratio of the lengths of two sides of a triangle for which you want a corresponding angle (in radians). The ratio must be a value between -1 and 1.|



Return value Double. Returns the arcsine of n. Examples This statement returns .999998 (rounded to six places):



ASin(.84147)



This statement returns .520311 (rounded to six places):



ASin(LogTen (Pi (1)))



This statement returns 0:



ASin(0)



This code in the Clicked event of a button catches a runtime error that occurs when an arcsine is taken for a user-entered value -- passed in a variable -- that is outside of the permitted range:



Double ld_num ld_num = Double (sle_1.text)



TRY sle_2.text = string (asin (ld_num)) CATCH (runtimeerror er)



MessageBox("Runtime Error", er.getmessage()) END TRY



See also Sin ACos ATan Pi ASin method for DataWindows in Section 2.4.5, “ASin” in DataWindow Reference.



- 10.32 AsymmetricDecrypt Description Decrypts a blob value with asymmetric algorithm. Applies to CrypterObject objects Syntax crypter.AsymmetricDecrypt ( algorithm, variable, privKey)


- Table 10.39:




|Argument|Description|
|---|---|
|crypter|The name of the CrypterObject object|
|algorithm|A value of the AsymmetricAlgorithm enumerated type that specifies the type of asymmetric algorithm.<br><br>Values are:<br><br>• RSA! – The Rivest-Shamir-Adleman cryptopsystem<br>• Rabin! – The Rabin Algorithm<br>|



|Argument|Description|
|---|---|
| |Note: DSA! is designed to be used in signature, not in encryption and decryption.|
|variable|A blob whose value is the data you want to decrypt with Public-Key cipher.<br><br>When using the system blob function to convert a string to a blob, it is recommended to specify its encoding argument to be EncodingANSI! (for English characters only) or EncodingUTF8!, otherwise, the default EncodingUTF16LE! will be used.|
|privKey|A blob specifying the private key. The private key format must be PKCS#8.|
