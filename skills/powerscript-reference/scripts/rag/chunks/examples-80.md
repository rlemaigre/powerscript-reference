# Examples

This script for the SelectionChanged event of a DropDownListBox assumes that the list box lists the series in the graph gr_data. When the user chooses an item, DeleteSeries deletes the series from the graph and DeleteItem deletes the name from the list box:



string ls_name ls_name = This.Text gr_data.DeleteSeries(ls_name) This.DeleteItem(This.FindItem(ls_name, 0))



See also AddSeries DeleteCategory DeleteData FindSeries



- 10.116 DeleteSmallPicture Description Deletes a small picture from a ListView control. Applies to ListView controls
