# 10.679.1 Syntax 1: For TreeView controls Description

Sorts the children of an item in a TreeView control. Applies to TreeView controls Syntax



treeviewname.Sort ( itemhandle , sorttype )



- Table 10.843:




|Argument|Description|
|---|---|
|treeviewname|The name of the TreeView control in which you want to sort items.|
|itemhandle|The item for which you want to sort its children.|
|sorttype|The sort method you want to use. Valid values are: Ascending! Descending! UserDefinedSort!|



Return value Integer. Returns 1 if it succeeds and -1 if it fails. Usage



The Sort function only sorts the immediate level beneath the specified item. If you want to sort multiple levels, use SortAll. If you specify UserDefinedSort! as your sorttype, define your sort criteria in the Sort event of the TreeView control. To sort level 1 of a TreeView, set itemhandle to 0.



Examples This example sorts the children of the current TreeView item:



long ll_tvi ll_tvi = tv_foo.FindItem(CurrentTreeItem! , 0) tv_foo.SetRedraw(false) tv_foo.Sort(ll_tvi , Ascending!) tv_foo.SetRedraw(true)



See also SortAll



- 10.679.2 Syntax 2: For ListView controls Description Sorts items in ListView controls. Applies to ListView controls Syntax




listviewname.Sort ( sorttype, { column } )
