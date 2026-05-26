# Table 8.19:

|Parameter|Description|
|---|---|
|TableName|The name of the table in which you want to update rows.|
|RestOfUpdateSta|tementThe rest of the UPDATE statement (the SET and WHERE clauses).|
|TransactionObjec|Thet name of the transaction object that identifies the database containing the table. This clause is required only for transaction objects other than the default (SQLCA).|



Usage



Error handling



It is good practice to test the success/failure code after executing a UPDATE statement. You can test SQLCode for a failure code. However, if nothing matches the WHERE clause and no rows are updated, SQLCode is still set to zero. To make sure the update affected at least one row, check the SQLNRows property of the transaction object.



Examples



These statements update rows from the Employee table in the database specified in the transaction object named Emp_tran, where Emp_num is equal to the value entered in the SingleLineEdit sle_Number:



int Emp_num Emp_num=Integer(sle_Number.Text ) UPDATE Employee



SET emp_name = :sle_Name.Text WHERE Employee.emp_num = :Emp_num USING Emp_tran ;



IF Emptran.SQLNRows > 0 THEN



COMMIT USING Emp_tran ; END IF



The integer Emp_num and the SingleLineEdit sle_name require a colon to indicate they are host (PowerScript) variables when you use them in an UPDATE statement.



8.1.18 UPDATEBLOB Description Updates the rows in TableName in BlobColumn. Syntax



UPDATEBLOB TableName SET BlobColumn = BlobVariable RestOfUpdateStatement {USING TransactionObject} ;
