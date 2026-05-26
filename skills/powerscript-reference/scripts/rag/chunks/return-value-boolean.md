# Return value Boolean.

Returns true if the component is executing as part of a transaction and false if it is not. Usage



Component methods can call IsInTransaction to determine whether they are executing within a transaction.



Methods in components that are declared to be transactional always execute as part of a transaction.



Methods in components that have a transaction type of Supports Transaction may or may not be running in the context of an EAServer transaction, depending on whether the component is instantiated directly by a base client or by another component. In components that have this transaction type, you can use IsInTransaction to determine whether the component is running in a transaction.



The IsInTransaction function corresponds to the isInTransaction transaction primitive in EAServer. Examples The following example shows the use of the IsInTransaction function:



TransactionServer ts Integer li_rc long ll_rv



li_rc = this.GetContextService("TransactionServer", & ts) IF ts.IsInTransaction = TRUE THEN



// execute logic based on the transaction context END IF



See also EnableCommit IsTransactionAborted (obsolete) Lookup (obsolete) SetAbort SetComplete Which



- 10.353 IsNull Description Reports whether the value of a variable or expression is null. Syntax IsNull ( any )


- Table 10.435:




|Argument|Description|
|---|---|
|any|A variable or expression that you want to test to determine whether its value is null|



Return value Boolean. Returns true if any is null and false if it is not. Usage Use IsNull to test whether a user-entered value or a value retrieved from the database is null.



If one or more columns in a DataWindow are required columns, that is, they must contain data, you do not want to update the database if the columns have null values. You can use FindRequired to find rows in which those columns have null values, instead of using IsNull to evaluate each row and column.



Setting a variable to null



To set a variable to null, use the SetNull function. In standard PowerBuilder applications, if a variable is not set to null explicitly by calling the SetNull function, calling the IsNull function against the variable returns false.



If the variable is of a reference type (a type derived from the PowerObject base class), IsNull returns true if the variable has not been initialized by assigning an instantiated object to it. In the following example, IsNull returns false in a standard PowerBuilder application:



dataStore ds boolean b



b = IsNull(ds) MessageBox("IsNull", string(b))



If the variable is explicitly set to null, IsNull returns true in standard PowerBuilder applications:



SetNull(ds)



- b = IsNull(ds) MessageBox("IsNull", string(b)) Examples These statements set lb_test to true:




integer a, b boolean lb_test



SetNull(b) lb_test = IsNull(a + b)
