# Examples

This example displays a message box that shows the minimum and maximum dates set for a control:



integer li_return Date mindate, maxdate string str1, str2



li_return = mc_1.GetDateLimits(mindate, maxdate) If li_return = -1 then



str1 = "No minimum and maximum dates are set" elseif li_return = -2 then



str1 = "Unknown failure" else



str1 = "Minimum date is " + string(mindate) str2 = "Maximum date is " + string(maxdate)



end if MessageBox("Date Limits", str1 + "~r~n" + str2)



See also SetDateLimits



- 10.207 GetDbmlsyncPath Description Retrieves the full path and file name of the dbmlsync.exe that is installed on the workstation. Applies to MLSync and MLSynchronization controls Syntax SyncObject.GetDbmlsyncPath ( )


- Table 10.249:




|Argument|Description|
|---|---|
|syncObject|The name of the synchronization object|



Return value String. Returns the value of full path and file name of the synchronization executable. Returns -1 if.dbmlsync.exe is not found. Usage



This property uses the value of the synchronization object's MLServerVersion property to decide which version of dbmlsync to return.
