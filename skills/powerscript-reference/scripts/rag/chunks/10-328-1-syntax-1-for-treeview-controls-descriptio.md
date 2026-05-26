# 10.328.1 Syntax 1: For TreeView controls Description

Inserts an item as the last child of its parent. Applies to TreeView controls Syntax



treeviewname.InsertItemLast ( handleparent, label, pictureindex )



- Table 10.407:




|Argument|Description|
|---|---|
|treeviewname|The TreeView control in which you want to specify an item as the last child of its parent.|
|handleparent|The handle of the item that will be the inserted item's parent. To insert the item at the first level, specify 0.|
|label|The label of the item you want to specify as the last child of its parent.|
|pictureindex|The picture index for the item you want to specify as the last child of its parent.|



Return value Long. Returns the handle of the item inserted if it succeeds and -1 if an error occurs. Usage If more than the item label and Index need to be specified, use syntax 2. If SortType is anything except Unsorted!, items are sorted after they are added and the TreeView is always in a sorted state. Therefore, calling InsertItemFirst, InsertItemLast, and InsertItemSort produces the same result. Examples This example populates the first three levels of a TreeView using InsertItemLast:



long ll_lev1, ll_lev2, ll_lev3, ll_lev4 int index



tv_list.PictureHeight = 32 tv_list.PictureWidth = 32



ll_lev1 = tv_list.InsertItemLast(0,"Composers",1) ll_lev2 = tv_list.InsertItemLast(ll_lev1, &



"Beethoven",2) ll_lev3 = tv_list.InsertItemLast(ll_lev2, &



"Symphonies",3) FOR index = 1 to 9



ll_lev4 = tv_list.InsertItemSort(ll_lev3, &



"Symphony # " String(index), 4) NEXT



tv_list.ExpandItem(ll_lev3) tv_list.ExpandItem(ll_lev4)



See also InsertItem



InsertItemFirst InsertItemSort



- 10.328.2 Syntax 2: For TreeView controls Description Inserts an item as the last child of its parent. Applies to TreeView controls Syntax treeviewname.InsertItemLast ( handleparent, item )


- Table 10.408:




|Argument|Description|
|---|---|
|treeviewname|The TreeView control in which you want to specify an item as the last child of its parent.|
|handleparent|The handle of the item that will be the inserted item's parent. To insert the item at the first level, specify 0.|
|item|A TreeViewItem structure for the item you are inserting.|



Return value Long. Returns the handle of the item inserted if it succeeds and -1 if an error occurs. Usage



If SortType is anything except Unsorted!, items are sorted after they are added and the TreeView is always in a sorted state. Therefore, calling InsertItemFirst, InsertItemLast, and InsertItemSort produces the same result.
