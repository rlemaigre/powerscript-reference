# Declaring a procedure with the SQL Native Client database interface

When you connect to Microsoft SQL Server using the PowerBuilder SQL Native Client (SNC) database interface, the syntax for declaring a procedure is:



DECLARE logical_procedure_name PROCEDURE FOR [@rc=]procedure_name {@param1 = value1 [OUTPUT], @param2 = value2 [OUTPUT], ...} {USING transaction_object};



[@rc=] indicates that you want to get the procedure's return value. Use the keyword OUTPUT or OUT to indicate an output parameter if you want to get the output parameter's value. If the BindSPInput database parameter is 0, value1, value2,... can be either PowerBuilder script variables or literal values. If BindSPInput is 1, value1, value2, ... must be PowerBuilder script variables. If you specify literal values, the SNC interface returns a runtime error.



When you declare a dynamic SQL statement with a procedure, enter a question mark (?) for each IN/OUT parameter in the statement. Value substitution is positional. For examples, see Dynamic SQL Format 3 and 4.



- 8.2.1 Dynamic SQL Format 1 Description




Use this format to execute a SQL statement that does not produce a result set and does not require input parameters. You can use this format to execute all forms of Data Definition Language (DDL).
