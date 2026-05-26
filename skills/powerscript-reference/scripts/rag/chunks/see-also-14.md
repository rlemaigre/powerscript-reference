# See also

Day DayName IsDate DayNumber method for DataWindows in Section 2.4.31, “DayNumber” in DataWindow Reference.



- 10.101 DaysAfter Description Determines the number of days one date occurs after another. Syntax DaysAfter ( date1, date2 )


- Table 10.128:




|Argument|Description|
|---|---|
|date1|A date value that is the start date of the interval being measured|
|date2|A date value that is the end date of the interval|



Return value Long. Returns a long whose value is the number of days date2 occurs after date1. If date2 occurs before date1, DaysAfter returns a negative number. If any argument's value is null, DaysAfter returns null. Examples



- This statement returns 4:

- DaysAfter(2002-12-20, 2002-12-24) This statement returns -4:

- DaysAfter(2002-12-24, 2002-12-20) This statement returns 0:

- DaysAfter(2003-12-24, 2003-12-24)




This statement returns 5:



- DaysAfter(2003-12-29, 2004-01-03)






If you declare date1 and date2 date variables and assign February 16, 2003, to date1 and April 28, 2003, to date2 as follows:



date date1, date2 date1 = 2003-02-16 date2 = 2003-04-28



then each of the following statements returns 71:



DaysAfter(date1, date2)



DaysAfter(2003-02-16, date2) DaysAfter(date1, 2003-04-28) DaysAfter(2003-02-16, 2003-04-28)



See also RelativeDate RelativeTime SecondsAfter DaysAfter method for DataWindows in Section 2.4.32, “DaysAfter” in DataWindow Reference.



- 10.102 DBHandle Description Reports the handle for your DBMS. Applies to Transaction objects Syntax transactionobject.DBHandle ( )

- Table 10.129:




|Argument|Description|
|---|---|
|transactionobject|The current transaction object|



Return value UnsignedLong.



Returns the handle for your DBMS. Transactionobject must exist, and the database must be connected. If transactionobject is null, DBHandle returns null. If transactionobject does not exist, an execution error occurs. If there is not enough memory to connect to your DBMS, DBHandle returns a negative number.



Usage



DBHandle returns a valid handle only if you are connected to the database. It is not able to determine if the database connection does not exist or has been lost.



PowerBuilder uses the database handle internally to communicate with the database. If your database supports an API with functions that PowerBuilder does not support, you can use DBHandle to provide the handle as an argument to one of these external functions.



Examples For examples, see Section 16.3.1, “DBHandle” in Connecting to Your Database.



- 10.103 DebugBreak Description




Suspends execution and opens the Debug window. Syntax



DebugBreak ( )



Return value None Usage



Insert a call to the DebugBreak function into a script at a point at which you want to suspend execution and examine the application. Then enable just-in-time debugging and run the application in the development environment.



When PowerBuilder encounters the DebugBreak function, the Debug window opens showing the current context.



Examples This statement tests whether a variable is null and opens the Debug window if it is:



IF IsNull(auo_ext) THEN DebugBreak()



- 10.104 Dec Description Converts a string to a decimal number or obtains a decimal value stored in a blob. Syntax Dec ( stringorblob )


- Table 10.130:




|Argument|Description|
|---|---|
|stringorblob|A string whose value you want returned as a decimal value or a blob in which the first value is the decimal you want. The rest of the contents of the blob is ignored. Stringorblob can also be an Any variable containing a string or blob.|



Return value Decimal. Returns the value of stringorblob as a decimal. If stringorblob is not a valid PowerScript number or if it contains an incompatible datatype, Dec returns 0. If stringorblob is null, Dec returns null. Examples This statement returns 24.3 as a decimal datatype:



Dec("24.3")



This statement returns the contents of the SingleLineEdit sle_salary as a decimal number:



Dec(sle_salary.Text)



For an example of assigning and extracting values from a blob, see Real. See also Double Integer Long Real



- 10.105 DeleteCategory Description Deletes a category and the data values for that category from the category axis of a graph.



Graph controls in windows and user objects. Does not apply to graphs within DataWindow objects (because their data comes directly from the DataWindow).



Syntax



controlname.DeleteCategory ( categoryvalue )



- Table 10.131:




|Argument|Description|
|---|---|
|controlname|The graph in which you want to delete a category.|
|categoryvalue|A value that is the category you want to delete from controlname. The value you specify must be the same datatype as the datatype of the category axis.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, DeleteCategory returns null. Examples



These statements delete the category whose name is entered in the SingleLineEdit sle_delete from the graph gr_product_data:



string CategName CategName = sle_delete.Text gr_product_data.DeleteCategory(CategName)



See also DeleteData DeleteSeries



- 10.106 DeleteColumn Description Deletes a column.




ListView controls Syntax



listviewname.DeleteColumn ( index )



- Table 10.132:



|Argument|Description|
|---|---|
|listviewname|The name of the ListView control from which you want to delete a column|
|index|The index number of the column you want to delete|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Examples This example deletes the second column in a ListView control:



lv_list.DeleteColumn(2)



See also DeleteColumns



10.107 DeleteColumns



Description Deletes all columns. Applies to ListView controls Syntax



listviewname.DeleteColumns ( )



- Table 10.133:




|Argument|Description|
|---|---|
|listviewname|The name of the ListView control from which you want to delete all columns|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Examples This example deletes all columns in a ListView control:



lv_list.DeleteColumns()



DeleteColumn
