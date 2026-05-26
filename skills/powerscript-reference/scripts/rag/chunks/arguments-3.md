# Arguments

- Table 9.219:



|Argument|Description|
|---|---|
|index|Integer by value (the index of the item or tab the user double-clicked)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Examples



This example deletes an item from the ListView when the user right-double-clicks on it and then rearranges the items:



integer li_rtn // Delete the item li_rtn = This.DeleteItem(index) IF li_rtn = 1 THEN



This.Arrange( ) ELSE



MessageBox("Error", Deletion failed!") END IF



See also DoubleClicked RightClicked



- 9.100.2 Syntax 2: For TreeView controls Description Occurs when the user double-clicks the right mouse button on the TreeView control. Event ID


- Table 9.220:



|Event ID|Objects|
|---|---|
|pbm_tvnrdoubleclicked|TreeView|



Arguments



- Table 9.221:




|Argument|Description|
|---|---|
|handle|Long by value (the handle of the item the user double-clicked)|
