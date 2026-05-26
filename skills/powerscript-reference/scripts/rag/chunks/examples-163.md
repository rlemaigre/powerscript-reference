# Examples

This example inserts a TreeView item that is on the same level as the current TreeView item. It uses FindItem to get the current item and its parent, then inserts the new item beneath the parent item:



long ll_tvi, ll_tvparent treeviewitem l_tvi ll_tvi = tv_list.FindItem(currenttreeitem! , 0) ll_tvparent = tv_list.FindItem(parenttreeitem!,ll_tvi) tv_list.GetItem(ll_tvi , l_tvi) tv_list.InsertItem(ll_tvparent,ll_tvi, l_tvi)



See also GetItem



- 10.327 InsertItemFirst Inserts an item as the first child of a parent item.


- Table 10.403:




|To insert an item as the first child of its parent|Use|
|---|---|
|When you only need to specify the item label and picture index|Syntax 1|
|When you need to specify more than the item label and picture index|Syntax 2<br><br>|



- 10.327.1 Syntax 1: For TreeView controls Description Inserts an item as the first child of its parent. Applies to TreeView controls
