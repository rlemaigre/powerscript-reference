# Error handling

It is good practice to test the success/failure code after executing a SELECT statement. You can test SQLCode for a failure code.



When you use the INTO clause, PowerBuilder does not verify whether the datatype of the retrieved column matches the datatype of the host variable; it only checks for the existence of the columns and tables. You are responsible for checking that the datatypes match. Keep in mind that not all database datatypes are the same as PowerBuilder datatypes.
