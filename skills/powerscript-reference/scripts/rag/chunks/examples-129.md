# Examples

This example uses GetItem to move the second item in the lv_list ListView control to the fifth item. It retrieves item 2, inserts it into the ListView control as item 5, and then deletes the original item:



listviewitem l_lvi lv_list.GetItem(2, l_lvi) lv_list.InsertItem(5, l_lvi) lv_list.DeleteItem(2)



See also GetColumn SetItem



- 10.227.2 Syntax 2: For ListView controls Description Retrieves the value displayed for a ListView item in a specified column. Applies to ListView controls Syntax listviewname.GetItem ( index, column, label )


- Table 10.277:




|Argument|Description|
|---|---|
|listviewname|The name of the ListView control from which you want to retrieve a displayed value.|
|index|The index number of the item for which you want to retrieve a displayed value.|
|column|The index number of the column for which you want to retrieve a value. If the ListView is not a multicolumn report view, all the items are considered to be in column 1.|



|Argument|Description|
|---|---|
|label|A string variable in which you store the displayed value.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Stores the displayed value of the ListView column in a string variable. Usage To retrieve property values for a ListView item, use Syntax 1. Examples



This example gets the displayed values from column 1 and column 3 of the first row of the lv_list ListView and displays them in the sle_info SingleLineEdit control.



string ls_artist, ls_comp lv_list.GetItem(1, 1 , ls_comp) lv_list.GetItem(1, 3 , ls_artist) sle_info.text = ls_artist +" wrote " + ls_comp + "."
