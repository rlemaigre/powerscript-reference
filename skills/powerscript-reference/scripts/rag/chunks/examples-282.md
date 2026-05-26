# Examples

This example uses SetItem to change the state picture index for the selected lv_list ListView item:



listviewitem lvi_1 lv_list.GetItem(lv_list.SelectedIndex( ), lvi_1) lvi_1.StatePictureIndex = 2 lv_list.SetItem(lv_list.SelectedIndex () , lvi_1)



See also AddColumn AddItem GetItem SetItem



- 10.615.2 Syntax 2: For ListView controls Description Sets the value displayed for a particular column of a ListView item. Applies to ListView control Syntax listviewname.SetItem ( index, column, label )


- Table 10.764:




|Argument|Description|
|---|---|
|listviewname|The ListView control for which you are setting a display value|
|index|The index number of the item for which you are setting a display value|
|column|The index number of the column for which you want to set a display value|



|Argument|Description|
|---|---|
|label|The string value or variable which you are assigning to the specified column of the specified ListView item|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage



You must include the column number as an argument, even if you are only assigning values to a single-column ListView control. To specify the properties for a ListView item, use Syntax 1.
