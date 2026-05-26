# Return value

Long. Returns a long whose value is the starting position of the first occurrence of string2 in string1 after the position specified in start. If string2 is not found in string1 or if start is not within string1, Pos returns 0. If any argument's value is null, Pos returns null.



Usage The Pos function is case sensitive. Examples This statement returns 6:



Pos("BABE RUTH", "RU")



This statement returns 1:



Pos("BABE RUTH", "B")



This statement returns 0, because the case does not match:



Pos("BABE RUTH", "be")



This statement starts searching at position 4 and returns 0, because position 4 is after the occurrence of BE:



Pos("BABE RUTH", "BE", 4 )



These statements change the text NY in the SingleLineEdit sle_group to North East:



long place_nbr place_nbr = Pos(sle_group.Text, "NY")



sle_group.SelectText(place_nbr, 2) sle_group.ReplaceText("North East")



These statements separate the return value of GetBandAtPointer into the band name and row number. The Pos function finds the position of the tab in the string and the Left and Mid functions extract the information to the left and right of the tab:



string s, ls_left, ls_right integer li_tab



s = dw_groups.GetBandAtPointer() li_tab = Pos(s, "~t", 1)



ls_left = Left(s, li_tab - 1) ls_right = Mid(s, li_tab + 1)



You could write similar code for a generic parsing function with three arguments. The string s would be an argument passed by value and ls_left and ls_right would be strings passed by reference.



Other functions that return a pair of tab-separated values for which you could use the parsing function are GetObjectAtPointer and GetValue.



See also GetValue method for DataWindows in Section 9.92, “GetValue” in DataWindow Reference. GetObjectAtPointer method for DataWindows in Section 9.74, “GetObjectAtPointer” in DataWindow Reference. LastPos Left Mid Right Pos method for DataWindows in Section 2.4.93, “Pos” in DataWindow Reference.
