# File security

If any security is set for the file (for example, if you are sharing the file on a network), you must call FileLength before FileOpen or after FileClose. Otherwise, you get a sharing violation.



The FileLength function cannot return the length of files whose size exceeds 2GB. Use FileLength64 to find the length of larger files.



Examples This statement returns the length of the file EMPLOYEE.DAT in the current directory:



FileLength("EMPLOYEE.DAT")



These statements determine the length of the EMP.TXT file in the EAST directory and open the file:



long LengthA integer li_FileNum LengthA = FileLength("C:\EAST\EMP.TXT") li_FileNum = FileOpen("C:\EAST\EMP.TXT", &



TextMode!, Read!, LockReadWrite!)



The examples for FileRead illustrate reading files of different lengths. See also FileClose FileLength64 FileOpen FileReadEx FileWriteEx



- 10.149 FileLength64 Description Reports the length of a file of any size in bytes. Syntax FileLength64 ( filename )


- Table 10.181:




|Argument|Description|
|---|---|
|filename|A string whose value is the name of the file for which you want to know the length. If filename is not on the current application library search path, you must specify the fully qualified name.|



Return value Longlong. Returns the length in bytes of the file identified by filename. If the file does not exist, FileLength64 returns -1. If filename is null, FileLength64 returns null. Usage



Call FileLength64 before or after you call FileOpen to check the length of a file before you call FileRead. The FileRead function can read a maximum of 32,765 bytes at a time. Use the FileReadEx function to read longer files.



The length returned by FileLength64 always includes the byte-order mark (BOM). For example, suppose the hexadecimal display of the file SomeFile.txt is FF FE 54 00 68 00 69



- 00 73 00, then the following statement returns 10,which includes the BOM: ll_length = FileLength64("SomeFile.txt")
