# Return value

String. Returns a string with the characters of string in reversed order. Returns the empty string if it fails.



Usage Reverse is useful with the IsArabic and IsHebrew functions, which help you implement rightto-left character display when you are using a version of Windows that supports right-to-left languages. Examples Under a version of Windows that supports right-to-left languages, this statement returns a string with the characters in reverse order from the characters entered in sle_name:



string ls_name ls_name = Reverse(sle_name.Text)



See also IsArabic IsHebrew
