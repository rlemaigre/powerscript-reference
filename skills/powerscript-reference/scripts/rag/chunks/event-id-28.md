# Event ID

- Table 9.210:




|Event ID|Objects|
|---|---|
|pbm_dwnresize|DataWindow|
|pbm_size|Window|



- Table 9.211:



|Argument|Description|
|---|---|
|sizetype|UnsignedLong by value. The values are:<br><br>• 0 -- (SIZE_RESTORED) The window or DataWindow has been resized, but it was not minimized or maximized. The user might have dragged the borders or a script might have called the Resize function.<br>• 1 -- (SIZE_MINIMIZED) The window or DataWindow has been minimized.<br>• 2 -- (SIZE_MAXIMIZED) The window or DataWindow has been maximized.<br>• 3 -- (SIZE_MAXSHOW) This window is a pop-up window and some other window in the application has been restored to its former size (does not apply to DataWindow controls).<br>• 4 -- (SIZE_MAXHIDE) This window is a pop-up window and some other window in the application has been maximized (does not apply to DataWindow controls).<br>|
|newwidth|Integer by value (the width of the client area of a window or DataWindow control in PowerBuilder units).|
|newheight|Integer by value (the height of the client area of a window or DataWindow control in PowerBuilder units).|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing



- 9.99 RightClicked The RightClicked event has different arguments for different objects:


- Table 9.212:




|Object|See|
|---|---|
|ListView and Tab control|Syntax 1|
|TreeView control|Syntax 2<br><br>|



- 9.99.1 Syntax 1: For ListView and Tab controls Description




Occurs when the user clicks the right mouse button on the ListView control or the tab portion of the Tab control.
