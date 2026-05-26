# Clearing the text box of a drop-down list

To clear the text box of a DropDownListBox or DropDownPictureListBox that the user cannot edit, set itemnumber to 0. Setting the control's text to the empty string does not work if the control's AllowEdit property is false.



Examples This example highlights item number 5:



integer li_Index li_Index = lb_Actions.SelectItem(5)



This example clears the selection from the text box of the DropDownListBox ddlb_choices and sets li_Index to 0:



integer li_Index li_Index = ddlb_choices.SelectItem(0)



See also AddItem DeleteItem FindItem InsertItem SetState



- 10.573.3 Syntax 3: For TreeView controls Description Selects a specified item. Applies to TreeView controls Syntax treeviewname.SelectItem ( itemhandle )


- Table 10.709:




|Argument|Description|
|---|---|
|treeviewname|The name of the TreeView control in which you want to select an item|
|itemhandle|The handle of the specified item|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage



Use the FindItem function to get handles for items at specific positions in the TreeView control.



Examples This example selects the parent of the current TreeView item:



long ll_tvi, ll_tvparent int li_tvret



ll_tvi = tv_list.FindItem(CurrentTreeItem! , 0) ll_tvparent = tv_list.FindItem(ParentTreeItem! , &



ll_tvi) li_tvret = tv_list.SelectItem(ll_tvparent)



See also FindItem
