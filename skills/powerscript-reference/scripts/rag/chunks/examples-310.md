# Examples

For MLSync objects, you can allow a user to edit the command line arguments for a synchronization call as follows:



long rc string cmd cmd = myMLSync.GetCommandString() // Edit cmd however you wish



... rc = myMLSync.Synchronize(cmd)



See also CancelSync GetCommandString SetParm



- 10.697 SyntaxFromSQL Description Generates DataWindow source code based on a SQL SELECT statement. Applies to Transaction objects Syntax transaction.SyntaxFromSQL ( sqlselect, presentation, err )


- Table 10.871:




|Argument|Description|
|---|---|
|transaction|The name of a connected transaction object.|
|sqlselect|A string whose value is a valid SQL SELECT statement.|
|presentation|A string whose value is the default presentation style you want for the DataWindow. The simple format is:<br><br>Style(Type=presentationstyle)<br><br>Values for presentationstyle correspond to selected styles in the New DataWindow dialog box in the DataWindow painter. Keywords are:<br><br>(Default) Tabular Grid Form (for freeform) Graph Group Label The Usage section lists the keywords you can use in presentation.|
|err|A string variable to which PowerBuilder will assign any error messages that occur.|



Return value String. Returns the empty string ("") if an error occurs. If SyntaxFromSQL fails, err may contain error messages if warnings or soft errors occur (for example, a syntax error). If any argument's value is null, SyntaxFromSQL returns null. Usage



To create a DataWindow object, you can pass the source code returned by SyntaxFromSQL directly to the Create function.



Table owner in the SQL statement If the value of the LogID property of the Transaction object is not the owner of the table being accessed in the SQL statement for the SyntaxFromSQL function, then the table name in the SQL SELECT statement must be qualified with the owner name.
