# Examples

In this example, a script for a Print button opens a print job and then opens a window with a cancel button. If the user clicks on the cancel button, its script sets a global variable that indicates that the user wants to cancel the job. After each printing command in the Print button's script, the code checks the global variable and cancels the job if its value is true.



The definition of the global variable is:



boolean gb_printcancel



The script for the Print button is:



long job, li gb_printcancel = FALSE job = PrintOpen("Test Page Breaks") IF job < 1 THEN



MessageBox("Error", "Can't open a print job.") RETURN



END IF Open(w_printcancel) PrintBitmap(Job, "d:\PB\bitmap1.bmp", 5, 10, 0, 0) IF gb_printcancel = TRUE THEN



PrintCancel(job) RETURN



END IF



... // Additional printing commands,



... // including checking gb_printcancel PrintClose(job) Close(w_printcancel)



The script for the cancel button in the second window is:



gb_printcancel = TRUE Close(w_printcancel)



See also Print PrintClose



PrintOpen
