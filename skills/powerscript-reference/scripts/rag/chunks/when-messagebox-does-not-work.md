# When MessageBox does not work

Controls capture the mouse in order to perform certain operations. For instance, CommandButtons capture the mouse during mouse clicks, Edit controls capture for text selection, and scroll bars capture during scrolling. If a MessageBox is invoked while the mouse is captured, unexpected results can occur.



Because MessageBox grabs focus, you should not use it when focus is changing, such



- as in a LoseFocus event. Instead, you might display a message in the window's title or a MultiLineEdit.




MessageBox also causes confusing behavior when called after PrintOpen. For details, see PrintOpen.



This statement displays a MessageBox with the title Greeting, the text Hello User, the default icon (Information!), and the default button (the OK button):



MessageBox("Greeting", "Hello User")



The following statements display a MessageBox titled Result and containing the result of a function, the Exclamation icon, and the OK and Cancel buttons (the Cancel button is the default):



integer Net long Distance = 3.457



Net = MessageBox("Result", Abs(Distance), &



Exclamation!, OKCancel!, 2) IF Net = 1 THEN



... // Process OK. ELSE



... // Process CANCEL. END IF



- 10.413 Mid Description Obtains a specified number of characters from a specified position in a string. Syntax Mid ( string, start {, length } )


- Table 10.503:




|Argument|Description|
|---|---|
|string|The string from which you want characters returned.|
|start|A long specifying the position of the first character you want returned. (The position of the first character of the string is 1).|
|length (optional)|A long whose value is the number of characters you want returned. If you do not enter length or if length is greater than the number of characters to the right of start, Mid returns the remaining characters in the string.|



Return value String. Returns characters specified in length of string starting at character start. If start is greater than the number of characters in string, the Mid function returns the empty string (""). If length is greater than the number of characters remaining after the start character, Mid returns the remaining characters. The return string is not filled with spaces to make it the specified length. If any argument's value is null, Mid returns null. Usage



To search a string for the position of the substring that you want to extract, use the Pos function. Use the return value for the start argument of Mid. To extract a specified number of characters from the beginning or end of a string, use the Left or the Right function.



This statement returns RUTH:



Mid("BABE RUTH", 5, 5)



This statement returns "":



Mid("BABE RUTH", 40, 5)



This statement returns BE RUTH:



Mid("BABE RUTH", 3)



These statements store the characters in the SingleLineEdit sle_address from the 40th character to the end in ls_address_extra:



string ls_address_extra ls_address_extra = Mid(sle_address.Text, 40)



The following user-defined function, called str_to_int_array, converts a string into an array of integers. Each integer in the array will contain two characters (one characters as the high byte (ASCII value * 256) and the second character as the low byte). The function arguments are str, a string passed by value, and iarr, an integer array passed by reference. The length of the array is initialized before the function is called. If the integer array is longer than the string, the script stores spaces. If the string is longer, the script ignores the extra characters.



To call the function, use code like the following:



int rtn iarr[20]=0 // Initialize the array, if necessary rtn = str_to_int_array("This is a test.", iarr)



The str_to_int_array function is:



long stringlen, arraylen, i string char1, char2



// Get the string and array lengths arraylen = UpperBound(iarr) stringlen = Len(str)



// Loop through the array FOR i = 1 to arraylen



IF (i*2 <= stringlen) THEN // Get two chars from str char1 = Mid(str, i*2, 1) char2 = Mid(str, i*2 - 1, 1)



ELSEIF (i*2 - 1 <= stringlen) THEN // Get the last char char1 = " " char2 = Mid(str, i*2 - 1, 1)



ELSE // Use spaces if beyond the end of str



- char1 = " "
- char2 = " "




END IF iarr[i] = Asc(char1) * 256 + Asc(char2)



NEXT RETURN 1



For sample code that converts the integer array back to a string, see Asc. See also



AscA Left Pos Right UpperBound Mid method for DataWindows in Section 2.4.76, “Mid” in DataWindow Reference.
