# Table 8.8:

|Parameter|Description|
|---|---|
|ProcedureName|Any valid PowerBuilder name.|
|StoredProcedure|NameAny stored procedure in the database.|
|@Paramn=Value|Then name of a parameter (argument) defined in the stored procedure and a valid PowerBuilder expression; represents the number of the parameter and value.|



|Parameter|Description|
|---|---|
|TransactionObje|ctThe name of the transaction object for which you want to declare the procedure. This clause is required only for transaction objects other than the default (SQLCA).|



Usage DECLARE Procedure is a nonexecutable command. It is analogous to declaring a variable. To declare a local procedure, open the script in the Script view and select Paste SQL from the PainterBar or the Edit>Paste Special menu. To declare a global, instance, or shared procedure, select Declare from the first drop-down list in the Script view and Global Variables, Instance Variables, or Shared Variables from the second drop-down list, then select Paste SQL. For information about global, instance, shared, and local scope, see Where to declare variables. Examples



- Example 1



This statement declares the SAP ASE procedure Emp_proc for the database specified in the default transaction object. It references the Emp_name_var and Emp_sal_var variables, which must be set to appropriate values before you execute the EXECUTE Emp_proc command:



DECLARE Emp_proc procedure for GetName @emp_name = :Emp_name_var, @emp_salary = :Emp_sal_var ;



- Example 2




This statement declares the ORACLE procedure Emp_proc for the database specified in the default transaction object. It references the Emp_name_var and Emp_sal_var variables, which must be set to appropriate values before you execute the EXECUTE Emp_proc command:



DECLARE Emp_proc procedure for GetName (:Emp_name_var, :Emp_sal_var) ;



- 8.1.7 DELETE Description Deletes the rows in TableName specified by Criteria. Syntax DELETE FROM TableName WHERE Criteria {USING TransactionObject};


- Table 8.9:




|Parameter|Description|
|---|---|
|TableName|The name of the table from which you want to delete rows.|
|Criteria|Criteria that specify which rows to delete.|



|Parameter|Description|
|---|---|
|TransactionObj|ectThe name of the transaction object that identifies the database containing the table. This clause is required only for transaction objects other than the default (SQLCA).|



Usage



Error handling



It is good practice to test the success/failure code after executing a DELETE statement. To see if the DELETE was successful, you can test SLQCode for a failure code. However, if nothing matches the WHERE clause and no rows are deleted, SQLCode is still set to zero. To make sure the delete affected at least one row, check the SQLNRows property of the transaction object.
