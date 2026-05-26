# Examples

This example reads the file EMP_DATA.TXT if it is short enough to be read with one call to FileRead:



integer li_FileNum string ls_Emp_Input long ll_FLength



ll_FLength = FileLength64("C:\HR\EMP_DATA.TXT") li_FileNum = FileOpen("C:\HR\EMP_DATA.TXT", &



LineMode!) IF ll_FLength < 32767 THEN



FileRead(li_FileNum, ls_Emp_Input) END IF



This example reads the file EMP_PIC1.BMP and stores the data in the blob Emp_Id_Pic. The number of bytes read is stored in li_bytes:



integer li_fnum, li_bytes blob Emp_Id_Pic



li_fnum = FileOpen("C:\HR\EMP_PIC1.BMP", & StreamMode!) li_bytes = FileRead(li_fnum, Emp_Id_Pic)



See also FileClose FileLength64 FileOpen FileReadEx FileSeek64 FileWriteEx
