# Usage

When FindItem finds the matching item, it returns the index of the item but does not select (highlight) the item. To find and select the item, use the SelectItem function.



Examples Assume the ListBox lb_actions contains the following list:



- Table 10.199:



|Index number|Item text|
|---|---|
|1|Open files|
|2|Close files|
|3|Copy files|
|4|Delete files|



Then these statements start searching for Delete starting with item 2 (Close files). FindItem sets Index to 4:



integer Index Index = lb_actions.FindItem("Delete", 1)



See also AddItem DeleteItem InsertItem SelectItem



- 10.165.2 Syntax 2: For ListView controls Description Searches for the next item whose label matches the specified search text. Applies to ListView controls Syntax listviewname.FindItem ( startindex, label, partial, wrap )


- Table 10.200:




|Argument|Description|
|---|---|
|listviewname|The ListView control for which you want to search for items|
|startindex|The index number from which you want your search to begin|
|label|The string that is the target of the search|
|partial|If set to true, the search looks for a partial label match|
|wrap|If set to true, the search returns to the first index item after it has finished|



Return value Integer. Returns the index of the item found if it succeeds and -1 if an error occurs. Usage The search starts from startindex + 1 by default. To search from the beginning, specify 0. If partial is set to true, the search string matches any label that begins with the specified text. If partial is set to false, the search string must match the entire label. If wrap is set to true, the search wraps around to the first index item after searching to the end. If wrap is set to false, the search stops at the last index item in the ListView. FindItem does not select the item it finds. You must use the item's selected property in conjunction with FindItem to select the resulting match. Examples This example takes the value from a SingleLineEdit control and passes it to FindItem:



listviewitem l_lvi integer li_index string ls_label



ls_label = sle_find.Text IF ls_label = "" THEN



MessageBox("Error" , &



"Enter the name of a list item") sle_find.SetFocus()



ELSE



li_index = lv_list.FindItem(0,ls_label, TRUE,TRUE)



END IF IF li_index = -1 THEN



MessageBox("Error", "Item not found.") ELSE



lv_list.GetItem (li_index, l_lvi ) l_lvi.HasFocus = TRUE l_lvi.Selected = TRUE lv_list.SetItem(li_index,l_lvi)



END IF



See also AddItem DeleteItem InsertItem SelectItem



- 10.165.3 Syntax 3: For ListView controls Description Search for the next item relative to a specific location in the ListView control. Applies to ListView controls Syntax




listviewname.FindItem ( startindex, direction, focused, selected, cuthighlighted, drophighlighted )



- Table 10.201:




|Argument|Description|
|---|---|
|listviewname|The ListView control for which you want to search for items.|
|startindex|The index number from which you want your search to begin.|
|direction|The direction in which to search. Values are: DirectionAll! DirectionUp! DirectionDown! DirectionLeft! DirectionRight!|
|focused|If set to true, the search looks for the next ListView item that has focus.|
|selected|If set to true, the search looks for the next ListView item that is selected.|
|cuthighlighted|If set to true, the search looks for the next ListView item that is the target of a cut operation.|
|drophighlighted|If set to true, the search looks for next ListView item that is the target of a drag and drop operation.|



Return value Integer. Returns the index of the item found if it succeeds and -1 if an error occurs. Usage



The search starts from startindex + 1 by default. If you want to search from the beginning, specify 0.



FindItem does not select the item it finds. You must use the item's selected property in conjunction with FindItem to select the resulting match.



If focused, selected, cuthighlighted, and drophighlighted are set to false, the search finds the next item in the ListView control.



Examples This example uses FindItem to search from the selected ListView item:



listviewitem l_lvi integer li_index, li_startindex



li_startindex = lv_list.SelectedIndex() li_index = lv_list.FindItem(li_startindex, &



DirectionDown!, FALSE, FALSE ,FALSE, FALSE) IF li_index = -1 THEN



MessageBox("Error", "Item not found.") ELSE



lv_list.GetItem (li_index, l_lvi)



l_lvi.HasFocus = TRUE l_lvi.Selected = TRUE lv_list.SetItem(li_index,l_lvi)



END IF



See also AddItem DeleteItem InsertItem SelectItem



- 10.165.4 Syntax 4: For TreeView controls Description Find an item based on its position in a TreeView control. Applies to TreeView controls Syntax treeviewname.FindItem ( navigationcode, itemhandle )


- Table 10.202:




|Argument|Description|
|---|---|
|treeviewname|The name of the TreeView control in which you want to find a specified item.|
|navigationcode|A value of the TreeNavigation enumerated datatype specifying the relationship between itemhandle and the item you want to find. See the table in Usage note for a list of valid values.|
|itemhandle|A long for the handle of an item related via navigationcode to the item for which you are searching.|



Return value Long. Returns the item handle if it succeeds and -1 if an error occurs. Usage



FindItem does not select the item it finds. You must use the item's selected property in conjunction with FindItem to select the result of the FindItem search.



FindItem never finds a collapsed item, except when looking for ChildTreeItem!, which causes an item to expand. CurrentItem! is not changed until after the clicked event occurs. To return the correct handle for the current item when the user clicks it, create a custom event to return the handle and post it in the clicked event.



If navigationcode is RootTreeItem!, FirstVisibleTreeItem!, CurrentTreeItem!, or DropHighlightTreeItem!, set itemhandle to 0.



The following table shows valid values for the navigationcode argument.



- Table 10.203: Valid values for the navigationcode argument of FindItem




|Navigationcode value|What FindItem finds|
|---|---|
|RootTreeItem!|The first item at level 1. Returns -1 if no items have been inserted into the control.|
|NextTreeItem!|The sibling after itemhandle. A sibling is an item at the same level with the same parent. Returns -1 if there are no more siblings.|
|PreviousTreeItem!|The sibling before itemhandle. Returns -1 if there are no more siblings.|
|ParentTreeItem!|The parent of itemhandle. Returns -1 if the item is at level 1.|
|ChildTreeItem!|The first child of itemhandle. If the item is collapsed, ChildtreeItem! causes the node to expand. Returns -1 if the item has no children or if the item is not populated yet.|
|FirstVisibleTreeIte|Them! first item visible in the control, regardless of level. The position of the scroll bar determines the first visible item.|
|NextVisibleTreeIt|em!The next expanded item after itemhandle, regardless of level. The<br><br>NextVisible and PreviousVisible values allow you to walk through all the visible children and branches of an expanded node. Returns -1 if the item is the last expanded item in the control.<br><br>To scroll to an item that is beyond the reach of the visible area of the control, use FindItem and then SelectItem.|
|PreviousVisibleTr|eeItem!The next expanded item before itemhandle, regardless of level. Returns<br><br>-1 if the item is the first root item.|
|CurrentTreeItem!|The selected item. Returns -1 if the control never had focus and nothing has been selected.|
|DropHighlightTre|eItem!The item whose DropHighlighted property was most recently set. Returns -1 if the property was never set or if it has been set back to false because of other activity in the control.|
