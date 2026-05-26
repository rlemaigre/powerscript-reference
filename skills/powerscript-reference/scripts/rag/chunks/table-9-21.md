# Table 9.21:

|Event ID|Objects|
|---|---|
|None|MLSynchronization, MLSync|



- Table 9.22:



|Argument|Description|
|---|---|
|mlusername|Read-only string identifying the MobiLink user name.|
|pubnames|Read-only string identifying the publication to be synchronized. If there is more than one publication, this is a comma-separated list.|



Return Values None Usage



Use this event to add custom actions at the beginning of a synchronization. The following synchronization object events correspond to events occurring on the synchronization server (in the order displayed): BeginSync, ConnectMobiLink, BeginUpload, EndUpload, BeginDownload, EndDownload, DisconnectMobiLink, and EndSync.



See also BeginDownload BeginUpload ConnectMobiLink



- 9.9 BeginUpload Description Occurs at the beginning of the synchronization upload procedure. Event ID


- Table 9.23:




|Event ID|Objects|
|---|---|
|None|MLSynchronization, MLSync|



Arguments None Return Values None Usage



Use this event to add custom actions immediately before the transmission of the upload to the MobiLink synchronization server.



The BeginUpload event marks the beginning of the upload transaction. Applicable inserts and updates to the consolidated database are performed for all remote tables, then rows are deleted as applicable for all remote tables. After EndUpload, upload changes are committed.



See also BeginDownload



ConnectMobiLink EndUpload



- 9.10 Clicked The Clicked event has different arguments for different objects:


- Table 9.24:



|Object|See|
|---|---|
|Menus|Syntax 1|
|ListView and Toolbar controls|Syntax 2|
|Tab controls|Syntax 3|
|TreeView controls|Syntax 4|
|Window and progress bar controls|Syntax 5|
|Other controls|Syntax 6<br><br>|



For information about the DataWindow control's Clicked event, see Section 8.8, “Clicked” in DataWindow Reference.



9.10.1 Syntax 1: For menus Description Occurs when the user chooses an item on a menu. Event ID



- Table 9.25:




|Event ID|Objects|
|---|---|
|None|Menu|



Arguments None Return Values None (do not use a RETURN statement) Usage If the user highlights the menu item without choosing it, its Selected event occurs. If the user chooses a menu item that has a cascaded menu associated with it, the Clicked event occurs, and the cascaded menu is displayed. Examples



This script is for the Clicked event of the New menu item for the frame window. The wf_newsheet function is a window function. The window w_genapp_frame is part of the application template you can generate when you create a new application:



/* Create a new sheet */ w_genapp_frame.wf_newsheet( )



Selected



- 9.10.2 Syntax 2: For ListView controls Description




Occurs when the user clicks within the ListView control, either on an item or in the blank space around items.
