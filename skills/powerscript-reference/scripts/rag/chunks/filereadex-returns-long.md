# FileReadEx returns long

Unlike the FileRead function that it replaces, the FileReadEx function returns a long value.



Usage FileReadEx can read files with ANSI, UTF-8, UTF-16LE, and UTF-16BE encoding. If the file is opened in line mode, FileReadEx reads a line of the file (that is, until it encounters a CR, LF, or EOF). It stores the contents of the line in the specified variable, skips the line-end characters, and positions the file pointer at the beginning of the next line.



The optional length parameter applies only to blob data. If the length parameter is provided when the datatype of the second parameter is string, the code will not compile.



If the file was opened in stream or text mode, FileReadEx reads to the end of the file or the next length bytes, whichever is shorter. FileReadEx begins reading at the file pointer, which is positioned at the beginning of the file when the file is opened for reading. If the file is longer than length bytes, FileReadEx automatically positions the pointer after each read operation so that it is ready to read the next chunk of data.



An end-of-file mark is a null character (ASCII value 0). Therefore, if the file being read contains null characters, FileReadEx stops reading at the first null character, interpreting it as the end of the file. For Unicode files and files that you convert to Unicode, you must make sure that the file length value is an even number. Otherwise FileReadEx cannot parse the entire file.



If the file is an ANSI or UTF-8 file and is read into a string, FileReadEx converts the text to Unicode before saving it in the string variable. The BOM is not written to the string.



If the file is an ANSI or UTF-8 file and is read into a blob, FileReadEx saves the contents of the file with no conversion. The BOM is not written to the blob in text mode, but it is written to the blob in stream mode.



If the file is in Unicode, no conversion is required. Examples



This example reads the file EMP_DATA.TXT into a string in text mode. If the file is not in Unicode format, its contents, apart from the BOM, are converted to Unicode and written to the string:



integer li_FileNum string ls_Emp_Input li_FileNum = FileOpen("C:\HR\EMP_DATA.TXT", &



TextMode!) FileReadEx(li_FileNum, ls_Emp_Input)



This example reads the file EMP_PIC1.BMP and stores the data in the blob Emp_Id_Pic. The number of bytes read is stored in ll_bytes:



integer li_fnum long ll_bytes blob Emp_Id_Pic



li_fnum = FileOpen("C:\HR\EMP_PIC1.BMP", & StreamMode!) ll_bytes = FileReadEx(li_fnum, Emp_Id_Pic)



See also FileClose FileLength64 FileOpen FileRead FileSeek64 FileWriteEx
