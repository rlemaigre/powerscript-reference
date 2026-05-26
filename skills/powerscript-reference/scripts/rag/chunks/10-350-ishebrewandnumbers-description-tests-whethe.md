# 10.350 IsHebrewAndNumbers Description Tests whether a particular string is composed entirely of Hebrew characters and numbers. Syntax IsHebrewAndNumbers ( string )

- Table 10.432:



|Argument|Description|
|---|---|
|string|A string whose value you want to test to find out if it is composed entirely of Hebrew characters and numbers|



Return value Boolean. Returns true if string is composed entirely of Hebrew characters and numbers and false if it is not. Usage



If you are not running a version of Windows that supports right-to-left languages, IsHebrewAndNumbers is set to false.



Examples



Under a version of Windows that supports right-to-left languages, this statement returns true if the SingleLineEdit sle_name is composed entirely of Hebrew characters and numbers:



IsHebrewAndNumbers(sle_name.Text)



See also IsAllHebrew IsAnyHebrew IsHebrew Reverse



10.351 IsImpersonating



Description Queries whether a COM object running on COM+ is impersonating the client. Applies to TransactionServer objects Syntax



transactionserver.IsImpersonating ( )



- Table 10.433:




|Argument|Description|
|---|---|
|transactionserver|Reference to the TransactionServer service instance|
