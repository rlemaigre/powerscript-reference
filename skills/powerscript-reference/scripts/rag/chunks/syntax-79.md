# Syntax

treeviewname.InsertItemFirst ( handleparent, label, pictureindex )



- Table 10.404:




|Argument|Description|
|---|---|
|treeviewname|The TreeView control in which you want to specify an item as the first child of its parent.|
|handleparent|The handle of the item that will be the inserted item's parent. To insert the item at the first level, specify 0.|
|label|The label of the item you want to specify as the first child of its parent.|
|pictureindex|The picture index for the item you want to specify as the first child of its parent.|



Return value Long. Returns the handle of the item inserted if it succeeds and -1 if an error occurs. Examples This example populates the first level of a TreeView using InsertItemFirst:



long ll_lev1, ll_lev2 ,ll_lev3 ,ll_lev4 int index tv_list.PictureHeight = 32 tv_list.PictureWidth = 32 ll_lev1 = tv_list.InsertItemFirst(0,"Composers",1) ll_lev2 = tv_list.InsertItemLast(ll_lev1, &



"Beethoven",2) ll_lev3 = tv_list.InsertItemLast(ll_lev2, &



"Symphonies", 3) FOR index = 1 to 9



ll_lev4 = tv_list.InsertItemSort(ll_lev3, & "Symphony # " + String(index) , 4)



NEXT tv_list.ExpandItem(ll_lev3) tv_list.ExpandItem(ll_lev4)



See also InsertItem InsertItemLast InsertItemSort



- 10.327.2 Syntax 2: For TreeView controls Description Inserts an item as the first child of an item. Applies to TreeView controls Syntax




treeviewname.InsertItemFirst ( handleparent, item )



- Table 10.405:



|Argument|Description|
|---|---|
|treeviewname|The TreeView control in which you want to specify an item as the first child of its parent.|
|handleparent|The handle of the item that will be the inserted item's parent. To insert the item at the first level, specify 0.|
|item|A TreeViewItem structure for the item you are inserting.|



Return value Long. Returns the handle of the item inserted if it succeeds and -1 if an error occurs. Usage



If SortType is anything except Unsorted!, items are sorted after they are added and the TreeView is always in a sorted state. Therefore, calling InsertItemFirst, InsertItemLast, and InsertItemSort produces the same result.



Examples



This example inserts the current item as the first item beneath the root item in a TreeView control:



long ll_handle, ll_roothandle treeviewitem l_tvi ll_handle = tv_list.FindItem(CurrentTreeItem!, 0) ll_roothandle = tv_list.FindItem(RootTreeItem!, 0) tv_list.GetItem(ll_handle , l_tvi)



tv_list.InsertItemFirst(ll_roothandle, l_tvi)



See also InsertItem InsertItemLast InsertItemSort



10.328 InsertItemLast



Inserts an item as the last child of a parent item.



- Table 10.406:




|To insert an item as the last child of its parent|Use|
|---|---|
|When you only need to specify the item label and picture index|Syntax 1|
|When you need to specify more than item label and picture index|Syntax 2<br><br>|
