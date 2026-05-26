# 9.85 ProcessingFile Description

Occurs during the file compression or extraction process. This event can be used to display the full path name of the file that is being compressed or decompressed.



If one of the files in the compressed archive failed to be extracted, the Error event instead of the ProcessingFile event will be triggered.



- Table 9.190:



|Event ID|Objects|
|---|---|
|None|CompressorObject and ExtractorObject|



Arguments



- Table 9.191:



|Argument|Description|
|---|---|
|FileFullPath|A readonly string whose value is the full path name of the file that is being compressed or decompressed.|



Return Values None See also Error Finished SizeCompleted Start



- 9.86 ProgressIndex Description Occurs periodically during synchronization after updates to a synchronization progress bar. Event ID


- Table 9.192:



|Event ID|Objects|
|---|---|
|None|MLSynchronization, MLSync|



Arguments



- Table 9.193:




|Argument|Description|
|---|---|
|progress_idx|Long value representing the progress of the synchronization.|
|progress_max|Long value indicating the progress limit of the synchronization.|



Return Values None Usage Use this event to update a progress indicator such as a progress bar. A progress_max value of 0 indicates the maximum value has not changed since the last time the event was fired.



BeginLogScan EndLogScan



- 9.87 PropertyChanged Description Occurs after the OLE server changes the value of a property of the OLE object. Event ID



Table 9.194:



|Event ID|Objects|
|---|---|
|None|OLE|



Arguments



Table 9.195:



|Argument|Description|
|---|---|
|propertyname|The name of the property whose value changed. If propertyname is an empty string, a more general change occurred, such as changes to more than one property.|



Return Values None (do not use a RETURN statement) Usage



Property change notifications are not supported by all OLE servers. The PropertyRequestEdit and PropertyChanged events occur only when the server supports these notifications.



Property notifications are not sent when the object is being created or loaded. Otherwise, notifications are sent for all bindable properties, no matter how the property is being changed. The PropertyChanged event occurs after the property's value has changed. You can obtain the new value through the automation interface. The change can no longer be canceled. If you want to cancel a change, write a script for the PropertyRequestEdit event. See also DataChange PropertyRequestEdit Rename ViewChange



- 9.88 PropertyRequestEdit Description




Occurs when the OLE server is about to change the value of a property of the object in the OLE control.
