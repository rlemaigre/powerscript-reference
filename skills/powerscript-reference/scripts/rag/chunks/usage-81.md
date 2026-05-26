# Usage

PowerBuilder manages print jobs by opening the job, sending data, and closing the job. When you use Syntax 2 or 3, you must call the PrintOpen function and the PrintClose or PrintCancel functions yourself to manage the process.



PowerBuilder copies the area of the screen occupied by the control to the printer. If any other window or application displays on the screen in that area in front of the control while the control is being printed, that window or application will also be printed.



Print area and margins The print area is the physical page size minus any margins in the printer itself. Examples This example prints the CommandButton cb_close in its original size at location 500, 1000:



long Job Job = PrintOpen( ) cb_close.Print(Job, 500,1000) PrintClose(Job)



This example opens a print job, which defines a new page, then prints a title using the third syntax of Print. Then it uses this syntax of Print to print a graph on the first page and a window on the second page:



long Job Job = PrintOpen( ) Print(Job, "Report of Year-to-Date Sales") gr_sales1.Print(Job, 1000,PrintY(Job)+500, &



6000,4500) PrintPage(Job) w_sales.Print(Job, 1000,500, 6000,4500) PrintClose(Job)



See also PrintCancel PrintClose PrintOpen PrintScreen



- 10.474.2 Syntax 2: For printing text in a print job Description




Sends one or more lines of text as part of a print job that you have opened with the PrintOpen function. You can specify tab settings before or after the text. The tab settings control the text's horizontal position on the page.



Applies to Not object-specific Syntax



Print ( printjobnumber, { tab1, } string {, tab2 } )
