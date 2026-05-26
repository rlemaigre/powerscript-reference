# Examples

This statement in the CloseQuery event for a window asks if the user really wants to close the window and if the user answers no, prevents it from closing:



IF MessageBox("Closing window", "Are you sure?", & Question!, YesNo!) = 2 THEN RETURN 1



ELSE



RETURN 0 END IF



This script for the CloseQuery event tests to see if the DataWindow dw_1 has any pending changes. If it has, it asks the user whether to update the data and close the window, close the window without updating, or leave the window open without updating:



integer li_rc // Accept the last data entered into the datawindow dw_1.AcceptText() //Check to see if any data has changed IF dw_1.DeletedCount()+dw_1.ModifiedCount() > 0 THEN



li_rc = MessageBox("Closing", & "Update your changes?", Question!, & YesNoCancel!, 3)



//User chose to up data and close window IF li_rc = 1 THEN



Window lw_window lw_window = w_genapp_frame.GetActiveSheet() lw_window.TriggerEvent("ue_update") RETURN 0



//User chose to close window without updating ELSEIF li_rc = 2 THEN



- RETURN 0



//User canceled ELSE



- RETURN 1




END IF



ELSE // No changes to the data, window will just close RETURN 0



END IF



See also Close
