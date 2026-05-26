# Examples

This example inserts the current item as the last item beneath the root item in a TreeView control:



long ll_handle, ll_roothandle treeviewitem l_tvi



ll_handle = tv_list.FindItem(CurrentTreeItem!, 0) ll_roothandle = tv_list.FindItem(RootTreeItem!, 0) tv_list.GetItem(ll_handle , l_tvi)



tv_list.InsertItemLast(ll_roothandle, l_tvi)



See also InsertItem InsertItemFirst InsertItemSort



- 10.329 InsertItemSort Inserts a child item in sorted order under the parent item.


- Table 10.409:



|To insert an item in sorted order|Use|
|---|---|
|When you only need to specify the item label and picture index|Syntax 1|
|When you need to specify more than the item label and picture index|Syntax 2<br><br>|



10.329.1 Syntax 1: For TreeView controls Description Inserts an item in sorted order, if possible. Applies to TreeView controls Syntax



treeviewname.InsertItemSort ( handleparent, label, pictureindex )



- Table 10.410:




|Argument|Description|
|---|---|
|treeviewname|The TreeView control in which you want to insert and sort an item as a child of its parent, according to its label.|
|handleparent|The handle of the item that will be the inserted item's parent. To insert the item at the first level, specify 0.|
|label|The label by which you want to sort the item as a child of its parent.|
|pictureindex|The picture index for the item you want to sort as a child of its parent, according to its label.|



Return value Long. Returns the handle of the item inserted if it succeeds and -1 if an error occurs. Usage



If SortType is anything except Unsorted!, the TreeView is always in a sorted state and you do not need to use InsertItemSort -- you can use any insert function.



If SortType is Unsorted!, InsertItemSort attempts to insert the item at the correct place in alphabetic ascending order. If the list is out of order, it does its best to find the correct place, but results may be unpredictable.



Examples This example populates the fourth level of a TreeView control:



long ll_lev1, ll_lev2, ll_lev3, ll_lev4 int index



tv_list.PictureHeight = 32



tv_list.PictureWidth = 32 ll_lev1 = tv_list.InsertItemLast(0,"Composers",1) ll_lev2 = tv_list.InsertItemLast(ll_lev1,&



"Beethoven",2) ll_lev3 = tv_list.InsertItemLast(ll_lev2,&



"Symphonies",3) FOR index = 1 to 9



ll_lev4 = tv_list.InsertItemSort(ll_lev3, &



"Symphony # " + String(index), 4) NEXT



tv_list.ExpandItem(ll_lev3) tv_list.ExpandItem(ll_lev4)



See also InsertItem InsertItemLast InsertItemFirst



10.329.2 Syntax 2: For TreeView controls Description Inserts an item in sorted order, if possible. Applies to TreeView controls Syntax



treeviewname.InsertItemSort ( handleparent, item )



- Table 10.411:




|Argument|Description|
|---|---|
|treeviewname|The TreeView control in which you want to sort an item as a child of its parent, according to its label.|
|handleparent|The handle of the item that will be the inserted item's parent. To insert the item at the first level, specify 0.|
|item|A TreeViewItem structure for the item you are inserting.|



Return value Long. Returns the handle of the item inserted if it succeeds and -1 if an error occurs. Usage



If SortType is anything except Unsorted!, the TreeView is always in a sorted state and you do not need to use InsertItemSort -- you can use any insert function.



If SortType is Unsorted!, InsertItemSort attempts to insert the item at the correct place in alphabetic ascending order. If the list is out of order, it does its best to find the correct place, but results may be unpredictable.
