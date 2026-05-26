# File security

If any security is set for the file (for example, if you are sharing the file on a network), you must call FileLength64 before FileOpen or after FileClose. Otherwise, you get a sharing violation.



Examples This statement returns the length of the file EMPLOYEE.DAT in the current directory:



FileLength64("EMPLOYEE.DAT")



These statements determine the length of the EMP.TXT file in the EAST directory and open the file:



long LengthA integer li_FileNum LengthA = FileLength64("C:\EAST\EMP.TXT") li_FileNum = FileOpen("C:\EAST\EMP.TXT", &



LineMode!, Read!, LockReadWrite!)



The examples for FileRead illustrate reading files of different lengths. See also



FileClose FileLength FileOpen FileReadEx FileWriteEx



- 10.150 FileMove Description Moves a file. Syntax FileMove ( sourcefile, targetfile )

- Table 10.182:




|Argument|Description|
|---|---|
|sourcefile|String for the name of the file you want to move|
|targetfile|String for the name of the location you are moving the file|



Return value Integer. Returns values as follows:



- 1 -- Success


- -1 -- Error opening sourcefile
- -2 -- Error writing targetfile Usage




You cannot write to a target file if a file with the same name already exists in the target directory. If you want to copy over a target file, you can use FileCopy and set the replace argument to true.



Examples



This example moves a file from the current directory to a different directory and saves the return value in the li_FileNum variable:



integer li_FileNum li_FileNum = FileMove ("june.csv", &



"H:/project/june2000.csv" )



See also FileCopy GetCurrentDirectory



- 10.151 FileOpen Description




Opens the specified file for reading or writing and assigns it a unique integer file number. You use this integer to identify the file when you read, write, or close the file. The optional arguments filemode, fileaccess, filelock, and writemode determine the mode in which the file is opened.
