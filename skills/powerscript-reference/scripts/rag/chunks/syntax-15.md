# Syntax

CLOSE CursorName ;



- Table 8.3:



|Parameter|Description|
|---|---|
|CursorName|The cursor you want to close|



Usage



This statement must be preceded by an OPEN statement for the same cursor. The USING TransactionObject clause is not allowed with CLOSE; the transaction object was specified in the statement that declared the cursor.



CLOSE often appears in the script that is executed when the SQL code after a fetch equals 100 (not found).



Error handling



It is good practice to test the success/failure code after executing a CLOSE cursor statement.



Examples This statement closes the Emp_cursor cursor:



CLOSE Emp_cursor ;



- 8.1.2 CLOSE Procedure Description Closes the SQL procedure ProcedureName; ends processing of ProcedureName.




DBMS-specific Not all DBMSs support stored procedures.



Syntax



CLOSE ProcedureName;



- Table 8.4:




|Parameter|Description|
|---|---|
|ProcedureName|The stored procedure you want to close|
