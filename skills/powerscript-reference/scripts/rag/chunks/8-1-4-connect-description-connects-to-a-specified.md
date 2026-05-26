# 8.1.4 CONNECT Description Connects to a specified database. Syntax CONNECT {USING TransactionObject};

Table 8.6:



|Parameter|Description|
|---|---|
|Transaction|ObjectThe name of the transaction object containing the required connection information for the database to which you want to connect. This clause is required only for transaction objects other than the default (SQLCA).|



Usage



This statement must be executed before any actions (such as INSERT, UPDATE, or DELETE) can be processed using the default transaction object or the specified transaction object.



Error handling



It is good practice to test the success/failure code after executing a CONNECT statement.



Examples



- Example 1 This statement connects to the database specified in the default transaction object: CONNECT ;

- Example 2 This statement connects to the database specified in the transaction object named Emp_tran: CONNECT USING Emp_tran ;
