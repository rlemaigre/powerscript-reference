# Usage

InsertItem inserts the new item before the item identified by index. If the items in listboxname are sorted (its Sorted property is true), PowerBuilder resorts the items after the new item is inserted. The return value reflects the new item's final position in the list.



AddItem and InsertItem do not update the Items property array. You can use FindItem to find items added at runtime.



Examples This statement inserts the item Run Application before the fifth item in lb_actions:



lb_actions.InsertItem("Run Application", 5)



If the Sorted property is false, the statement above returns 5 (the previous item 5 becomes item 6). If the Sorted property is true, the list is sorted after the item is inserted and the function returns the index of the final position of the item.



If the ListBox lb_Cities has the following items in its list and its Sorted property is set to true, then the following example inserts Denver at the top, sorts the list, and sets li_pos to 4. If the ListBox's Sorted property is false, then the statement inserts Denver at the top of the list and sets li_pos to 1. The list is:



Albany Boston Chicago New York



The example code is:



string ls_City = "Denver" integer li_pos li_pos = lb_Cities.InsertItem(ls_City, 1)



See also AddItem DeleteItem



FindItem Reset TotalItems



- 10.326.2 Syntax 2: For ListBox and DropDownListBox controls Description Inserts an item into the list of values in a picture list box. Applies to PictureListBox and DropDownPictureListBox controls Syntax listboxname.InsertItem ( item {, pictureindex }, index )


- Table 10.398:




|Argument|Description|
|---|---|
|listboxname|The name of the PictureListBox or DropDownPictureListBox into which you want to insert an item|
|item|A string whose value is the text of the item you want to insert|
|pictureindex (optio|Annal)integer specifying the index of the picture you want to associate with the newly added item|
|index|The number of the item in the list before which you want to insert the item|
