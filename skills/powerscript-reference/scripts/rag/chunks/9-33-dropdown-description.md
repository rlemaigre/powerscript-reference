# 9.33 DropDown Description

Occurs when the user has clicked the drop-down arrow in a DatePicker control just before the drop-down calendar displays.



- Table 9.91:



|Event ID|Objects|
|---|---|
|pbm_dtpdropdown|DatePicker|



Arguments None. Return Values Long. Return code: Ignored.



- 9.34 EndDownload Description Occurs at the end of a download procedure Event ID


- Table 9.92:



|Event ID|Objects|
|---|---|
|None|MLSynchronization, MLSync|



Arguments



- Table 9.93:




|Argument|Description|
|---|---|
|upsertrows|Long identifying the inserted and updated rows.|
|deleterows|Long identifying the deleted rows.|



Return Values None Usage Use this event to add custom actions at the end of the download stage of synchronization. The BeginDownload event marks the beginning of the download transaction. Applicable deletes are performed for all remote tables, and then rows are added as applicable for all remote tables in the download cursor. After EndDownload, download changes are committed. See also BeginDownload ConnectMobiLink EndSync



EndUpload



- 9.35 EndLabelEdit The EndLabelEdit event has different arguments for different objects:


- Table 9.94:



|Object|See|
|---|---|
|ListView control|Syntax 1|
|TreeView control|Syntax 2<br><br>|



- 9.35.1 Syntax 1: For ListView controls Description Occurs when the user finishes editing an item's label. Event ID


- Table 9.95:



|Event ID|Objects|
|---|---|
|pbm_lvnendlabeledit|ListView|



Arguments



- Table 9.96:




|Argument|Description|
|---|---|
|index|Integer. The index of the ListView item for which you have edited the label.|
|newlabel|The string that represents the new label for the ListView item.|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Allow the new text to become the item's label. 1 -- Prevent the new text from becoming the item's label. Usage The user triggers this event by pressing Enter or Tab after editing the text. Examples This example displays the old label and the new label in a SingleLineEdit:



ListViewItem lvi sle_info.text = "Finished editing " &



+ String(lvi.label) &



+". Item changed to "+ String(newlabel)
