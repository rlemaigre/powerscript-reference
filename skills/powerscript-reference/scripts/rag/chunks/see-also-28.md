# See also

GetToolbar SetToolbar SetToolbarPos



- 10.287.2 Syntax 2: For floating toolbars Description Gets the position and size of a floating toolbar. Applies to MDI frame and sheet windows Syntax window.GetToolbarPos ( toolbarindex, x, y, width, height )


- Table 10.354:




|Argument|Description|
|---|---|
|window|The MDI frame or sheet to which the toolbar belongs.|
|toolbarindex|An integer whose value is the index of the toolbar for which you want the current settings.|
|x|An integer variable in which you want to store the x coordinate of the floating toolbar. If the toolbar is docked, x is set to the most recent value.|
|y|An integer variable in which you want to store the y coordinate of the floating toolbar. If the toolbar is docked, y is set to the most recent value.|
|width|An integer variable in which you want to store the width of the floating toolbar. If the toolbar is docked, width is set to the most recent value.|
|height|An integer variable in which you want to store the height of the floating toolbar. If the toolbar is docked, height is set to the most recent value.|
