# Examples

These statements start a new page in a print job and then print a line starting at 0,5 and ending at 7500,5 with a thickness of 10/1000 of an inch:



long Job Job = PrintOpen( )



... // various print commands // Start a new page. PrintPage(Job) // Print a line at the top of the page PrintLine(Job,0,5,7500,5,10)



... // Other printing PrintClose(Job)



See also PrintBitmap PrintClose PrintOpen PrintOval PrintRect PrintRoundRect



- 10.484 PrintOpen Description Opens a print job and assigns it a number, which you use in other printing statements. Syntax PrintOpen ( { jobname {, showprintdialog } } )


- Table 10.607:




|Argument|Description|
|---|---|
|jobname (optional)|A string specifying a name for the print job. The name is displayed in the Windows Print Manager dialog box and in the Spooler dialog box.|
|showprintdialog (o|Aptional)boolean value indicating whether you want to display the system Print dialog box that allows the user to select a printer or set print properties. Values are:<br><br>TRUE -- Display the dialog box FALSE -- (default) Do not display the dialog box|
