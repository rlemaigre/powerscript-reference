# 10.345 IsArabic Description

Tests whether a particular character is an Arabic character. For a string, IsArabic tests only the first character on the left.



Syntax



IsArabic ( character )



- Table 10.427:




|Argument|Description|
|---|---|
|character|A character or string whose value you want to test to find out if it is an Arabic character.|



Return value Boolean. Returns true if character is an Arabic character and false if it is not. Usage



If you are not running a version of Windows that supports right-to-left languages, IsArabic is set to false.



Examples



Under a version of Windows that supports right-to-left languages, this statement returns true if the SingleLineEdit sle_name begins with an Arabic character:



IsArabic(sle_name.Text)



See also IsAllArabic IsAnyArabic IsArabicAndNumbers Reverse
