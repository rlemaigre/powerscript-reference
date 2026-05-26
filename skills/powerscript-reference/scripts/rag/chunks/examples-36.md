# Examples

This example displays information about the error that occurred and allows the script to continue:



MessageBox("Error Number " + string(errornumber)&



+ " Occurred", "Errortext: " + String(errortext)) action = ExceptionIgnore!



See also DBError in Section 8.12, “DBError” in DataWindow Reference ExternalException SystemError



- 9.39.2 Syntax 2: for CompressorObject objects Description Occurs when an error is found in the file compression operation. Event ID


- Table 9.105:



|Event ID|Objects|
|---|---|
|None|CompressorObject|



Arguments



- Table 9.106:




|Argument|Description|
|---|---|
|ErrorNumber|Unsigned integer by value (PowerBuilder's error number) 1 -- Success<br><br>-1 -- A general error occurred. If the CompressorObject object is used in asynchronous mode, this function will return the general error.<br>-2 -- The password entered is illegal.<br>-3 -- The operation is not supported for the source file format.<br>-4 -- The task thread is aborted.<br>-5 -- A task thread is currently running.<br>-6 -- The folder to be compressed does not exist.<br>-7 -- The folder to be compressed is empty.<br>-8 -- The compression format does not support multi-file compression.<br>|



|Argument|Description|
|---|---|
| |-9 -- Failed to read file from the folder for compression.<br>-10 -- The target path does not exist.<br>-11 -- More than one source file has the same file name.<br>-12 -- Invalid compressed file name or no compressed file name is specified in the "dest" argument.<br>-13 -- Failed to compress.<br>|
|ErrorText|String, read-only (PowerBuilder's error message)|



Return Values None See also Finished ProcessingFile SizeCompleted Start



- 9.39.3 Syntax 3: for ExtractorObject objects Description Occurs when an error is found in the archive extraction operation. Event ID


- Table 9.107:



|Event ID|Objects|
|---|---|
|None|ExtractorObject|



Arguments



- Table 9.108:




|Argument|Description|
|---|---|
|ErrorNumber|Unsigned integer by value (PowerBuilder's error number) 1 -- Success<br><br>-1 -- A general error occurred. If the ExtractorObject object is used in asynchronous mode, this function will return the general error.<br>-2 -- The password entered is illegal.<br>-3 -- The operation is not supported for the source file format.<br>-4 -- The task thread is aborted.<br>-5 -- A task thread is currently running.<br>-6 -- No password is entered. You must enter the password.<br>|



|Argument|Description|
|---|---|
| |-7 -- The password is incorrect.<br>-8 -- Failed to get new memory when saving the decompressed file.<br>-9 -- Failed to read the compressed file.<br>-10 -- Unrecognized format or the encrypted file name option is used when compressing the document.<br>-11 -- Access denied when extracting the archive.<br>-12 -- The compressed file does not exist.<br>-13 -- The directory where the decompressed file will be saved does not exist.<br>-14 -- Failed to extract the compressed file.<br>|
|ErrorText|String, read-only (PowerBuilder's error message)|



Return Values None See also Finished ProcessingFile SizeCompleted Start



- 9.40 ErrorMessage Description Occurs on display of an error message from a MobiLink synchronization. Event ID


- Table 9.109:



|Event ID|Objects|
|---|---|
|None|MLSynchronization, MLSync|



Arguments



- Table 9.110:




|Argument|Description|
|---|---|
|errmsg|Read-only string containing the text of the error message returned from the synchronization server.|
