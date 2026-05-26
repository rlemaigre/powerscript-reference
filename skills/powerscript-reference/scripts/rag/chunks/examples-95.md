# Examples

This example uses the default arguments and opens the file EMPLOYEE.DAT for reading. The default settings are LineMode!, Read!, LockReadWrite!, and EncodingANSI!. FileReadEx reads the file line by line and no other user is able to access the file until it is closed:



integer li_FileNum li_FileNum = FileOpen("EMPLOYEE.DAT")



This example opens the file EMPLOYEE.DAT in the DEPT directory in stream mode (StreamMode!) for write only access (Write!). Existing data is overwritten (Replace!). No other users can write to the file (LockWrite!):



integer li_FileNum li_FileNum = FileOpen("C:\DEPT\EMPLOYEE.DAT", &



StreamMode!, Write!, LockWrite!, Replace!)



This example creates a new file that uses UTF8 encoding. The file is called new.txt and is in the D:\temp directory. It is opened in text mode with write-only access, and no other user can read or write to the file:



integer li_ret string ls_file ls_file = "D:\temp\new.txt" li_ret = FileOpen(ls_file, TextMode!, Write!, &



LockReadWrite!, Replace!, EncodingUTF8!)



See also FileClose FileLength64 FileRead FileReadEx FileWrite FileWriteEx
