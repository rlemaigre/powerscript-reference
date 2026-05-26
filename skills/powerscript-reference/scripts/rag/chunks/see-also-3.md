# See also

BeginLabelEdit



- 9.35.2 Syntax 2: For TreeView controls Description Occurs when the user finishes editing an item's label. Event ID


- Table 9.97:



|Event ID|Objects|
|---|---|
|pbm_tvnendlabeledit|TreeView|



Arguments



- Table 9.98:




|Argument|Description|
|---|---|
|handle|Integer. The index of the TreeView item for which you have edited the label.|
|newtext|The string that represents the new label for the TreeView item.|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Allow the new text to become the item's label 1 -- Prevent the new text from becoming the item's label Usage The user triggers this event by pressing Enter or Tab after editing the text. Examples This example displays the old label and the new label in a SingleLineEdit:



TreeViewItem tvi This.GetItem(handle, tvi) sle_info.Text = "Finished editing " &



+ String(tvi.Label) &

+ ". Item changed to " &

+ String(newtext)



See also BeginLabelEdit



- 9.36 EndLogScan Description Occurs after the scan of the transaction log completes for upload.
