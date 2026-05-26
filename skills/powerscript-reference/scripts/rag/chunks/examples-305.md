# Examples

These statements set values in the Error object and then trigger a SystemError event so the error processing for these values can be tested:



int error_number string error_text Error.Number = 1010 Error.Text = "Salary must be a positive number." Error.Windowmenu = "w_emp"



error_number = Error.Number error_text = Error.Text



SignalError(error_number, error_text)



See also PopulateError



- 10.677 Sin Description Calculates the sine of an angle. Syntax Sin ( n )


- Table 10.840:




|Argument|Description|
|---|---|
|n|The angle (in radians) for which you want the sine|



Return value Double. Returns the sine of n. If n is null, Sin returns null. Examples This statement returns .8414709848078965:



Sin(1)



This statement returns 0:



Sin(0)



This statement returns 0:



Sin(Pi(1))



See also ASin ATan Pi Tan Sin method for DataWindows in Section 2.4.115, “Sin” in DataWindow Reference.



- 10.678 Sleep Description Causes the application to pause for a specified time. Syntax Sleep ( seconds )

- Table 10.841:



|Argument|Description|
|---|---|
|seconds|Long for the number of seconds you want the application to pause|



Return value Integer. Returns 1 if the function succeeds and -1 if an error occurs. Examples This example pauses the application for 5 seconds:



Sleep ( 5 )



10.679 Sort



Sorts rows in a DataWindow control, DataStore, or child DataWindow, or items in a TreeView or ListView control.



For syntax for DataWindows and DataStores, see the Sort method for DataWindows in Section 9.206, “Sort” in DataWindow Reference.



- Table 10.842:






|To sort|Use|
|---|---|
|Items in a TreeView|Syntax 1|
|Items in a ListView|Syntax 2<br><br>|
