# Using the ItemActivate event for ListView controls

You can use the ItemActivate event (with the OneClickActivate property set to true) instead of the Clicked event for ListView controls.



Examples This code changes the label of the item the user clicks to uppercase:



IF index = -1 THEN RETURN 0 This.GetItem(index, llvi_current) llvi_current.Label = Upper(llvi_current.Label) This.SetItem(index, llvi_current) RETURN 0



ColumnClick DoubleClicked ItemActivate ItemChanged ItemChanging RightClicked RightDoubleClicked



- 9.10.3 Syntax 3: For Tab controls Description Occurs when the user clicks on the tab portion of a Tab control. Event ID


- Table 9.28:



|Event ID|Objects|
|---|---|
|pbm_tcnclicked|Tab|



Arguments



- Table 9.29:




|Argument|Description|
|---|---|
|index|Integer by value (the index of the tab page the user clicked)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage The Clicked event occurs when the mouse button is released. When the user clicks in the display area of the Tab control, the tab page user object (not the Tab control) gets a Clicked event. The Clicked event can occur during a double-click, in addition to the DoubleClicked event.



In addition to the Clicked event, the SelectionChanging and SelectionChanged events can occur when the user clicks on a tab page label. If the user presses an arrow key to change tab pages, the Key event occurs instead of Clicked before SelectionChanging and SelectionChanged.



Examples This code makes the tab label bold for the fourth tab page only:



IF index = 4 THEN



This.BoldSelectedText = TRUE ELSE



This.BoldSelectedText = FALSE END IF



See also DoubleClicked RightClicked RightDoubleClicked SelectionChanged SelectionChanging



- 9.10.4 Syntax 4: For TreeView controls Description Occurs when the user clicks an item in a TreeView control. Event ID


- Table 9.30:



|Event ID|Objects|
|---|---|
|pbm_tvnclicked|TreeView|



Arguments



- Table 9.31:




|Argument|Description|
|---|---|
|handle|Long by value (the handle of the TreeView item the user clicked)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage The Clicked event occurs when the user presses the mouse button. The Clicked event can occur during a double-click, in addition to the DoubleClicked event. In addition to the Clicked event, GetFocus occurs if the control does not already have focus. Examples This code in the Clicked event changes the label of the item the user clicked to uppercase:



TreeViewItem ltvi_current This.GetItem(handle, ltvi_current) ltvi_current.Label = Upper(ltvi_current.Label) This.SetItem(handle, ltvi_current)



DoubleClicked RightClicked RightDoubleClicked SelectionChanged SelectionChanging



- 9.10.5 Syntax 5: For windows and progress bars Description




Occurs when the user clicks in an unoccupied area of the window or progress bar (any area with no visible, enabled object).
