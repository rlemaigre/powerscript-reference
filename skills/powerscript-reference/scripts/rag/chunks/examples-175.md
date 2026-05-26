# Examples

The following code checks whether the user pressed the F1 key or the Ctrl key and executes some statements appropriate to the key pressed:



IF KeyDown(KeyF1!) THEN



. . . // Statements for the F1 key ELSEIF KeyDown(KeyControl!) THEN



. . . // Statements for the CTRL key END IF



This statement tests whether the user pressed Tab, Enter, or any of the scrolling keys:



IF (KeyDown(KeyTab!) OR KeyDown(KeyEnter!) OR & KeyDown(KeyDownArrow!) OR KeyDown(KeyUpArrow!) & OR KeyDown(KeyPageDown!) OR KeyDown(KeyPageUp!))& THEN ...



This statement tests whether the user pressed the A key (ASCII value 65):



IF KeyDown(65) THEN ...



This statement tests whether the user pressed the Shift key and the A key:



IF KeyDown(65) AND KeyDown(KeyShift!) THEN ...



This statement in a Clicked event checks whether the Shift is also pressed:



IF KeyDown(KeyShift!) THEN ...



- 10.362 LastPos Description Finds the last position of a target string in a source string. Syntax LastPos ( string1, string2 {, searchlength } )


- Table 10.445:




|Argument|Description|
|---|---|
|string1|The string in which you want to find string2.|
|string2|The string you want to find in string1.|
|searchlength (optio|Anal)long that limits the search to the leftmost searchlength characters of the source string string1. The default is the entire string.|



Return value Long. Returns a long whose value is the starting position of the last occurrence of string2 in string1 within the characters specified in searchlength. If string2 is not found in string1 or if searchlength is 0, LastPos returns 0. If any argument's value is null, LastPos returns null. Usage



The LastPos function is case sensitive. The entire target string must be found in the source string.



Examples This statement returns 6, because the position of the last occurrence of RU is position 6:



LastPos("BABE RUTH", "RU")



This statement returns 3:



LastPos("BABE RUTH", "B")



This statement returns 0, because the case does not match:



LastPos("BABE RUTH", "be")



This statement searches the leftmost 4 characters and returns 0, because the only occurrence of RU is after position 4. The search length must be at least 7 (to include the complete string RU) before the statement returns 6 for the starting position of the last occurrence of RU:



LastPos("BABE RUTH", "RU", 4)



These statements change the text in the SingleLineEdit sle_group. The last instance of the text NY is changed to North East:



long place_nbr place_nbr = LastPos(sle_group.Text, "NY") sle_group.SelectText(place_nbr, 2 ) sle_group.ReplaceText("North East")



These statements separate the return value of GetBandAtPointer into the band name and row number. The LastPos function finds the position of the (last) tab in the string and the Left and Mid functions extract the information to the left and right of the tab:



string s, ls_left, ls_right integer li_tab



s = dw_groups.GetBandAtPointer() li_tab = LastPos(s, "~t")



ls_left = Left(s, li_tab - 1) ls_right = Mid(s, li_tab + 1)



These statements tokenize a source string backwards:



// Tokenize the source string backwards // Results in "pbsyc190.dll powerbuilder // shared appeon programs c:



string sSource = &



'c:\program files\appeon\shared\powerbuilder\pbsyc190.dll' string sFind = '\' string sToken long llStart, llEnd



llEnd = Len(sSource) + 1 DO llStart = LastPos(sSource, sFind, llEnd)



sToken = Mid(sSource, (llStart + 1), &



(llEnd - llStart)) mle_comment.text += sToken + ' ' llEnd = llStart - 1



LOOP WHILE llStart > 1
