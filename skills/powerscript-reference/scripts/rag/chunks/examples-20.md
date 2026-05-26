# Examples

- Example 1



This statement deletes rows from the Employee table in the database specified in the default transaction object where Emp_num is less than 100:



DELETE FROM Employee WHERE Emp_num < 100 ;



- Example 2




These statements delete rows from the Employee table in the database named in the transaction object named Emp_tran where Emp_num is equal to the value entered in the SingleLineEdit sle_number:



int Emp_num Emp_num = Integer(sle_number.Text) DELETE FROM Employee



WHERE Employee.Emp_num = :Emp_num ;



The integer Emp_num requires a colon in front of it to indicate it is a variable when it is used in a WHERE clause.
