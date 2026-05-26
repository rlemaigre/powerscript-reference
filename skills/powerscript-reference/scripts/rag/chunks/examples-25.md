# Examples

The following statements select the blob column Emp_pic from a row in the Employee table and set the picture p_1 to the bitmap in Emp_id_pic (the transaction object Emp_tran is used):



Blob Emp_id_pic SELECTBLOB Emp_pic INTO :Emp_id_pic FROM Employee WHERE Employee.Emp_Num = 100 USING Emp_tran ;



p_1.SetPicture(Emp_id_pic)



The blob Emp_id_pic requires a colon to indicate that it is a host (PowerScript) variable when you use it in the INTO clause of the SELECTBLOB statement.



- 8.1.17 UPDATE Description Updates the rows specified in RestOfUpdateStatement. Syntax




UPDATE TableName RestOfUpdateStatement {USING TransactionObject} ;
