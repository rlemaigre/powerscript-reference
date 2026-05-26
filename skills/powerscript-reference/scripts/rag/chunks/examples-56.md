# Examples

In this embedded SQL cursor example, the SQLPreview event is invoked just before the OPEN Emp_curs; statement is executed:



DECLARE Emp_cur CURSOR FOR SELECT employee.emp_number,



employee.emp_name FROM employee WHERE employee.emp_salary > :Sal_var ; OPEN Emp_curs ;



In this dynamic SQL example, the SQLPreview event is invoked just before the EXECUTE DYNAMIC my_proc DESCRIPTOR SQLDA statement is executed:



PREPARE SQLSA FROM "execute @rc = myproc @parm1=?,



@parm2=? OUTPUT "; DESCRIBE SQLSA INTO SQLDA ; DECLARE my_proc DYNAMIC PROCEDURE FOR SQLSA ; SetDynamicParm(SQLDA, 1, var1) SetDynamicParm(SQLDA, 2, var2) EXECUTE DYNAMIC my_proc DESCRIPTOR SQLDA ;



See also DBError SQLPreview in Section 8.53, “SQLPreview” in DataWindow Reference
