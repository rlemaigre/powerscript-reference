# Examples

If item 5 in lb_Actions is Delete Files, this example starts searching after item 2, finds and highlights Delete Files, and sets li_Index to 5:



integer li_Index li_Index = lb_Actions.SelectItem("Delete Files", 2)



If item 4 in lb_Actions is Select Objects, this example starts searching after item 2, finds and highlights Select Objects, and sets li_Index to 4:



integer li_Index li_Index = lb_Actions.SelectItem("Sel", 2)



See also AddItem DeleteItem



FindItem InsertItem SetState



- 10.573.2 Syntax 2: When you know the item number Description




Finds and highlights an item in a ListBox when you can specify the index number of the item. You can also clear the selection by specifying zero as the index number.



Applies to ListBox, DropDownListBox, PictureListBox, and DropDownPictureListBox controls Syntax



listboxname.SelectItem ( itemnumber )



- Table 10.708:




|Argument|Description|
|---|---|
|listboxname|The name of the ListBox control in which you want to select an item|
|itemnumber|An integer whose value is the location (index) of the item in the ListBox or the ListBox portion of the drop-down list.<br><br>Specify 0 for itemnumber to clear the selected item. For a ListBox or PictureListBox, 0 removes highlighting from the selected item. For a DropDownListBox or DropDownPictureListBox, 0 clears the text box.|



Return value Integer. Returns the index number of the selected item. SelectItem returns 0 if itemnumber is not valid or if you specified 0 in order to clear the selected item. It returns -1 if an error occurs. If any argument's value is null, SelectItem returns null. Usage To find an item but not select it, use the FindItem function.
