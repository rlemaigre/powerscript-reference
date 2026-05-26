# Examples

- Example 1



This statement fetches data retrieved by the SELECT clause in the declaration of the cursor named Emp_cur and puts it into Emp_num and Emp_name:



int Emp_num string Emp_name FETCH Emp_cur INTO :Emp_num, :Emp_name ;



- Example 2




If sle_emp_num and sle_emp_name are SingleLineEdits, these statements fetch from the cursor named Emp_cur, store the data in Emp_num and Emp_name, and then convert Emp_num from an integer to a string, and put them in sle_emp_num and sle_emp_name:



int Emp_num string Emp_name FETCH Emp_cur INTO :emp_num, :emp_name ; sle_emp_num.Text = string(Emp_num) sle_emp_name.Text = Emp_name



- 8.1.12 INSERT Description Inserts one or more new rows into the table specified in RestOfInsertStatement. Syntax




INSERT RestOfInsertStatement {USING TransactionObject} ;
