# 9.54 ItemChanged Description Occurs when an ListView item has changed. Event ID

Table 9.136:



|Event ID|Objects|
|---|---|
|pbm_lvnitemchanged|ListView|



Arguments



Table 9.137:



|Argument|Description|
|---|---|
|index|The index of the item that is changing|
|focuschanged|Boolean (specifies if focus has changed for the item)|
|hasfocus|Boolean (specifies whether the item has focus)|
|selectionchange|Boolean (specifies whether the selection has changed for the item)|
|selected|Boolean (specifies whether the item is selected)|
|otherchange|Boolean (specifies if anything other than focus or selection has changed for the item)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Examples This example checks whether the event is occurring because focus has changed to the item:



ListViewItem l_lvi lv_list.GetItem(index, l_lvi) IF focuschange and hasfocus THEN



sle1.Text = String(lvi.label) +" has focus." END IF



See also ItemChanged in Section 8.27, “ItemChanged” in DataWindow Reference ItemChanging
