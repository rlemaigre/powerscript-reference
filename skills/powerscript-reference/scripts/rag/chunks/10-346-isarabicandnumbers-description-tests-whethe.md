# 10.346 IsArabicAndNumbers Description Tests whether a particular string is composed entirely of Arabic characters or numbers. Syntax

IsArabicAndNumbers ( string )



- Table 10.428:



|Argument|Description|
|---|---|
|string|A string whose value you want to test to find out if it is composed entirely of Arabic characters or numbers|



Return value Boolean. Returns true if string is composed entirely of Arabic characters or numbers and false if it is not. Usage



If you are not running a version of Windows that supports right-to-left languages, IsArabicAndNumbers is set to false.



Examples



Under a version of Windows that supports right-to-left languages, this statement returns true if the SingleLineEdit sle_name is composed entirely of Arabic characters and numbers:



IsArabicAndNumbers(sle_name.Text)



See also IsAllArabic IsAnyArabic IsArabic Reverse



10.347 IsCallerInRole



Description



Indicates whether the direct caller of a COM object running on COM+ is in a specified role (either individually or as part of a group).



Applies to TransactionServer objects Syntax



transactionserver.IsCallerInRole ( role )



- Table 10.429:




|Argument|Description|
|---|---|
|transactionserver|Reference to the TransactionServer service instance|
|role|A string expression containing the name of a role|
