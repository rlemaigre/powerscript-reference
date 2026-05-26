# See also

Close Open Show



- 9.3 BeginDownload Description Occurs at the beginning of a download procedure Event ID


- Table 9.3:




|Event ID|Objects|
|---|---|
|None|MLSynchronization, MLSync|



Arguments None Return Values None Usage



Use this event to add custom actions at the beginning of the download stage of a synchronization.



When the MobiLink synchronization server receives data, it updates the consolidated database, then builds a download stream that contains all relevant changes and sends it back to the remote site. At the end of each successful synchronization, the consolidated and remote databases are consistent. Either a whole transaction is synchronized, or none of it is synchronized. This ensures transactional integrity at each database.



The BeginDownload event marks the beginning of the download transaction. For a complete list of connection and synchronization events, and examples of their use, see the MobiLink documentation.



See also BeginSync BeginUpload ConnectMobiLink



- 9.4 BeginDrag The BeginDrag event has different arguments for different objects:


- Table 9.4:



|Object|See|
|---|---|
|ListView control|Syntax 1|
|TreeView control|Syntax 2<br><br>|



- 9.4.1 Syntax 1: For ListView controls Description




Occurs when the user presses the left mouse button in the ListView control and begins dragging. Event ID



- Table 9.5:



|Event ID|Objects|
|---|---|
|pbm_lvnbegindrag|ListView|



Arguments



- Table 9.6:




|Argument|Description|
|---|---|
|index|Integer by value (the index of the ListView item being dragged)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



BeginDrag and BeginRightDrag events occur when the user presses the mouse button and drags, whether or not dragging is enabled. To enable dragging, you can:



- • Set the DragAuto property to true. If the ListView's DragAuto property is true, a drag operation begins automatically when the user clicks.
- • Call the Drag function. If DragAuto is false, then in the BeginDrag event script, the programmer can call the Drag function to begin the drag operation.




Dragging a ListView item onto another control causes its standard drag events (DragDrop, DragEnter, DragLeave, and DragWithin) to occur. The standard drag events occur for ListView when another control is dragged within the borders of the ListView.
