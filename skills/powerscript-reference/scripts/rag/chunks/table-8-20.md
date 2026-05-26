# Table 8.20:

|Parameter|Description|
|---|---|
|TableName|The name of the table you want to update.|



|Parameter|Description|
|---|---|
|BlobColumn|The name of the column you want to update in TableName. The datatype of this column must be blob.|
|BlobVariable|A PowerScript variable of the datatype blob.|
|RestOfUpdateState|Thementrest of the UPDATE statement (the WHERE clause).|
|TransactionObject|The name of the transaction object that identifies the database containing the table. This clause is required only for transaction objects other than the default (SQLCA).|



Usage



Error handling



It is good practice to test the success/failure code after executing an UPDATEBLOB statement. To make sure the update affected at least one row, check the SQLNRows property of SQLCA or the transaction object. The SQLCode or SQLDBCode property will not indicate the success or failure of the UPDATEBLOB statement.
