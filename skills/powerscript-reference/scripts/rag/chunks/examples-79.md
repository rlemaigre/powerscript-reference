# Examples

Assuming lb_actions contains 10 items, this statement deletes item 5 from lb_actions and returns 9:



lb_actions.DeleteItem(5)



These statements delete the first selected item in lb_actions:



integer li_Index li_Index = lb_actions.SelectedIndex() lb_actions.DeleteItem(li_Index)



This statement deletes the item "Personal" from the ListBox lb_purpose:



lb_purpose.DeleteItem( & lb_purpose.FindItem("Personal", 1))



AddItem FindItem InsertItem SelectItem



- 10.109.2 Syntax 2: For ListView controls Description Deletes the specified item from a ListView control. Applies to ListView controls Syntax listviewname.DeleteItem ( index )



Table 10.137:



|Argument|Description|
|---|---|
|listviewname|The name of the ListView control from which you want to delete an item|
|index|The index number of the item you want to delete|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Examples



This example uses SelectedIndex to find the index of the selected ListView item and then deletes the corresponding item:



integer index index = lv_list.selectedindex() lv_list.DeleteItem(index)



See also AddItem FindItem InsertItem SelectItem DeleteItems



- 10.109.3 Syntax 3: For TreeView controls Description Deletes an item from a control and all its child items, if any.




Applies to TreeView controls Syntax



treeviewname.DeleteItem ( itemhandle )



- Table 10.138:




|Argument|Description|
|---|---|
|treeviewname|The name of the TreeView control from which you want to delete an item|
|itemhandle|The handle of the item you want to delete|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage



If all items are children of a single item at the root level, you can delete all items in the TreeView with the handle for RootTreeItem as the argument for DeleteItem. Otherwise, you need to loop through the items at the first level.



Examples This example deletes an item from a TreeView control:



long ll_tvi ll_tvi = tv_list.FindItem(CurrentTreeItem!, 0) tv_list.DeleteItem(ll_tvi)



This example deletes all items from a TreeView control when there are several items at the first level:



long tvi_hdl = 0 DO UNTIL tv_1.FindItem(RootTreeItem!, 0) = -1



tv_1.DeleteItem(tvi_hdl) LOOP



See also AddItem FindItem InsertItem SelectItem DeleteItems
