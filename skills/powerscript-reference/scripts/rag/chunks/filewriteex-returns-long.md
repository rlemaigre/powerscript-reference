# FileWriteEx returns long

Unlike the FileWrite function that it replaces, the FileWriteEx function returns a long value.



Usage FileWriteEx can write to files with ANSI, UTF-8, UTF-16LE, and UTF-16BE encoding. FileWriteEx writes its data at the position identified by the file pointer. If the file was opened with the writemode argument set to Replace!, the file pointer is initially at the beginning of the file. After each call to FileWriteEx, the pointer is immediately after the last write. If the file was opened with the writemode argument set to Append!, the file pointer is initially at the end of the file and moves to the end of the file after each write. FileWriteEx sets the file pointer following the last character written. If the file was opened in line mode, FileWriteEx writes a carriage return (CR) and linefeed (LF) after the last character in variable and places the file pointer after the CR and LF. If the file was opened in stream or text mode, FileWriteEx writes the full contents of the string or blob or the next length bytes, whichever is shorter. The optional length parameter applies only to blob data. If the length parameter is provided when the datatype of the second parameter is string, the code will not compile. If the data is in a string and the associated file uses ANSI or UTF-8 encoding, FileWriteEx converts the string to ANSI or UTF-8 encoding before saving it to the associated file. If the file is opened in stream mode, no conversion is done. For Unicode files and files that you convert to Unicode, you must make sure that the file length value is an even number. Otherwise FileWriteEx cannot parse the entire file. If the file does not have a byte-order mark (BOM) it is created automatically. Examples



This script excerpt opens EMP_DATA.TXT and writes the string New Employees at the end of the file. The variable li_FileNum stores the number of the opened file:



integer li_FileNum li_FileNum = FileOpen("C:\HR\EMP_DATA.TXT", &



TextMode!, Write!, LockWrite!, Append!) FileWriteEx(li_FileNum, "New Employees")



The following example reads a blob from the database and writes it to a file. The SQL SELECT statement assigns the picture data to the blob Emp_Id_Pic. Then FileOpen opens a file for writing in stream mode and FileWriteEx writes the blob to the file. You could use the Len function to test whether the blob was too big for a single FileWrite call:



integer li_FileNum blob emp_id_pic SELECTBLOB salary_hist INTO : emp_id_pic



FROM Employee WHERE Employee.Emp_Num = 100 USING Emp_tran;



li_FileNum = FileOpen("C:\EMPLOYEE\EMP_PICS.BMP", &



StreamMode!, Write!, Shared!, Replace!) FileWriteEx(li_FileNum, emp_id_pic)



See also FileClose FileLength64 FileOpen



FileReadEx FileSeek64
