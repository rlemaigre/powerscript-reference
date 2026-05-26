# Syntax

DISCONNECT {USING TransactionObject};



- Table 8.11:




|Parameter|Description|
|---|---|
|TransactionOb|jectThe name of the transaction object that identifies the database you want to disconnect from and in which you want to permanently update all database operations since the previous COMMIT, ROLLBACK, or CONNECT. This clause is required only for transaction objects other than the default (SQLCA).|



Usage



Error handling



It is good practice to test the success/failure code after executing a DISCONNECT statement.
