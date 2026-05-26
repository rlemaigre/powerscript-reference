# Examples

This example allows the user to choose an alignment in a ListBox lb_position. The selected string is converted to a ToolbarAlignment enumerated value, which is used to change the alignment of toolbar index 1:



toolbaralignment tba_align CHOOSE CASE lb_position.SelectedItem() CASE "Top"



tba_align = AlignAtTop! CASE "Left"



tba_align = AlignAtLeft! CASE "Right"



tba_align = AlignAtRight! CASE "Bottom"



tba_align = AlignAtBottom! CASE "Floating"



tba_align = Floating! END CHOOSE w_frame.SetToolbar(1, TRUE, tba_align)



In this example, the user clicks a radio button to choose an alignment. The radio button's Clicked event sets an instance variable of type ToolbarAlignment. Here the radio buttons are packaged as a custom visual user object. I_toolbaralign is an instance variable of the user object. This is the script for the Top radio button:



Parent.i_toolbaralign = AlignAtTop!



This script changes the toolbar alignment:



w_frame.SetToolbar(1, TRUE, & uo_toolbarpos.i_toolbaralign )



See also GetToolbar GetToolbarPos SetToolbarPos



- 10.653 SetToolbarPos Sets the position of the specified toolbar.


- Table 10.812:



|To set|Use|
|---|---|
|Docking position of a docked toolbar|Syntax 1|
|Coordinates and size of a floating toolbar|Syntax 2<br><br>|



10.653.1 Syntax 1: For docked toolbars Description Sets the position of a docked toolbar. Applies to MDI frame and sheet windows Syntax



window.SetToolbarPos ( toolbarindex, dockrow, offset, insert )



- Table 10.813:




|Argument|Description|
|---|---|
|window|The MDI frame or sheet to which the toolbar belongs.|



|Argument|Description|
|---|---|
|toolbarindex|An integer whose value is the index of the toolbar whose settings you want to change.|
|dockrow|An integer whose value is the number of the docking row for the toolbar. Docking rows are numbered from left to right or top to bottom.|
|offset|An integer whose value specifies the distance of the toolbar from the beginning of the docking row. For toolbars at the top or bottom, offset is measured from the left edge. For toolbars on the left or right, offset is measured from the top.<br><br>If insert is true, the offset you specify is adjusted so that the toolbar does not overlap others in the row.<br><br>Specify an offset of 0 to position the toolbar ahead of other toolbars in dockrow.|
|insert|A boolean value specifying whether you want to insert the specified toolbar before the toolbars in dockrow causing them to move over or down a row, or you want to add toolbarindex to dockrow. Values are:<br><br>• TRUE -- Move any toolbars already in dockrow or higher rows over or down a row so that the toolbar you are moving is the only toolbar in the row.<br>• FALSE -- Add the toolbar you are moving to dockrow. Its position in relation to other toolbars in the row is determined by offset.<br>|



Return value Integer. Returns 1 if it succeeds. SetToolbarPos returns -1 if there is no toolbar for the index you specify or if an error occurs. If any argument's value is null, returns null. Usage



To find out whether the docked toolbar is at the top, bottom, left, or right edge of the window, call GetToolbar.



If the toolbar's alignment is floating, instead of docked, then values you specify with Syntax 1 of SetToolbarPos take effect when you change the alignment to a docked position with SetToolbar.



When insert is false, to move the toolbar before other toolbars in dockrow, specify a value that is less than the offset for the existing toolbars. If there is already a toolbar at offset 1, then you can move the toolbar to the beginning of the row by setting offset to 0. If offset is equal to or greater than the offset of existing toolbars, but less than their end, the newly positioned toolbar will begin just after the existing one. Otherwise, the toolbar will be positioned at offset.



If the user drags the toolbar to a docked position, the new row and offset replace values set with SetToolbarPos.
