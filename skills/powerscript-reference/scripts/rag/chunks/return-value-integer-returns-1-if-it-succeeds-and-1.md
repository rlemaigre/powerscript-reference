# Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage

Use SetResultSet when you want to create an ADOResultSet object and populate it with data from a ResultSet object. The ResultSet object can be generated from a DataStore object using the GenerateResultSet function.



After you create the ADOResultSet object using SetResultSet, you can use the GetRecordSet function to return the ADO result set in an ADO Recordset object of type OLEObject that you can use as a native ADO Recordset object in PowerScript.



Examples See GetRecordSet. See also GenerateResultSet method for DataWindows in Section 9.42, “GenerateResultSet” in DataWindow Reference.



GetRecordSet SetRecordSet



- 10.639 SetSelectedDate Description Selects a specified date. Applies to MonthCalendar control Syntax controlname.SetSelectedDate ( d )


- Table 10.794:




|Argument|Description|
|---|---|
|controlname|The name of the MonthCalendar control for which you want to set the selected date|
|d|A date value to be set as the date selected|



Return value Integer.



- Returns 0 for success and one of the following negative values otherwise:


- -1 -- Invalid arguments
- -2 -- Unknown failure Usage




Use the SetSelectedDate function to select a single date. SetSelectedDate returns -1 if you try to specify a date that is outside the range of minimum and maximum dates specified with SetDateLimits.



SetSelectedDate and SetSelectedRange trigger a DateChanged event. You should not call either method in a DateChanged event, particularly using the Post method.
