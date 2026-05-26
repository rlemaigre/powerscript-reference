# Error handling

It is good practice to test the success/failure code after executing an SELECTBLOB statement. To make sure the update affected at least one row, check the SQLNRows property of SQLCA or the transaction object. The SQLCode or SQLDBCode property will not indicate the success or failure of the SELECTBLOB statement.



You can include an indicator variable in the host variable list (target parameters) in the INTO clause to check for an empty blob (a blob of zero length) and conversion errors.
