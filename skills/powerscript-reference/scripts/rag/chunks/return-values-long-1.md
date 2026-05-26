# Return Values Long.

Return code choices (specified in a RETURN statement): 0 -- Continue processing 1 -- Saving of document is canceled Usage The SaveDocument function can trigger the FileExists event. Examples



This script for FileExists checks a flag to see if the user is performing a save (which will automatically overwrite the opened file) or wants to rename the file using Save As. For the Save As case, the script asks the user to confirm overwriting the file:



integer li_answer // If user asked to Save to same file, // do not prompt for overwriting IF ib_saveas = FALSE THEN RETURN 0 li_answer = MessageBox("FileExists", &



filename + " already exists. Overwrite?", & Exclamation!, YesNo!) MessageBox("Filename arg", filename)



// Returning a non-zero value cancels save IF li_answer = 2 THEN RETURN 1



- 9.43 FileMessage Description Occurs on display of a detailed information message from a MobiLink synchronization. Event ID


- Table 9.115:



|Event ID|Objects|
|---|---|
|None|MLSynchronization, MLSync|



Arguments



- Table 9.116:




|Argument|Description|
|---|---|
|filemsg|Read-only string containing the text of the message returned from the synchronization server.|



Return Values None Usage Use this event to receive information logged by dbmlsync. The following events can be triggered when different types of messages are sent by the synchronization server: DisplayMessage, ErrorMessage, FileMessage, and WarningMessage.



See also DisplayMessage ErrorMessage WarningMessage



- 9.44 Finished Description Occurs when the file compression or extraction is completed. Event ID



Table 9.117:



|Event ID|Objects|
|---|---|
|None|CompressorObject and ExtractorObject|



Arguments



Table 9.118:



|Argument|Description|
|---|---|
|Result|A boolean value specifying the file compression or decompression result: True -- Success False -- Failed|



Return Values None See also Error ProcessingFile SizeCompleted Start



- 9.45 Gesture Description




Occurs when an application gesture recognized by the control is completed. A gesture is a stroke or series of strokes that is recognized by the application as indicating an action. This event can only be triggered on a Tablet PC.
