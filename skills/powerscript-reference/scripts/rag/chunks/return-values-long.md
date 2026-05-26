# Return Values Long.

Return code choices (specify in a RETURN statement): 0 -- Continue processing Examples



This example for the DeleteItem event displays a message with the number of the deleted item:



MessageBox("Message", "Item " + String(index) &



+ " deleted.")



See also DeleteAllItems InsertItem



- 9.24.2 Syntax 2: For TreeView controls Description Occurs when an item is deleted. Event ID


- Table 9.59:



|Event ID|Objects|
|---|---|
|pbm_tvndeleteitem|TreeView|



Arguments



- Table 9.60:




|Argument|Description|
|---|---|
|handle|Long by value (the handle of the deleted item)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Examples This example displays the name of the deleted item in a message:



TreeViewItem ll_tvi This.GetItem(handle, ll_tvi) MessageBox("Message", String(ll_tvi.Label) &



+ " has been deleted.")
