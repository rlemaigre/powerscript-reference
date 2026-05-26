# Event ID

- Table 9.99:



|Event ID|Objects|
|---|---|
|None|MLSync|



Arguments None Return Values None Usage



Use this event to add custom actions immediately after the transaction log is scanned for upload.



The following events are triggered while the upload stream is prepared, but before synchronization begins: BeginLogScan, ProgressInfo, and EndLogScan.



See also BeginLogScan ProgressIndex



- 9.37 EndSync Description Occurs at the end of synchronization. Event ID


- Table 9.100:



|Event ID|Objects|
|---|---|
|None|MLSynchronization, MLSync|



Arguments



- Table 9.101:




|Argument|Description|
|---|---|
|rc|Long datatype value that indicates whether a synchronization error occurred.|
|restart|Boolean value passed by reference that, if true, causes dbmlsync to restart the synchronization.|



Return Values None Usage Use this event to add custom actions when a synchronization is complete.



An rc value of 0 indicates a successful synchronization. When the rc value is anything other than 0, an error has occurred. If the restart value changes to true, dbmlsync restarts the synchronization.



See also BeginSync DisconnectMobiLink EndDownload EndUpload



- 9.38 EndUpload Description Occurs after transmission of the upload to the synchronization server. Event ID



Table 9.102:



|Event ID|Objects|
|---|---|
|None|MLSynchronization, MLSync|



Arguments None Return Values None Usage



Use this event to add custom actions immediately after transmission of the upload stream from dbmlsync to the MobiLink synchronization server.



The BeginUpload event marks the beginning of the upload transaction. Applicable inserts and updates to the consolidated database are performed for all remote tables, then rows are deleted as applicable for all remote tables. After EndUpload, upload changes are committed.



See also BeginUpload DisconnectMobiLink EndDownload EndSync



- 9.39 Error
