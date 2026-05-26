# Error handling

It is good practice to test the success/failure code after executing an INSERT statement.



Examples Example 1 These statements insert a row with the values in EmpNbr and EmpName into the Emp_nbr and Emp_name columns of the Employee table identified in the default transaction object:



int EmpNbr string EmpName



... INSERT INTO Employee (employee.Emp_nbr, employee.Emp_name)



VALUES (:EmpNbr, :EmpName) ;



Example 2 These statements insert a row with the values entered in the SingleLineEdits sle_number and sle_name into the Emp_nbr and Emp_name columns of the Employee table in the transaction object named Emp_tran:



int EmpNbr string EmpName EmpNbr = Integer(sle_number.Text) EmpName = sle_name.Text INSERT INTO Employee (employee.Emp_nbr, employee.Emp_name)



VALUES (:EmpNbr, :EmpName) USING Emp_tran ;



- 8.1.13 OPEN Cursor Description Causes the SELECT specified when the cursor was declared to be executed. Syntax OPEN CursorName ;


- Table 8.15:




|Parameter|Description|
|---|---|
|CursorName|The name of the cursor you want to open|
