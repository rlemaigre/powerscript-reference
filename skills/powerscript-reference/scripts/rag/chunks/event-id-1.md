# Event ID

- Table 9.26:



|Event ID|Objects|
|---|---|
|pbm_lvnclicked|ListView|



Arguments



- Table 9.27:




|Argument|Description|
|---|---|
|index|Integer by value (the index of the ListView item the user clicked). The value of index is -1 if the user clicks within the control but not on a specific item.|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



The Clicked event occurs when the user presses the mouse button. The Clicked event can occur during a double-click, in addition to the DoubleClicked event.



In addition to the Clicked event, ItemChanging and ItemChanged events can occur when the user clicks on an item that does not already have focus. BeginLabelEdit can occur when the user clicks on a label of an item that has focus.
