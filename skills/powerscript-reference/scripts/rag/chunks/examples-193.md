# Examples

This statement returns true if the text in sle_ID begins with one or more uppercase or lowercase letters (^ at the beginning of the pattern means that the beginning of the string must match the characters that follow):



Match(sle_ID.Text, "^[A-Za-z]")



This statement returns false if the text in sle_ID contains any digits (^ inside a bracket is a complement operator):



Match(sle_ID.Text, "[^0-9]")



This statement returns true if the text in sle_ID contains one uppercase letter:



Match(sle_ID.Text, "[A-Z]")



This statement returns true if the text in sle_ID contains one or more uppercase letters (+ indicates one or more occurrences of the pattern):



Match(sle_ID.Text, "[A-Z]+")



This statement returns false if the text in sle_ID contains anything other than two digits followed by a letter (^ and $ indicate the beginning and end of the string):



Match(sle_ID.Text, "^[0-9][0-9][A-Za-z]$")
