# 9.55 ItemChanging Description Occurs just before a ListView changes.

- Table 9.138:



|Event ID|Objects|
|---|---|
|pbm_lvnitemchanging|ListView|



Arguments



- Table 9.139:



|Argument|Description|
|---|---|
|index|The index of the item that has changed|
|focuschange|Boolean (specifies if focus is changing for the item)|
|hasfocus|Boolean (specifies whether the item has focus)|
|selectionchange|Boolean (specifies whether the selection is changing for the item)|
|selected|Boolean (specifies whether the item is selected)|
|otherchange|Boolean (specifies if anything other than focus or selection has changed for the item)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing See also ItemChanged



- 9.56 ItemCollapsed Description Occurs when a TreeView item has collapsed. Event ID


- Table 9.140:



|Event ID|Objects|
|---|---|
|pbm_tvnitemcollapsed|TreeView|



Arguments



- Table 9.141:




|Argument|Description|
|---|---|
|handle|Long by reference (the handle of the collapsed TreeViewItem)|
