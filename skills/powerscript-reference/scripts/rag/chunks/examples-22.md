# Examples

- Example 1 This statement disconnects from the database specified in the default transaction object: DISCONNECT ;


- Example 2




This statement disconnects from the database specified in the transaction object named Emp_tran:



DISCONNECT USING Emp_tran ;



- 8.1.10 EXECUTE Description Executes the previously declared procedure identified by ProcedureName. Syntax EXECUTE ProcedureName;



Table 8.12:



|Parameter|Description|
|---|---|
|ProcedureName|The name assigned in the DECLARE statement of the stored procedure you want to execute. The procedure must have been declared previously. ProcedureName is not necessarily the name of the procedure stored in the database.|



Usage



The USING TransactionObject clause is not allowed with EXECUTE; the transaction object was specified in the statement that declared the procedure.



Error handling



It is good practice to test the success/failure code after executing an EXECUTE statement.



Examples This statement executes the stored procedure Emp_proc:



EXECUTE Emp_proc ;



- 8.1.11 FETCH Description Fetches the row after the row on which Cursor | Procedure is positioned. Syntax FETCH Cursor | Procedure INTO HostVariableList;


- Table 8.13:




|Parameter|Description|
|---|---|
|Cursor or Procedure|The name of the cursor or procedure from which you want to fetch a row|
|HostVariableLis|tPowerScript variables into which data values will be retrieved|



The USING TransactionObject clause is not allowed with FETCH; the transaction object was specified in the statement that declared the cursor or procedure.



If your DBMS supports formats of FETCH other than the customary (and default) FETCH NEXT, you can specify FETCH FIRST, FETCH PRIOR, or FETCH LAST.
