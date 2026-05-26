# 10.477 PrintClose Description

Sends the current page to the printer (or spooler) and closes the job. Call PrintClose as the last command of a print job unless PrintCancel function has closed the job.



Syntax



PrintClose ( printjobnumber )



Table 10.602:



|Argument|Description|
|---|---|
|printjobnumber|The number the PrintOpen function assigned to the print job|



Return value



Integer. Returns 1 if it succeeds and -1 if an error occurs. If printjobnumber is null, PrintClose returns null.



Usage



When you open a print job, you must close (or cancel) it. To avoid hung print jobs, process and close a print job in the same event in which you open it.



Examples



This example opens a print job, which creates a blank page, prints a bitmap on the page, then sends the current page to the printer or spooler and closes the job:



ulong Job // Begin a new job and a new page. Job = PrintOpen( ) // Print the bitmap in its original size. PrintBitmap(Job, d:\PB\BITMAP1, 5,10, 0,0) // Send the page to the printer and close Job. PrintClose(Job)



See also PrintCancel PrintOpen
