# Examples

This script excerpt opens EMP_DATA.TXT and writes the string New Employees at the end of the file. The variable li_FileNum stores the number of the opened file:



integer li_FileNum li_FileNum = FileOpen("C:\HR\EMP_DATA.TXT", & LineMode!, Write!, LockWrite!, Append!) FileWrite(li_FileNum, "New Employees")



The following example reads a blob from the database and writes it to a file. The SQL SELECT statement assigns the picture data to the blob Emp_Id_Pic. Then FileOpen opens a file for writing in stream mode and FileWrite writes the blob to the file. You could use the Len function to test whether the blob was too big for a single FileWrite call:



integer li_FileNum blob emp_id_pic SELECTBLOB salary_hist INTO : emp_id_pic



FROM Employee WHERE Employee.Emp_Num = 100 USING Emp_tran;



li_FileNum = FileOpen( & "C:\EMPLOYEE\EMP_PICS.BMP", & StreamMode!, Write!, Shared!, Replace!)



FileWrite(li_FileNum, emp_id_pic)



See also FileClose FileLength64 FileOpen FileRead FileReadEx FileSeek64 FileWriteEx
