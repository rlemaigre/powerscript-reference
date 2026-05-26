# Examples

Under a version of Windows that supports right-to-left languages, this statement returns true if the SingleLineEdit sle_name is composed entirely of Arabic characters:



IsAllArabic(sle_name.Text)



See also IsAnyArabic IsArabic IsArabicAndNumbers Reverse



- 10.342 IsAllHebrew Description Tests whether a particular string is composed entirely of Hebrew characters. Syntax IsAllHebrew ( string )

- Table 10.424:



|Argument|Description|
|---|---|
|string|A string whose value you want to test to find out if it is composed entirely of Hebrew characters|



Return value Boolean. Returns true if string is composed entirely of Hebrew characters and false if it is not. The presence of numbers, spaces, and punctuation marks will also result in a return value of false. Usage



If you are not running a version of Windows that supports right-to-left languages, IsAllHebrew is set to false.



Examples



Under a version of Windows that supports right-to-left languages, this statement returns true if the SingleLineEdit sle_name is composed entirely of Hebrew characters:



IsAllHebrew(sle_name.Text)



See also IsAnyHebrew IsHebrew IsHebrewAndNumbers Reverse



10.343 IsAnyArabic



Description Tests whether a particular string contains at least one Arabic character. Syntax



IsAnyArabic ( string )



- Table 10.425:






|Argument|Description|
|---|---|
|string|A string whose value you want to test to find out if it contains at least one Arabic character|



Return value Boolean. Returns true if string contains at least one Arabic character and false if it does not. Usage



If you are not running a version of Windows that supports right-to-left languages, IsAnyArabic is set to false.
