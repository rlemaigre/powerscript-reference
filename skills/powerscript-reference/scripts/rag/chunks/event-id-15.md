# Event ID

- Table 9.124:



|Event ID|Objects|
|---|---|
|pbm_help|Window, Menu, DragObject|



Arguments



- Table 9.125:



|Argument|Description|
|---|---|
|xpos|Integer by value (the distance of the Help message from the left edge of the screen, in PowerBuilder units)|
|ypos|Integer by value (the distance of the Help message from the top of the screen, in PowerBuilder units)|



Return Values Long. Return code choices (specified in a RETURN statement): 0 -- Continue processing Usage



The question-mark button only appears in the title bar of response windows. You must set the ContextHelp property to true to enable this event.



You can script Help messages for individual menu items and controls. PowerBuilder dispatches the associated Windows message to the appropriate menu item or control.



Examples This example codes a message box to open when the user drags and clicks the question-mark button over a TrackBar control:



MessageBox("Context Help Message", "Move the TrackBar" &



+ " slider to~r~n change the DataWindow magnification.")



See also ShowHelp



- 9.48 Hide Description Occurs just before the window is hidden. Event ID


- Table 9.126:




|Event ID|Objects|
|---|---|
|pbm_hidewindow|Window|
