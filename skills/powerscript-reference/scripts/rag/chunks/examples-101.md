# Examples

To return the correct handle when the current item is clicked, place this code in a custom event that is posted in the item's clicked event:



long ll_tvi ll_tvi = tv_list.FindItem(CurrentTreeItem!, 0)



This example finds the first item on the first level of a TreeView control:



long ll_tvi ll_tvi = tv_list.FindItem(RootTreeItem!, 0)



See also DeleteItem GetItem InsertItem



SelectItem
