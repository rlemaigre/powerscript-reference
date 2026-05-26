# Examples

Under a version of Windows that supports right-to-left languages, this statement returns true if the SingleLineEdit sle_name contains at least one Arabic character:



IsAnyArabic(sle_name.Text)



See also IsAllArabic IsArabic IsArabicAndNumbers Reverse



- 10.344 IsAnyHebrew Description Tests whether a particular string contains at least one Hebrew character. Syntax IsAnyHebrew ( string )


- Table 10.426:




|Argument|Description|
|---|---|
|string|A string whose value you want to test to find out if it contains at least one Hebrew character|



Return value Boolean. Returns true if string contains at least one Hebrew character and false if it does not. Usage



If you are not running a version of Windows that supports right-to-left languages, IsAnyHebrew is set to false.
