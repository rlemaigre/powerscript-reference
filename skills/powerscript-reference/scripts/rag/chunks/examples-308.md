# Examples

This statement causes your PowerBuilder application to begin acting as a server. It is known to other DDE applications as MyPBApp; its topic is System, and it supports items called Table1 and Table2:



StartServerDDE(w_emp, "MyPBApp","System", & "Table1", "Table2")



See also StopServerDDE



- 10.686 State Description Determines whether an item in a ListBox control is highlighted. Applies to ListBox and PictureListBox controls Syntax listboxname.State ( index )


- Table 10.854:




|Argument|Description|
|---|---|
|listboxname|The name of the ListBox or PictureListBox in which you want to obtain the state (highlighted or not highlighted) of the item identified by index|
|index|The number of the item for which you want to obtain the state|



Return value Integer. Returns 1 if the item in listboxname identified by index is highlighted and 0 if it is not. If the index does not point to a valid item number, State returns -1. If any argument's value is null, State returns null. Usage



The State and SetState functions are meant for a ListBox that allows multiple selections (its MultiSelect property is true). To find all of a list's selected items, loop through the list, checking the state of each item.



The SelectedItem and SelectItem functions are meant for single-selection ListBox controls. SelectedItem reports the selection directly with no need for looping. In a multiple-selection ListBox control, SelectedItem reports the first selected item only.



When you know the index of an item, you can use the Text function to get the item's text. Examples If item 3 in lb_Contact is selected (highlighted), then this example sets li_Item to 1:



integer li_Item li_Item = lb_Contact.State(3)



The following statements obtain the text of all the selected items in a ListBox that allows the user to select more than one item. The MessageBox function displays each item as it is found. You could include other processing that created an array or list of the selected values:



integer li_ItemTotal, li_ItemCount



// Get the number of items in the ListBox. li_ItemTotal = lb_contact.TotalItems( )



// Loop through all the items. FOR li_ItemCount = 1 to li_ItemTotal



// Is the item selected? If so, display the text IF lb_Contact.State(li_ItemCount) = 1 THEN & MessageBox("Selected Item", & lb_Contact.text(li_ItemCount))



NEXT



This statement executes some statements if item 3 in the ListBox lb_Contact is highlighted:



IF lb_Contact.State(3) = 1 THEN ...



See also SelectedItem SetState
