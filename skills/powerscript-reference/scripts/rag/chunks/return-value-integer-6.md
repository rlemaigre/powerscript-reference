# Return value Integer.

Returns 1 if it succeeds. GetToolbar returns -1 if there is no toolbar for the index you specify or if an error occurs. If any argument's value is null, returns null.



Usage To find out the position of the docked or floating toolbar, call GetToolbarPos. Examples



This example finds out whether toolbar 1 is visible. It also gets the alignment and title of toolbar 1. The values are stored in the variables lb_visible, lta_align, and ls_title:



integer li_rtn boolean lb_visible toolbaralignment lta_align



li_rtn = w_frame.GetToolbar(1, lb_visible, & lta_align, ls_title)



This example displays the settings for the toolbar index the user specifies in sle_index. The IF and CHOOSE CASE statements convert the values to strings so they can be displayed in mle_toolbar:



integer li_index, li_rtn boolean lb_visible toolbaralignment lta_align string ls_visible, ls_align, ls_title



li_index = Integer(sle_index.Text) li_rtn = w_frame.GetToolbar(li_index, &



lb_visible, lta_align, ls_title) IF li_rtn = -1 THEN



MessageBox("Toolbars", "Can't get" &



+ " toolbar settings.")



RETURN -1 END IF IF lb_visible = TRUE THEN ls_visible = "TRUE" ELSE



ls_visible = "FALSE" END IF CHOOSE CASE lta_align



CASE AlignAtTop!



ls_align = "top" CASE AlignAtLeft!



ls_align = "left" CASE AlignAtRight!



ls_align = "right" CASE AlignAtBottom!



ls_align = "bottom" CASE Floating!



ls_align = "floating" END CHOOSE mle_1.Text = ls_visible + "~r~n" &



+ ls_align + "~r~n" &

+ ls_title



See also GetToolbarPos



SetToolbar SetToolbarPos



- 10.287 GetToolbarPos Gets position information for the specified toolbar.


- Table 10.352:



|To get|Use|
|---|---|
|Docking position of a docked toolbar|Syntax 1|
|Coordinates and size of a floating toolbar|Syntax 2<br><br>|



- 10.287.1 Syntax 1: For docked toolbars Description Gets the position of a docked toolbar. Applies to MDI frame and sheet windows Syntax window.GetToolbarPos ( toolbarindex, dockrow, offset )


- Table 10.353:




|Argument|Description|
|---|---|
|window|The MDI frame or sheet to which the toolbar belongs.|
|toolbarindex|An integer whose value is the index of the toolbar for which you want the current settings.|
|dockrow|An integer variable in which you want to store the number of the docking row for the specified toolbar. Docking rows are numbered from left to right or top to bottom.|
|offset|An integer variable in which you want to store the offset of the toolbar from the beginning of the docking row. For toolbars at the top or bottom, offset is measured from the left edge. For toolbars at the left or right, offset is measured from the top.|



Return value Integer.



Returns 1 if it succeeds. GetToolbarPos returns -1 if there is no toolbar for the index you specify or if an error occurs. If any argument's value is null, GetToolbarPos returns null.
