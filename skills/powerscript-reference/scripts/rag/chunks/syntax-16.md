# Syntax

COMMIT {USING TransactionObject};



- Table 8.5:




|Parameter|Description|
|---|---|
|TransactionObje|Thect name of the transaction object for which you want to permanently update all database operations since the previous COMMIT, ROLLBACK, or CONNECT. This clause is required only for transaction objects other than the default (SQLCA).|
