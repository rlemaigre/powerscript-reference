# Table 10.10:

|To add an item to|Use|
|---|---|
|A ListBox or DropDownListBox control|Syntax 1|
|A PictureListBox or DropDownPictureListBox control|Syntax 2|
|A ListView control when you only need to specify the item name and picture index|Syntax 3|
|A ListView control when you need to specify all the properties for the item|Syntax 4<br><br>|



- 10.8.1 Syntax 1: For ListBox and DropDownListBox controls Description Adds a new item to the list of values in a list box. Applies to ListBox and DropDownListBox controls Syntax listboxname.AddItem ( item )


- Table 10.11:




|Argument|Description|
|---|---|
|listboxname|The name of the ListBox or DropDownListBox in which you want to add an item|
|item|A string whose value is the text of the item you want to add|



Return value Integer. Returns the position of the new item. If the list is sorted, the position returned is the position of the item after the list is sorted. Returns -1 if it fails. If any argument's value is null, AddItem returns null. Usage



If the ListBox already contains items, AddItem adds the new item to the end of the list. If the list is sorted (its Sorted property is true), PowerBuilder re-sorts the list after the item is added.



A list can have duplicate items. Items in the list are tracked by their position in the list, not their text.



AddItem and InsertItem do not update the Items property array. You can use FindItem to find items added at runtime.



Adding many items to a list with a horizontal scroll bar If a ListBox or the ListBox portion of a DropDownListBox will have a large number of items and you want to display an HScrollBar, call the SetRedraw function to turn Redraw off, add the items, call SetRedraw again to set Redraw on, and then set the HScrollBar property to true. Otherwise, it may take longer than expected to add the items. Examples This example adds the item Edit File to the ListBox lb_Actions:



integer rownbr string s



s = "Edit File" rownbr = lb_Actions.AddItem(s)



If lb_Actions contains Add and Run and the Sorted property is false, the statement above returns 3 (because Edit File becomes the third and last item). If the Sorted property is true, the statement above returns 2 (because Edit File becomes the second item after the list is sorted alphabetically).



- 10.8.2 Syntax 2: For PictureListBox and DropDownPictureListBox controls Description Adds a new item to the list of values in a picture list box. Applies to PictureListBox and DropDownPictureListBox controls Syntax listboxname.AddItem ( item {, pictureindex } )


- Table 10.12:




|Argument|Description|
|---|---|
|listboxname|The name of the PictureListBox or DropDownPictureListBox in which you want to add an item|
|item|A string whose value is the text of the item you want to add|
|pictureindex (optional)|An integer specifying the index of the picture you want to associate with the newly added item|



Return value Integer. Returns the position of the new item. If the list is sorted, the position returned is the position of the item after the list is sorted. Returns -1 if it fails. If any argument's value is null, AddItem returns null. Usage If you do not specify a picture index, the newly added item will not have a picture. If you specify a picture index that does not exist, that number is still stored with the picture. If you add pictures to the picture array so that the index becomes valid, the item will then show the corresponding picture. For additional notes about items in list boxes, see Syntax 1. Examples This example adds the item Cardinal to the PictureListBox plb_birds:



integer li_pic, li_position string ls_name, ls_pic



li_pic = plb_birds.AddPicture("c:\pics\cardinal.bmp")



ls_name = "Cardinal" li_position = plb_birds.AddItem(ls_name, li_pic)



If plb_birds contains Robin and Swallow and the Sorted property is false, the AddItem function above returns 3 because Cardinal becomes the third and last item. If the Sorted property is true, AddItem returns 1 because Cardinal is first when the list is sorted alphabetically.



See also DeleteItem FindItem InsertItem Reset TotalItems



- 10.8.3 Syntax 3: For ListView controls Description Adds an item to a ListView control. Applies to ListView controls Syntax listviewname.AddItem ( label, pictureindex )


- Table 10.13:




|Argument|Description|
|---|---|
|listviewname|The name of the ListView control to which you are adding a picture or item|
|label|The name of the item you are adding|
|pictureindex|The index of the picture you want to associate with the newly added item|



Return value Integer. Returns the index of the item if it succeeds and -1 if an error occurs. Usage



Use this syntax if you only need to specify the label and picture index of the item you are adding to the ListView. If you need to specify more than the label and picture index, use Syntax 4.



Examples This example uses AddItem in the Constructor event to add three items to a ListView control:



lv_1.AddItem("Sanyo" , 1) lv_1.AddItem("Onkyo" , 1) lv_1.AddItem("Aiwa" , 1)



- 10.8.4 Syntax 4: For ListView controls Description Adds an item to a ListView control by referencing all the attributes in the ListView item. Applies to ListView controls Syntax listviewname.AddItem ( item )


- Table 10.14:




|Argument|Description|
|---|---|
|listviewname|The name of the List View control to which you are adding a picture or item|
|item|The ListViewItem variable containing properties of the item you are adding|



Return value Integer. Returns the index of the item if it succeeds and -1 if an error occurs. Usage



Use this syntax if you need to specify all the properties for the item you want to add. If you only need to specify the label and picture index, use Syntax 3.
