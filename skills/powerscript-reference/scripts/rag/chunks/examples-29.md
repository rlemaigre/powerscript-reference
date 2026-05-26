# Examples

This example uses the BeginLabelEdit event to display the name of the ListView item being edited:



ListViewItem lvi This.GetItem(index lvi) sle_info.text = "Editing " + string(lvi.label)



See also EndLabelEdit



- 9.5.2 Syntax 2: For TreeView controls Description Occurs when the user clicks on the label of an item after selecting the item. Event ID


- Table 9.12:



|Event ID|Objects|
|---|---|
|pbm_tvnbeginlabeledit|TreeView|



Arguments



- Table 9.13:



|Argument|Description|
|---|---|
|handle|Long by value (the handle of the selected TreeView item)|



Return Values Long. Return code choices (specify in a RETURN statement):



- 0 -- Allow editing of the label
- 1 -- Prevent editing of the label Usage




When editing is allowed, a box appears around the label with the text highlighted. The user can replace or change the existing text.



Examples



This example uses the BeginLabelEdit to display the name of the TreeView item being edited in a SingleLineEdit:



TreeViewItem tvi This.GetItem(index, tvi) sle_info.text = "Editing " + string(tvi.label)



See also EndLabelEdit



- 9.6 BeginLogScan Description Occurs before dbmlsync scans the transaction log to assemble the upload data stream. Event ID


- Table 9.14:




|Event ID|Objects|
|---|---|
|None|MLSync|
