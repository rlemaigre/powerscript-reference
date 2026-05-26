# See also Start

Timer



- 9.117 ToolbarMoved Description Occurs in an MDI frame window when the user moves any FrameBar or SheetBar. Event ID



Table 9.259:



|Event ID|Objects|
|---|---|
|pbm_tbnmoved|Window|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement):



- 0 -- Continue processing Usage The event is not triggered for sheet windows.




To get information about the toolbars' positions, call the GetToolbar and GetToolbarPos functions.



This event occurs when you change a toolbar's position with SetToolbarPos.



- 9.118 UploadAck Description Occurs on completion of upload processing. Event ID


- Table 9.260:



|Event ID|Objects|
|---|---|
|None|MLSynchronization, MLSync|



Arguments



- Table 9.261:




|Argument|Description|
|---|---|
|uploadack_status|Long indicating the status returned by MobiLink to the remote after the upload stream is processed. Values are:<br><br>• 0 for StatCommitted|



|Argument|Description|
|---|---|
| |• 1 for StatFailed<br>• 248 for StatRetry See the Usage note for the meaning of these values.<br>|



Return Values None Usage



Use this event to add custom actions after dbmlsync has received acknowledgement of the upload stream from the MobiLink synchronization server.



Values for the uploadack_status argument can be:



- • StatCommitted



Indicates that the upload stream was received by the MobiLink synchronization server and committed.



- • StatRetry



Indicates that the MobiLink synchronization server and the remote database had different values for the log offset from which the upload stream should start. The upload stream was not committed by the MobiLink synchronization server. The component attempts to send another upload stream starting from the MobiLink synchronization server's log offset.



- • StatFailed Indicates that the MobiLink synchronization server did not commit the upload stream.




See also BeginUpload ConnectMobiLink EndUpload WaitForUploadAck
