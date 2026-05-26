# Examples

- This example docks toolbar 1 at the left, adding it to docking row 1:

- w_frame.SetToolbar(1, TRUE, AlignAtLeft!)

- w_frame.SetToolbarPos(1, 1, 1, FALSE)



This example docks toolbar 2 at the left, adding it to docking row 1. If the toolbars already in the dock extend past offset 250, then the offset of toolbar 2 is increased to accommodate them. Otherwise, it is positioned at offset 250:



w_frame.SetToolbar(2, TRUE, AlignAtLeft!)



- w_frame.SetToolbarPos(2, 1, 250, FALSE)




- This example docks toolbar 2 at the left in docking row 2. Any toolbar docked on the left in row 2 or higher is moved over a row:


- w_frame.SetToolbar(1, TRUE, AlignAtLeft!)


- w_frame.SetToolbarPos(1, 2, 1, TRUE) See also GetToolbar GetToolbarPos SetToolbar




10.653.2 Syntax 2: For floating toolbars Description Sets the position and size of a floating toolbar. Applies to MDI frame and sheet windows Syntax



window.SetToolbarPos ( toolbarindex, x, y, width, height )



- Table 10.814:




|Argument|Description|
|---|---|
|window|The MDI frame or sheet to which the toolbar belongs|
|toolbarindex|An integer whose value is the index of the toolbar whose settings you want to change|
|x|An integer whose value is the x coordinate of the floating toolbar|
|y|An integer whose value is the y coordinate of the floating toolbar|
|width|An integer whose value is the width of the floating toolbar|
|height|An integer whose value is the height of the floating toolbar|



Return value Integer.



Returns 1 if it succeeds. SetToolbarPos returns -1 if there is no toolbar for the index you specify or if an error occurs. If any argument's value is null, SetToolbarPos returns null.
