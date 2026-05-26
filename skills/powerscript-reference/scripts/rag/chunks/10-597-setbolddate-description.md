# 10.597 SetBoldDate Description

Displays the specified date in bold. Applies to MonthCalendar control Syntax



controlname.SetBoldDate ( d, onoff {, rt } )



- Table 10.737:




|Argument|Description|
|---|---|
|controlname|The name of the MonthCalendar control in which you want to clear the bold dates|
|d|The date to be set in bold|
|onoff|A boolean specifying whether the date is to be set to bold. Values are: true -- Set the date to bold false -- Clear the date's bold setting|
|rt (optional)|A value of the MonthCalRepeatType enumerated variable. Values are: Once! -- Set or clear the bold setting for the specified date (default) Monthly! -- Using the day portion of the specified date, set or clear the bold setting for this day in all months Yearly! -- Using the day and month portion of the specified date, set or clear the bold setting for this date in all years|



Return value Integer.



- Returns 0 for success and one of the following negative values for failure:


- -1 -- Invalid arguments
- -2 -- Unknown failure Usage




You can use the SetBoldDate function to specify that a selected date, such as an anniversary date, displays in bold. If a specific date has been set to bold, you can clear the bold setting by passing false as the second parameter. ClearBoldDates clears all such settings.



Examples This example sets the date January 5, 2005 to bold in the control mcVacation:



integer li_return Date d d = date("January 5, 2005")



li_return = mcVacation.SetBoldDate( d, true)



This example sets the fifth day of every month to bold in the control mcVacation:



integer li_return Date d



d = date("January 5, 2005") li_return = mcVacation.SetBoldDate( d, true, Monthly!)



This example sets the date January 5 to bold for all years in the control mcVacation:



integer li_return Date d d = date("January 5, 2005")



li_return = mcVacation.SetBoldDate( d, true, Yearly!)



This example clears the bold setting for the fifth day of every month in the control mcVacation:



integer li_return Date d d = date("January 5, 2005")



li_return = mcVacation.SetBoldDate( d, false, Monthly!)



See also ClearBoldDates



- 10.598 SetByte Description Sets data of type Byte for a blob variable. Syntax SetByte ( blobvariable, n, b)


- Table 10.738:




|Argument|Description|
|---|---|
|blobvariable|A variable of the Blob datatype in which you want to insert a value of the Byte datatype|
|n|The number of the position in blobvariable at which you want to insert a value of the Byte datatype|
|b|Data of the Byte datatype that you want to set into blobvariable at position n.|



Return value Integer.



- Returns 1 if it succeeds or -1 if n exceeds the scope of blobvariable; it returns null if the value of any of its arguments is null. Examples




This example adds the byte equivalent of 37 at the initial position of the emp_photo blob. If no byte is assigned to the second position, the blob displays as the ASCII equivalent of 37 (the percent character, %) in the second message box:



blob {100} emp_photo



byte b1 = byte (37) int li_rtn li_rtn = SetByte(emp_photo, 1, b1) messagebox("setbyte", string(b1)) messagebox("setbyte", string(emp_photo))



See also Byte GetByte



- 10.599 SetColumn Description Sets column information for a DataWindow, child DataWindow, or ListView control.




For syntax for a DataWindow or child DataWindow, see the SetColumn method for DataWindows in Section 9.161, “SetColumn” in DataWindow Reference.



Applies to ListView controls Syntax



listviewname.SetColumn ( index, label, alignment, width )



- Table 10.739:




|Argument|Description|
|---|---|
|listviewname|The name of the ListView control for which you want to set column properties.|
|index|The number of the column for which you want to set column properties.|
|label|The label of the column for which you want to set column properties.|
|alignment|A value of the Alignment enumerated datatype specifying how to align the column. Values are:<br><br>• Left! -- Align the column at the left margin<br>• Right! -- Align the column at the right margin<br>• Center! -- Center the column between the left and right margins<br>• Justify! -- Not valid for the SetColumn function<br>|
|width|The width of the column for which you want to set column properties.|



Return value Integer.



- Returns 1 if it succeeds and -1 if an error occurs. Usage SetColumn




is used only in report views. Examples This example sets the second column of a ListView:



lv_list.SetColumn(2 , "Order" , Center! , 800)



See also AddColumn AddItem SetItem



- 10.600 SetComplete Declares that a transaction on a transaction server should be committed.


- Table 10.740:



|To commit a transaction|Use|
|---|---|
|For OLETxnObject objects|Syntax 1|
|For TransactionServer objects|Syntax 2<br><br>|



- 10.600.1 Syntax 1: For OLETxnObject objects Description Declares that the current transaction should be committed. Applies to OLETxnObject objects Syntax oletxnobject.SetComplete ( )


- Table 10.741:




|Argument|Description|
|---|---|
|oletxnobject|The name of the OLETxnObject variable that is connected to the COM object|



Return value Integer.



- Returns 1 if it succeeds and -1 if an error occurs. Usage




Call the SetComplete function from a client to allow a COM+ transaction to be completed if all participants in the transaction on the COM+ server have called SetComplete or EnableCommit. If any participant in the transaction has called DisableCommit or SetAbort, the transaction is not completed.
