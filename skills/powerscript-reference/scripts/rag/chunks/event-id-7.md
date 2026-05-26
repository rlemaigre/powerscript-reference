# Event ID

- Table 9.61:



|Event ID|Objects|
|---|---|
|pbm_destructor|All objects|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



When a window is closed, each control's Destructor event destroys the control and removes it from memory. After they have been destroyed, you can no longer refer to those controls in other scripts. If you do, a runtime error occurs.



See also Constructor Close



- 9.26 DisconnectMobiLink Description




Occurs when the MobiLink synchronization server disconnects from the consolidated database server.



Event ID



- Table 9.62:




|Event ID|Objects|
|---|---|
|None|MLSynchronization, MLSync|



Arguments None Return Values None Usage



Use this event to add custom actions immediately after the remote database disconnects from the MobiLink synchronization server.



When an application forms or reforms a connection with the MobiLink synchronization server, the MobiLink synchronization server temporarily allocates one connection with the database server for the duration of that synchronization.



The following synchronization object events correspond to events occurring on the synchronization server (in the order displayed): BeginSync, ConnectMobiLink, BeginUpload, EndUpload, BeginDownload, DisconnectMobiLink, and EndSync.



See also ConnectMobiLink EndDownload EndSync EndUpload



- 9.27 DisplayMessage Description Occurs on display of an informational message from a MobiLink synchronization. Event ID



Table 9.63:



|Event ID|Objects|
|---|---|
|None|MLSynchronization, MLSync|



Arguments



Table 9.64:



|Argument|Description|
|---|---|
|infomsg|Read-only string containing the text of an informational message returned from the synchronization server.|



Return Values None Usage



The following events are triggered when different types of messages are sent by the synchronization server: DisplayMessage, ErrorMessage, FileMessage, and WarningMessage.



See also ErrorMessage FileMessage WarningMessage



- 9.28 DoubleClicked The DoubleClicked event has different arguments for different objects:


- Table 9.65:



|Object|See|
|---|---|
|ListBox, PictureListBox, ListView, and Tab controls|Syntax 1<br><br>|
|TreeView control|Syntax 2|
|Window|Syntax 3|
|Other controls|Syntax 4<br><br>|



For information about the DataWindow control's DoubleClicked event, see the Section 8.14, “DoubleClicked” in DataWindow Reference.



- 9.28.1 Syntax 1: For ListBox, PictureListBox, ListView, and Tab controls Description Occurs when the user double-clicks on the control. Event ID


- Table 9.66:



|Event ID|Objects|
|---|---|
|pbm_lbndblclk|ListBox, PictureListBox|
|pbm_lvndoubleclicked|ListView|
|pbm_tcndoubleclicked|Tab|



Arguments



- Table 9.67:




|Argument|Description|
|---|---|
|index|Integer by value. The index of the item the user double-clicked (for tabs, the index of the tab page).|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



You can use the ItemActivate event (with the OneClickActivate property set to false) instead of the DoubleClicked event for ListView controls.



In a ListBox or PictureListBox, double-clicking on an item also triggers a SelectionChanged event.
