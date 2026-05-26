# Examples

These statements determine the active sheet in the MDI frame window w_frame and change the text of the menu selection m_close on the menu m_file on the menu bar m_main. If no sheet is active, the text is Close Window:



// Declare variable for active sheet window activesheet string mtext



activesheet = w_frame.GetActiveSheet() IF IsValid(activesheet) THEN



// There is an active sheet, so get its title; // change the text of the menu to read // Close plus the title of the active sheet mtext = "Close " + activesheet.Title m_main.m_file.m_close.Text = mtext



ELSE



// No sheet is active, menu says Close Window m_main.m_file.m_close.Text = "Close Window"



END IF



See also IsValid
