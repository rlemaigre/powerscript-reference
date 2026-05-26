# Usage

If the start position is beyond the end of the string, Replace appends string2 to string1. If there are fewer characters after the start position than specified in n, Replace replaces all the characters to the right of character start.



If n is zero, then, in effect, Replace inserts string2 into string1. Examples These statements change the value of Name from Davis to Dave:



string Name Name = "Davis" Name = Replace(Name, 4, 2, "e")



This statement returns BABY RUTH:



Replace("BABE RUTH", 1, 4, "BABY")



This statement returns Closed for the Winter:



Replace("Closed for Vacation", 12, 8, "the Winter")



This statement returns ABZZZZEF:



Replace("ABCDEF", 3, 2, "ZZZZ")



This statement returns ABZZZZ:



Replace("ABCDEF", 3, 50, "ZZZZ")



This statement returns ABCDEFZZZZ:



Replace("ABCDEF", 50, 3, "ZZZZ")



These statements replace all occurrences of red within the string mystring with green. The original string is taken from the SingleLineEdit sle_1 and the result becomes the new text of sle_1:



long start_pos=1 string old_str, new_str, mystring



mystring = sle_1.Text old_str = "red" new_str = "green"



// Find the first occurrence of old_str. start_pos = Pos(mystring, old_str, start_pos)



// Only enter the loop if you find old_str. DO WHILE start_pos > 0



// Replace old_str with new_str. mystring = Replace(mystring, start_pos, &



Len(old_str), new_str) // Find the next occurrence of old_str. start_pos = Pos(mystring, old_str, &



start_pos+Len(new_str))



LOOP sle_1.Text = mystring



See also Replace method for DataWindows in Section 2.4.101, “Replace” in DataWindow Reference.
