# Examples

This example inserts the current item beneath the root item in a TreeView control and sorts it according to its label:



long ll_handle, ll_roothandle treeviewitem l_tvi



ll_handle = tv_list.FindItem(CurrentTreeItem!, 0) ll_roothandle = tv_list.FindItem(RootTreeItem!, 0) tv_list.GetItem(ll_handle , l_tvi)



tv_list.InsertItemSort(ll_roothandle, l_tvi)



See also InsertItem InsertItemLast InsertItemFirst
