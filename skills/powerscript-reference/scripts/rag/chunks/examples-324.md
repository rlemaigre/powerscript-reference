# Examples

This example returns the distance from the left edge of the screen to the left edge of the workspace area in the w_employee window:



- integer workx


- workx = w_employee.WorkSpaceX() See also




PointerX PointerY WorkSpaceHeight WorkSpaceWidth WorkSpaceY



- 10.741 WorkSpaceY Description Obtains the distance between the top of a window's workspace and the top of the screen.


- For custom MDI frames, WorkSpaceY obtains the distance from the top of the frame window and the top of the workspace area. The top of the frame window is the lower edge of the menu bar or toolbar, if any. Applies to Window objects Syntax


- windowname.WorkSpaceY ( )


- Table 10.914:




|Argument|Description|
|---|---|
|windowname|The name of the window for which you want the distance between the top of the workspace area and the top of the screen|



Return value Integer.



Returns the distance that the top of the workspace area of windowname is from the top of the screen (in PowerBuilder units). If an error occurs, WorkSpaceY returns -1. If windowname is null, WorkSpaceY returns null.
