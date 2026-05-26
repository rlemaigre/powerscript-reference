# Examples

This statement deletes from the Employee table the row in which the cursor named Emp_cur is positioned:



DELETE FROM Employee WHERE current of Emp_curs ;



- 8.1.9 DISCONNECT Description




Executes a COMMIT for the specified transaction object and then disconnects from the specified database.
