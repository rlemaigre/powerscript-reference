# Syntax

DynamicDescriptionArea.GetDynamicDate ( index )



- Table 10.251:




|Argument|Description|
|---|---|
|DynamicDescripti|onAreaThe name of the DynamicDescriptionArea, usually SQLDA.|
|index|An integer identifying the output parameter descriptor from which you want to get the data. Index must be less than or equal to the value in NumOutputs in DynamicDescriptionArea.|



Return value Date. Returns the Date data in the output parameter descriptor identified by index in DynamicDescriptionArea. Returns 1900-01-01 if an error occurs. If any argument's value is null, GetDynamicDate returns null. Usage



After you fetch data using Format 4 dynamic SQL statements, the DynamicDescriptionArea, usually SQLDA, contains information about the data retrieved. The SQLDA property NumOutputs specifies the number of data descriptors returned. The property array OutParmType contains values of the ParmType enumerated datatype specifying the datatype of each value returned.



Use GetDynamicDate when the value of OutParmType is TypeDate! for the value in the array that you want to retrieve.



Examples These statements set Today to the Date data in the second output parameter descriptor:



Date Today Today = GetDynamicDate(SQLDA, 2)



If you have executed Format 4 dynamic SQL statements, data is stored in the DynamicDescriptionArea. This example finds out the datatype of the stored data and uses a CHOOSE CASE statement to assign it to local variables.



If the SELECT statement is:



SELECT emp_start_date FROM employee;



then the code at CASE Typedate! will be executed. For each case, other processing could assign the value to a DataWindow so that the value would not be overwritten when another value has the same ParmType:



Date Datevar Time Timevar DateTime Datetimevar Double Doublevar String Stringvar



FOR n = 1 to SQLDA.NumOutputs CHOOSE CASE SQLDA.OutParmType[n] CASE TypeString!



Stringvar = SQLDA.GetDynamicString(n)



... // Other processing



CASE TypeDecimal!, TypeDouble!, & TypeInteger!, TypeLong!, & TypeReal!, TypeBoolean!



Doublevar = SQLDA.GetDynamicNumber(n)



... // Other processing CASE TypeDate!



Datevar = SQLDA.GetDynamicDate(n)



... // Other processing CASE TypeDateTime!



Datetimevar = SQLDA.GetDynamicDateTime(n)



... // Other processing CASE TypeTime!



Timevar = SQLDA.GetDynamicTime(n)



... // Other processing CASE ELSE



MessageBox("Dynamic SQL", &



"datatype unknown.") END CHOOSE



NEXT



See also GetDynamicDateTime GetDynamicNumber GetDynamicString GetDynamicTime SetDynamicParm Using dynamic SQL
