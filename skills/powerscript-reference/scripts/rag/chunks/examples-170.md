# Examples

This example creates an OLEObject variable and calls ConnectToNewObject to create and connect to a new instance of a PowerBuilder COM object. After performing some processing, it checks whether the server is still running before performing additional processing:



OLETxnObject EmpObj Integer li_rc



EmpObj = CREATE OLEObject li_rc = EmpObj.ConnectToNewObject("PB70COM.employee") // Perform some work with the COM object



... IF EmpObj.IsAlive()THEN // Continue processing END IF



- 10.341 IsAllArabic Description Tests whether a particular string is composed entirely of Arabic characters. Syntax IsAllArabic ( string )


- Table 10.423:




|Argument|Description|
|---|---|
|string|A string whose value you want to test to find out if it is composed entirely of Arabic characters|



Return value Boolean. Returns true if string is composed entirely of Arabic characters and false if it is not. The presence of numbers, spaces, and punctuation marks will also result in a return value of false. Usage



If you are not running a version of Windows that supports right-to-left languages, IsAllArabic is set to false.
