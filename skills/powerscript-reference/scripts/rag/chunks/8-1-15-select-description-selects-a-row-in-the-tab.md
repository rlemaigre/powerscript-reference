# 8.1.15 SELECT Description Selects a row in the tables specified in RestOfSelectStatement. Syntax SELECT RestOfSelectStatement {USING TransactionObject} ;

|Parameter|Description|
|---|---|
|RestOfSelectState|Thementrest of the SELECT statement (the column list INTO, FROM, WHERE, and other clauses).|
|TransactionObjec|tThe name of the transaction object that identifies the database containing the table. This clause is required only for transaction objects other than the default (SQLCA).|



Usage An error occurs if the SELECT statement returns more than one row.
