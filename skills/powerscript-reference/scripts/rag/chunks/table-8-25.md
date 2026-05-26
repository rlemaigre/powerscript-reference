# Table 8.25:

|Parameter|Description|
|---|---|
|Cursor or Procedure|The name of the cursor or procedure you want to use.|



|Parameter|Description|
|---|---|
|DynamicStagingA|Therea name of the DynamicStagingArea (usually SQLSA). If you need a DynamicStagingArea variable other than SQLSA, you must declare it and instantiate it with the CREATE statement before using it.|
|SQLStatement|A string containing a valid SQL SELECT statement The string can be a string constant or a PowerBuilder variable preceded by a colon (such as :mysql). The string must be contained on one line and cannot contain expressions.<br><br>Enter a question mark (?) for each parameter in the statement. Value substitution is positional; reserved word substitution is not allowed.|
|TransactionObjec|Thet (optional)name of the transaction object that identifies the database.|
|ParameterList (op|Ational)comma-separated list of PowerScript variables. Note that PowerScript variables are preceded by a colon (:).|
|HostVariableList|The list of PowerScript variables into which the data values will be retrieved.|



Usage To specify a null value, use the SetNull function. The DECLARE statement is not executable and can be declared globally. If your DBMS supports formats of FETCH other than the customary (and default) FETCH NEXT, you can specify FETCH FIRST, FETCH PRIOR, or FETCH LAST. The FETCH and CLOSE statements in Format 3 are the same as in standard embedded SQL. To declare a local cursor or procedure, open the script in the Script view and select Paste SQL from the PainterBar or the Edit>Paste Special menu. To declare a global, instance, or shared cursor or procedure, select Declare from the first drop-down list in the Script view, and select Global Variables, Instance Variables, or Shared Variables from the second dropdown list. Then, select Paste SQL. For information about global, instance, shared, and local scope, see Where to declare variables. Examples



- Example 1



These statements associate a cursor named my_cursor with SQLSA, prepare a SELECT statement in SQLSA, open the cursor, and return the employee ID in the current row into the PowerScript variable Emp_id_var:



integer Emp_id_var DECLARE my_cursor DYNAMIC CURSOR FOR SQLSA ; PREPARE SQLSA FROM "SELECT emp_id FROM employee" ; OPEN DYNAMIC my_cursor ; FETCH my_cursor INTO :Emp_id_var ; CLOSE my_cursor ;



You can loop through the cursor as you can in embedded static SQL.



- Example 2




These statements associate a cursor named my_cursor with SQLSA, prepare a SELECT statement with one parameter in SQLSA, open the cursor, and substitute the value of the variable Emp_state_var for the parameter in the SELECT statement. The employee ID in the active row is returned into the PowerBuilder variable Emp_id_var:



DECLARE my_cursor DYNAMIC CURSOR FOR SQLSA ; integer Emp_id_var string Emp_state_var = "MA" string sqlstatement



sqlstatement = "SELECT emp_id FROM employee "&



+"WHERE state = ?" PREPARE SQLSA FROM :sqlstatement ; OPEN DYNAMIC my_cursor using :Emp_state_var ; FETCH my_cursor INTO :Emp_id_var ; CLOSE my_cursor ;



- Example 3



These statements perform the same processing as the preceding example but use a database stored procedure called Emp_select:



// The syntax of emp_select is: // create procedure emp_select (@stateparm char(2)) as // SELECT emp_id FROM employee WHERE state=@stateparm. DECLARE my_proc DYNAMIC PROCEDURE FOR SQLSA ; integer Emp_id_var string Emp_state_var



PREPARE SQLSA FROM "execute emp_select @stateparm=?" ; Emp_state_var = "MA" EXECUTE DYNAMIC my_proc USING :Emp_state_var ; FETCH my_proc INTO :Emp_id_var ; CLOSE my_proc ;



- Example 4




These statements are for a stored procedure with a return value for a SQL Native Client (SNC) connection:



integer var1, ReturnVal string var2



PREPARE SQLSA FROM "execute @rc = myproc @parm1=?, @parm2=? OUTPUT "; DECLARE my_proc DYNAMIC PROCEDURE FOR SQLSA ;



EXECUTE DYNAMIC my_proc USING :var1, :var2 ; //fetch result set



. . . //fetch return value and output parameter FETCH my_proc INTO : ReturnVal, :var2; CLOSE my_proc ;



- 8.2.4 Dynamic SQL Format 4 Description




Use this format to execute a SQL statement that produces a result set in which the number of input parameters, or the number of result-set columns, or both, are unknown at compile time.
