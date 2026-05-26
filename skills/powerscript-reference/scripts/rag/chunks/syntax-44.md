# Syntax

FileSeek ( file#, position, origin )



- Table 10.187:




|Argument|Description|
|---|---|
|file#|The integer assigned to the file when it was opened.|
|position|A long whose value is the new position of the file pointer relative to the position specified in origin, in bytes.|
|origin|The value of the SeekType enumerated datatype specifying where you want to start the seek. Values are:<br><br>• FromBeginning! -- (Default) At the beginning of the file<br>• FromCurrent! -- At the current position<br>• FromEnd! -- At the end of the file<br>|



Return value Long. Returns the file position after the seek operation has been performed. If any argument's value is null, FileSeek returns null. Usage



Use FileSeek to move within a binary file that you have opened in stream mode. FileSeek positions the file pointer so that the next FileReadEx or FileWriteEx occurs at that position within the file.



If origin is set to FromBeginning!, and the file is not opened in stream mode, the byte-order mark is ignored automatically. For example, suppose the file's hexadecimal display is FF FE 54 00 68 00 69 00 73 00, the following example illustrates the behavior:



long ll_pos // after the following statement, the file pointer is // at 68, not 54, and ll_pos = 2, not 4 ll_pos = FileSeek( filenum, 2, FromBeginning!) // ll_pos = 2, not 4 ll_pos = FileSeek( filenum, 0, FromCurrent!) // ll_pos = 2, not 4 ll_pos = FileSeek( filenum, -6, FromEnd!)



The FileSeek function cannot handle files whose size exceeds 2GB. Use FileSeek64 to move the file pointer in larger files.



Examples This example positions the file pointer 14 bytes from the end of the file:



integer li_FileNum li_FileNum = FileOpen("emp_data") FileSeek(li_FileNum, -14, FromEnd!)



This example moves the file pointer from its current position 14 bytes toward the end of the file. In this case, if no processing has occurred after FileOpen to affect the file pointer, specifying FromCurrent! is the same as specifying FromBeginning!:



integer li_FileNum li_FileNum = FileOpen("emp_data") FileSeek(li_FileNum, 14, FromCurrent!)



See also FileReadEx FileSeek64 FileWriteEx
