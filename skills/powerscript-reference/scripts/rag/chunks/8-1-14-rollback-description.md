# 8.1.14 ROLLBACK Description

Cancels all database operations in the specified database since the last COMMIT, ROLLBACK, or CONNECT.



Syntax



ROLLBACK {USING TransactionObject} ;



Table 8.16:



|Parameter|Description|
|---|---|
|TransactionOb|Thejectname of the transaction object that identifies the database in which you want to cancel all operations since the last COMMIT, ROLLBACK, or CONNECT. This clause is required only for transaction objects other than the default (SQLCA).|



Usage ROLLBACK does not cause a disconnect, but it does close all open cursors and procedures.



Error handling



It is good practice to test the success/failure code after executing a ROLLBACK statement.



Examples Example 1 This statement cancels all database operations in the database specified in the default transaction object:



ROLLBACK ;



Example 2 This statement cancels all database operations in the database specified in the transaction object named Emp_tran:



ROLLBACK USING emp_tran ;
