# Table 8.7:

|Parameter|Description|
|---|---|
|CursorName|Any valid PowerBuilder name.|



|Parameter|Description|
|---|---|
|SelectStatement|Any valid SELECT statement.|
|TransactionObjec|tThe name of the transaction object for which you want to declare the cursor. This clause is required only for transaction objects other than the default (SQLCA).|



Usage DECLARE Cursor is a nonexecutable command and is analogous to declaring a variable. To declare a local cursor, open the script in the Script view and select Paste SQL from the PainterBar or the Edit>Paste Special menu. To declare a global, instance, or shared cursor, select Declare from the first drop-down list in the Script view and Global Variables, Instance Variables, or Shared Variables from the second drop-down list, then select Paste SQL. For information about global, instance, shared, and local scope, see Where to declare variables. Examples



This statement declares the cursor called Emp_cur for the database specified in the default transaction object. It also references the Sal_var variable, which must be set to an appropriate value before you execute the OPEN Emp_cur command:



DECLARE Emp_cur CURSOR FOR SELECT employee.emp_number, employee.emp_name FROM employee WHERE employee.emp_salary > :Sal_var ;



- 8.1.6 DECLARE Procedure Description Declares a procedure for the specified transaction object.




DBMS-specific Not all DBMSs support stored procedures.
