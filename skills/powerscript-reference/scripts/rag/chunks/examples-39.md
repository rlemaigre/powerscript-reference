# Examples

This code changes a ListView item text label to uppercase lettering. The change is made in the second column of the item the user clicks or double-clicks, depending on the ListView property settings:



listviewitem llvi_current This.GetItem(index, 2, llvi_current) llvi_current.Label = Upper(llvi_current.Label) This.SetItem(index, 2, llvi_current) RETURN 0



See also ItemChanged ItemChanging
