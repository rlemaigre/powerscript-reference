# Examples

The following statements select data in the Emp_LName and Emp_FName columns of a row in the Employee table and put the data into the SingleLineEdits sle_LName and sle_FName (the transaction object Emp_tran is used):



int Emp_num string Emp_lname, Emp_fname Emp_num = Integer(sle_Emp_Num.Text)



SELECT employee.Emp_LName, employee.Emp_FName INTO :Emp_lname, :Emp_fname FROM Employee WHERE Employee.Emp_nbr = :Emp_num USING Emp_tran ;



IF Emp_tran.SQLCode = 100 THEN MessageBox("Employee Inquiry", & "Employee Not Found")



ELSEIF Emp_tran.SQLCode > 0 then MessageBox("Database Error", & Emp_tran.SQLErrText, Exclamation!)



END IF sle_Lname.text = Emp_lname sle_Fname.text = Emp_fname



- 8.1.16 SELECTBLOB Description Selects a single blob column in a row in the table specified in RestOfSelectStatement. Syntax SELECTBLOB RestOfSelectStatement {USING TransactionObject} ;




|Parameter|Description|
|---|---|
|RestOfSelectState|Thementrest of the SELECT statement (the INTO, FROM, and WHERE clauses).|
|TransactionObjec|tThe name of the transaction object that identifies the database containing the table. This clause is required only for transaction objects other than the default (SQLCA).|



Usage An error occurs if the SELECTBLOB statement returns more than one row.
