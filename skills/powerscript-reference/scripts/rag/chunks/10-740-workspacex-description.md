# 10.740 WorkSpaceX Description

Obtains the distance between the left edge of a window's workspace and the left edge of the screen.



- For custom MDI frames, WorkSpaceX obtains the distance between the left edge of the frame window and the left side of the workspace area. Applies to Window objects Syntax


- windowname.WorkSpaceX ( )


- Table 10.913:




|Argument|Description|
|---|---|
|windowname|The name of the window for which you want the distance between the left edge of the workspace area and the left edge of the screen|



Return value Integer. Returns the distance that the left edge of the workspace area of windowname is from the left edge of the screen (in PowerBuilder units). WorkSpaceX returns -1 if an error occurs. If windowname is null, WorkSpaceX returns null. Usage



The workspace area is the area between the sides of the window (not including the thickness of the frame or the vertical scroll bar, if any) and the top and bottom of the window (not including the thickness of the frame or the title bar, menu bar, or horizontal scroll bar, if any).
