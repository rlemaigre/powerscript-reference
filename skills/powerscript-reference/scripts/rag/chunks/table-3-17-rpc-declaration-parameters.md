# Table 3.17: RPC declaration parameters

|Argument|Description|
|---|---|
|FUNCTION or SUBROUTINE|A keyword specifying the type of call, which determines the way return values are handled. If there is a return value, declare it as a FUNCTION. If it returns nothing or returns VOID, specify SUBROUTINE.|
|rtndatatype|In a FUNCTION declaration, the datatype of the value returned by the function.|
|functionname|The name of the database procedure as you will call it in PowerBuilder. If the name in the DBMS is different, use ALIAS FOR to associate the DBMS name with the PowerBuilder name.|
|REF|Specifies that you are passing by reference the argument that follows REF. The stored procedure can store a value in arg that will be accessible to the rest of the PowerBuilder script.<br><br>When you pass a string by reference, all memory management is done in PowerBuilder. The string variable must be long enough to hold the|



|Argument|Description|
|---|---|
| |returned value. To ensure that this is true, first declare the string variable, and then use the Space function to fill the variable with blanks equal to the maximum number of characters that you expect the function to return.|
|datatype arg|The datatype and name of the arguments for the stored procedure. The list must match the definition of the stored procedure in the database. Each datatype arg pair can be preceded by REF.|
|RPCFUNC|A keyword indicating that this declaration is for a stored procedure in a DBMS, not an external function in a DLL. For information on declaring external functions, see Declaring external functions.<br><br>|
|ALIAS FOR "spname" (|optional) Keywords followed by a string naming the procedure in the database. If the name in the database is not the name you want to use in your script or if the name in the database is not a legal PowerScript name, you must specify ALIAS FOR "spname" to establish the association between the PowerScript name and the database name.|
