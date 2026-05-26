# Examples

This example inserts a TreeView item that is on the same level as the current TreeView item. It uses FindItem to get the current item and its parent, then inserts the new item beneath the parent item:



long ll_tvi, ll_tvparent ll_tvi = tv_list.FindItem(currenttreeitem! , 0) ll_tvparent = tv_list.FindItem(parenttreeitem!,ll_tvi) tv_list.InsertItem(ll_tvparent,ll_tvi,"Hindemith", 2)



See also GetItem



- 10.326.6 Syntax 6: For TreeView controls Description Inserts an item at a specific level and order in a TreeView control. Applies to TreeView controls Syntax treeviewname.InsertItem ( handleparent, handleafter, item )


- Table 10.402:




|Argument|Description|
|---|---|
|treeviewname|The name of the TreeView control into which you want to insert an item.|
|handleparent|The handle of the item one level above the item you want to insert. To insert an item at the first level, specify 0.|



|Argument|Description|
|---|---|
|handleafter|The handle of the item on the same level that you will insert the item immediately after.|
|item|A TreeViewItem structure for the item you are inserting.|



Return value Long. Returns the handle of the item inserted if it succeeds and -1 if an error occurs. Usage



Use the previous syntax to set just the label and picture index. Use this syntax if you need to set additional properties for the item.



If the TreeView's SortType property is set to a value other than Unsorted!, the inserted item is sorted with its siblings.



If you are inserting the first child of an item, use InsertItemLast or InsertItemFirst instead. Those functions do not require a handleafter value.
