# Examples

The following example opens a file in stream mode and tests to determine whether it uses ANSI encoding. If it does, it reads data from the file into a blob and uses the String function to convert the blob to a Unicode string:



long ll_filenum integer li_bytes string ls_unicode blob lb_ansi encoding eRet



ll_filenum = FileOpen("employee.dat", StreamMode!, Read!, LockWrite!, Replace!) // test the file's encoding eRet = FileEncoding("employee.dat") if eRet = EncodingANSI! then



li_ bytes = FileReadEx(ll_filenum, lb_ansi) ls_unicode = string(lb_ansi, EncodingANSI!)



else



li_ bytes = FileReadEx(ll_filenum, ls_unicode) end if FileClose(ll_filenum)



See also Blob FileClose FileOpen FileReadEx



FileWriteEx String



- 10.147 FileExists Description Reports whether the specified file exists. Syntax FileExists ( filename )

- Table 10.179:




|Argument|Description|
|---|---|
|filename|A string whose value is the name of a file|



Return value Boolean. Returns true if the file exists, false if it does not exist. If filename is null, FileExists returns null. Usage



If filename is locked by another application, causing a sharing violation, FileExists also returns false.



Examples



This example determines if the file the user selected in the Save File window exists and, if so, asks the user if the file can be overwritten:



string ls_docname, ls_named integer li_ret boolean lb_exist



GetFileSaveName("Select File," ls_docname, & ls_named, "pbl", & "Doc Files (*.DOC),*.DOC")



lb_exist = FileExists(ls_docname) IF lb_exist THEN li_ret = MessageBox("Save", & "OK to write over" + ls_docname, &



Question!, YesNo!)



See also FileDelete



- 10.148 FileLength Description Reports the length of a file whose size does not exceed 2GB in bytes. Syntax FileLength ( filename )


- Table 10.180:




|Argument|Description|
|---|---|
|filename|A string whose value is the name of the file for which you want to know the length. If filename is not on the current application library search path, you must specify the fully qualified name.|



Return value Long. Returns the length in bytes of the file identified by filename. If the file does not exist, FileLength returns -1. If filename is null, FileLength returns null. Usage



Call FileLength before or after you call FileOpen to check the length of a file before you call FileRead. The FileRead function can read a maximum of 32,765 bytes at a time. The length returned by FileLength always includes the byte-order mark (BOM). For example, suppose the hexadecimal display of the file SomeFile.txt is FF FE 54 00 68 00 69 00 73 00, then the following statement returns 10,which includes the BOM:



ll_length = FileLength("SomeFile.txt")
