# 10.109 DeleteItem Deletes an item from a ListBox, DropDownListBox, or ListView control.

- Table 10.135:



|To delete an item from|Use|
|---|---|
|A ListBox or DropDownListBox control|Syntax 1|
|A ListView control|Syntax 2|
|A TreeView control|Syntax 3<br><br>|



- 10.109.1 Syntax 1: For ListBox and DropDownListBox controls Description Deletes an item from the list of values for a list box control. Applies to ListBox, DropDownListBox, PictureListBox, and DropDownPictureListBox controls Syntax listboxname.DeleteItem ( index )


- Table 10.136:




|Argument|Description|
|---|---|
|listboxname|The name of the ListBox, DropDownListBox, PictureListBox, or DropDownPictureListBox from which you want to delete an item|
|index|The position number of the item you want to delete|



Return value Integer. Returns the number of items remaining in the list of values after the item is deleted. If an error occurs, DeleteItem returns -1. If any argument's value is null, DeleteItem returns null. Usage



If the control's Sorted property is set, the order of the list is probably different from the order you specified when you defined the control. If you know the item's text, use FindItem to determine the item's index.
