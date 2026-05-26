# 10.349 IsHebrew Description

Tests whether a particular character is a Hebrew character. For a string, IsHebrew tests only the first character on the left.



Syntax



IsHebrew ( character )



- Table 10.431:




|Argument|Description|
|---|---|
|character|A character or string whose value you want to test to find out if it is an Hebrew character|



Return value Boolean. Returns true if character is an Hebrew character and false if it is not. Usage



If you are not running a version of Windows that supports right-to-left languages, IsHebrew is set to false.



Examples



Under a version of Windows that supports right-to-left languages, this statement returns true if the SingleLineEdit sle_name begins with a Hebrew character:



IsHebrew(sle_name.Text)



See also IsAllHebrew IsAnyHebrew IsHebrewAndNumbers Reverse
