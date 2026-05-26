# Examples

In this example, the user has specified a toolbar index in sle_2. The example gets the toolbar position information and displays it in a MultiLineEdit mle_1:



integer li_index, li_rtn integer li_dockrow, li_offset



li_index = Integer(sle_2.Text) li_rtn = w_frame.GetToolbarPos(li_index, &



li_dockrow, li_offset)



// Report the position settings IF li_rtn = 1 THEN



mle_1.Text = String(li_dockrow) + "~r~n" &



+ String(li_offset) ELSE



mle_1.Text = "Can't get toolbar position" END IF
