# Return value

Integer. Returns 1 if it succeeds. GetToolbarPos returns -1 if there is no toolbar for the index you specify or if an error occurs. If any argument's value is null, returns null. Usage To find out whether the toolbar is floating, call GetToolbar.



- Syntax 2 for GetToolbarPos gets the most recent floating position, even if the toolbar is currently docked. Examples This example gets the x and y coordinates and the width and height of toolbar 1: int ix, iy, iw, ih, li_rtn




li_rtn = w_frame.GetToolbarPos(1, ix, iy, iw, ih) IF li_rtn = -1 THEN



mle_1.Text = "Can't get toolbar position" ELSE



mle_1.Text = String(ix) + "~r~n" &



+ String(iy) + "~r~n" & + String(iw) + "~r~n" &

+ String(ih) END IF
