# Error handling

It is good practice to test the success/failure code after executing a FETCH statement. To see if the FETCH was successful, you can test SLQCode for a failure code. However, if nothing matches the WHERE clause and no rows are fetched, SQLCode is still set to 100. To make sure the fetch affected at least one row, check the SQLNRows property of the transaction object.
