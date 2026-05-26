# Table 8.24:

|Parameter|Description|
|---|---|
|DynamicStaging|AreaThe name of the DynamicStagingArea (usually SQLSA). If you need a DynamicStagingArea variable other than SQLSA, you must declare it and instantiate it with the CREATE statement before using it.|
|SQLStatement|A string containing a valid SQL statement. The string can be a string constant or a PowerBuilder variable preceded by a colon (such as :mysql). The string must be contained on one line and cannot contain expressions.<br><br>Enter a question mark (?) for each parameter in the statement. Value substitution is positional; reserved word substitution is not allowed.|
|TransactionObje|ctThe(optional)name of the transaction object that identifies the database.|



|Parameter|Description|
|---|---|
|ParameterList (o|ptional)A comma-separated list of PowerScript variables. Note that PowerScript variables are preceded by a colon (:).|



Usage To specify a null value, use the SetNull function. Examples



These statements prepare a DELETE statement with one parameter in SQLSA and then execute it using the value of the PowerScript variable Emp_id_var:



INT Emp_id_var = 56 PREPARE SQLSA



FROM "DELETE FROM employee WHERE emp_id=?" ; EXECUTE SQLSA USING :Emp_id_var ;



These statements prepare an INSERT statement with three parameters in SQLSA and then execute it using the value of the PowerScript variables Dept_id_var, Dept_name_var, and Mgr_id_var (note that Mgr_id_var is null):



INT Dept_id_var = 156 INT Mgr_id_var String Dept_name_var Dept_name_var = "Department" SetNull(Mgr_id_var) PREPARE SQLSA



FROM "INSERT INTO department VALUES (?,?,?)" ; EXECUTE SQLSA



USING :Dept_id_var,:Dept_name_var,:Mgr_id_var ;



- 8.2.3 Dynamic SQL Format 3 Description




Use this format to execute a SQL statement that produces a result set in which the input parameters and result set columns are known at compile time.
