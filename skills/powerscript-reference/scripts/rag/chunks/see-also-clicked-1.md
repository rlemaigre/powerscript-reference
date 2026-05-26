# See also Clicked

- 9.104 SelectionChanged The SelectionChanged event has different arguments for different objects:


- Table 9.225:



|Object|See|
|---|---|
|DropDownListBox, DropDownPictureListBox, ListBox, PictureListBox controls|Syntax 1<br><br>|
|Tab control|Syntax 2|
|TreeView control|Syntax 3<br><br>|



- 9.104.1 Syntax 1: For Listboxes Description Occurs when an item is selected in the control. Event ID


- Table 9.226:



|Event ID|Objects|
|---|---|
|pbm_cbnselchange|DropDownListBox, DropDownPictureListBox|
|pbm_lbnselchange|ListBox, PictureListBox|



Arguments



- Table 9.227:




|Argument|Description|
|---|---|
|index|Integer by value (the index of the item that has become selected)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



For DropDownListBoxes, the SelectionChanged event applies to selections in the drop-down portion of the control, not the edit box.



The SelectionChanged event occurs when the user clicks on any item in the list, even if it is the currently selected item. When the user makes a selection using the mouse, the Clicked (and if applicable the DoubleClicked event) occurs after the SelectionChanged event.
