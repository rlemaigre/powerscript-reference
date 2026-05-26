# Return value

Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage



If there is only one level-one entry, you can use the RootTreeItem handle as the argument to collapse the tree so that only the top-level node is displayed. However, CollapseItem collapses only the current item, so that if the children of the top-level item were expanded when the tree was collapsed, they will still be expanded when the top-level item is expanded.



If there is more than one level-one entry, using the RootTreeItem handle as the argument collapses only the first level-one entry.



Examples This example collapses an item in a TreeView control:



long ll_tvi ll_tvi = tv_list.FindItem(currenttreeitem!, 0) tv_list.CollapseItem(ll_tvi)



This example collapses the top-level item in a TreeView control that has only one level-one entry:



long ll_tvi ll_tvi = tv_list.FindItem(roottreeitem!, 0) tv_list.CollapseItem(ll_tvi)



See also ExpandItem ExpandAll FindItem
