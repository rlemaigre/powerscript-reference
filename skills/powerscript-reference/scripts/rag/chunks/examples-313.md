# Examples

If item 15 has been scrolled to the top of the list in lb_Contacts, then this example sets Num to 15:



integer Num Num = lb_Contacts.Top()



If the user has not scrolled the list in lb_Contacts, then Num is set to 1:



integer Num Num = lb_Contacts.Top()



If the item at the top of the list in lb_Contacts is not the currently selected item, the following statements scroll the currently selected item to the top:



integer Num Num = lb_Contacts.SelectedIndex() IF lb_Contacts.Top() <> Num THEN &



lb_contacts.SetTop(Num)



See also SelectedIndex SetTop



- 10.709 TotalColumns Description Finds the number of columns in a ListView control. Applies to ListView controls Syntax listviewname.TotalColumns ( )


- Table 10.885:




|Argument|Description|
|---|---|
|listviewname|The name of the ListView control for which you want to find the number of columns|



Return value Integer. Returns the number of columns if it succeeds and -1 if an error occurs. Usage Use when the ListView control is set to report view. Examples This example displays the number of columns in a ListView report view in a SingleLineEdit:



int li_cols li_cols = lv_list.TotalColumns() sle_info.text = "Total columns = " + string(li_cols)



See also TotalItems



TotalSelected



- 10.710 TotalItems Description Determines the total number of items in a ListBox control. Applies to



ListBox, DropDownListBox, PictureListBox, DropDownPictureListBox, and ListView controls



Syntax



listcontrolname.TotalItems ( )



- Table 10.886:




|Argument|Description|
|---|---|
|listcontrolname|The name of the ListBox, DropDownListBox, PictureListBox, DropDownPictureListBox, or ListView in which you want the total number of items|



Return value Integer. Returns the total number of items in listcontrolname. If listcontrolname contains no items, TotalItems returns 0. If an error occurs, it returns -1. If listcontrolname is null, TotalItems returns null. Examples If lb_Actions contains a total of five items, this example sets Total to 5:



integer Total Total = lbx_Actions.TotalItems()



This FOR loop is executed for each item in lb_Actions:



integer Total, n Total = lb_Actions.TotalItems() FOR n = 1 to Total



... // Some processing NEXT



See also TotalSelected



- 10.711 TotalSelected Description Determines the number of items in a ListBox control that are selected. Applies to ListBox, PictureListBox, and ListView controls Syntax




listcontrolname.TotalSelected ( )



- Table 10.887:



|Argument|Description|
|---|---|
|listcontrolname|The name of the ListBox, PictureListBox, or ListView in which you want the number of items that are selected|



Return value Integer. Returns the number of items in listcontrolname that are selected. If no items in listcontrolname are selected, TotalSelected returns 0. If an error occurs, it returns -1. If listcontrolname is null, TotalSelected returns null. Usage TotalSelected works only if the MultiSelect property of listcontrolname is TRUE. Examples If three items are selected in lb_Actions, this example sets SelectedTotal to 3:



integer SelectedTotal SelectedTotal = lb_Actions.TotalSelected()



These statements in the SelectionChanged event of lb_Actions display a MessageBox if the user tries to select more than three items:



IF lb_Actions.TotalSelected() > 3 THEN MessageBox("Warning", &



"You can only select 3 items!") ELSE



... // Some processing END IF



See also TotalItems



10.712 ToUnicode



Description Converts a character string to a Unicode blob. Syntax



ToUnicode ( string )



- Table 10.888:




|Argument|Description|
|---|---|
|string|A character string you want to convert to a Unicode blob|
