# Arguments

- Table 9.15:



|Argument|Description|
|---|---|
|rescanlog|Boolean indicating whether the log has already been scanned for the current synchronization.|



Return Values None Usage



Use this event to add custom actions immediately before the transaction log is scanned for upload. The following events are triggered while the upload stream is prepared, but before synchronization begins: BeginLogScan, ProgressInfo, and EndLogScan.



If this is the first time the transaction log has been scanned for this synchronization, the rescanlog value is false; otherwise it is true. The log is scanned twice when the MobiLink synchronization server and dbmlsync have different information about where scanning should begin.



See also EndLogScan ProgressIndex



- 9.7 BeginRightDrag The BeginRightDrag event has different arguments for different objects:


- Table 9.16:



|Object|See|
|---|---|
|ListView control|Syntax 1|
|TreeView control|Syntax 2<br><br>|



- 9.7.1 Syntax 1: For ListView controls Description




Occurs when the user presses the right mouse button in the ListView control and begins dragging. Event ID



- Table 9.17:




|Event ID|Objects|
|---|---|
|pbm_lvnbeginrightdrag|ListView|
