# Examples

This example uses the DoubleClicked event to begin editing the double-clicked ListView item:



This.EditLabels = TRUE



See also Clicked ColumnClick ItemActivate ItemChanged ItemChanging RightClicked RightDoubleClicked SelectionChanged SelectionChanging



- 9.28.2 Syntax 2: For TreeView controls Description Occurs when the user double-clicks on the control. Event ID


- Table 9.68:



|Event ID|Objects|
|---|---|
|pbm_tvndoubleclicked|TreeView|



Arguments



- Table 9.69:




|Argument|Description|
|---|---|
|handle|Long by value (the handle of the item the user double-clicked)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Examples This example turns on editing for the double-clicked TreeView item:



TreeViewItem ltvi_current ltvi_current = tv_1.FindItem(CurrentTreeItem!, 0) This.EditLabel(ltvi_current)
