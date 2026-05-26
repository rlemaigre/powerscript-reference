# Examples

These statements update the blob column emp_pic in the Employee table, where emp_num is 100:



int fh blob Emp_id_pic fh = FileOpen("c:\emp_100.bmp", StreamMode!) IF fh <> -1 THEN



FileRead(fh, emp_id_pic) FileClose(fh) UPDATEBLOB Employee SET emp_pic = :Emp_id_pic WHERE Emp_num = 100 USING Emp_tran ;



END IF IF Emptran.SQLNRows > 0 THEN



COMMIT USING Emp_tran ; END IF



The blob Emp_id_pic requires a colon to indicate it is a host (PowerScript) variable in the UPDATEBLOB statement.



- 8.1.19 UPDATE Where Current of Cursor Description Updates the row in which the cursor is positioned using the values in SetStatement.
