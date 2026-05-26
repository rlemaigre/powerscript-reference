# Table 8.21:

|Parameter|Description|
|---|---|
|TableName|The name of the table in which you want to update the row|
|SetStatement|The word SET followed by a commaseparated list of the form ColumnName = value|
|CursorName|The name of the cursor in which the table is referenced|



Usage



The USING Transaction Object clause is not allowed with UPDATE Where Current of Cursor; the transaction object was specified in the statement that declared the cursor.



Examples



This statement updates the row in the Employee table in which the cursor called Emp_curs is positioned:



UPDATE Employee SET salary = 17800 WHERE CURRENT of Emp_curs ;



- 8.2 Using dynamic SQL General information




Because database applications usually perform a specific activity, you usually know the complete SQL statement when you write and compile the script. When PowerBuilder does not support the statement in embedded SQL (as with a DDL statement) or when the parameters or the format of the statements are unknown at compile time, the application must build the SQL statements at runtime. This is called dynamic SQL. The parameters used in dynamic SQL statements can change each time the program is executed.



Using SQL Anywhere



For information about using dynamic SQL with SQL Anywhere, see the SQL Anywhere documentation.



Four formats



PowerBuilder has four dynamic SQL formats. Each format handles one of the following situations at compile time:
