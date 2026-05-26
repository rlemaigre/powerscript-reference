# Return value Integer.

Returns 1 if it succeeds and -1 if an error occurs. If file# is null, FileClose returns null. Usage The file is saved in the encoding format in which it was opened. Examples



These statements open and then close the file EMPLOYEE.DAT. The variable li_FileNum stores the number assigned to the file when FileOpen opens the file. FileClose uses that number to close the file:



integer li_FileNum li_FileNum = FileOpen("EMPLOYEE.DAT")



. . . // Some processing FileClose(li_FileNum)



See also FileLength FileOpen FileReadEx FileWriteEx



- 10.144 FileCopy Description Copies one file to another, optionally overwriting the target file. Syntax FileCopy ( sourcefile, targetfile {, replace } )


- Table 10.176:




|Argument|Description|
|---|---|
|sourcefile|String for the name of the file you want to copy|
|targetfile|String for the name of the file you are copying to|
|replace(optional)|Boolean specifying whether to replace the target file (true) or not (false)|



Return value Integer. Returns values as follows: 1 -- Success



- -1 -- Error opening sourcefile
- -2 -- Error writing targetfile Usage




If you do not specify a fully qualified path for sourcefile or for targetfile, the function works relative to the current directory. If you do not specify the replace argument, the FileCopy function does not replace a file in the target directory that has the same name as the



name you specify in the targetfile argument (This is equivalent to setting the replace value to false).
