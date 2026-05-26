# Examples

This example opens a print job, prints the string Appeon Corporation in the default font, and then starts a new line:



long Job // Define a blank page and assign the job an ID Job = PrintOpen( ) // Print the string and then start a new line Print(Job, "Appeon Corporation")



... PrintClose(Job)



This example opens a print job, prints the string Appeon Corporation in the default font, tabs 5 inches from the left edge of the print area but does not start a new line:



long Job // Define a blank page and assign the job an ID Job = PrintOpen( ) // Print the string but do not start a new line Print(Job, "Appeon Corporation", 5000)



... PrintClose(Job)



The first Print statement below tabs half an inch from the left edge of the print area, prints the string Appeon Corporation, and then starts a new line. The second Print statement tabs one inch from the left edge of the print area, prints the string Directors:, and then starts a new line:



long Job // Define a blank page and assign the job an ID Job = PrintOpen( ) // Print the string and start a new line Print(Job, 500, "Appeon Corporation") // Tab 1 inch from the left edge and print Print(Job, 1000, "Directors:")



... PrintClose(Job)



The first Print statement below tabs half an inch from the left edge of the print area prints the string Appeon Corporation, and then tabs 6 inches from the left edge of the print area but does not start a new line. The second Print statement prints the current date and then starts a new line:



long Job // Define a blank page and assign the job an ID Job = PrintOpen( ) // Print string and tab 6 inches from the left edge Print(Job, 500, "Appeon Corporation", 6000) // Print the current date on the same line Print(Job, String(Today()))



...



PrintClose(Job)



In a window that displays a database error message in a MultiLineEdit mle_message, the following script for a Print button prints a title with the date and time and the message:



long li_prt li_prt = PrintOpen("Database Error") Print(li_prt, "Database error - " &



+ String(Today(), "mm/dd/yyyy") &

+ " - " &

+ String(Now(), "HH:MM:SS")) Print(li_prt, " ") Print(li_prt, mle_message.text) PrintClose(li_prt)



See also PrintCancel PrintClose PrintDataWindow PrintOpen PrintScreen PrintSetFont PrintSetSpacing



- 10.474.3 Syntax 3: For RichTextEdit controls Description Prints the contents of a RichTextEdit control. Applies to RichTextEdit controls Syntax rtename.Print ( copies, pagerange, collate, canceldialog )


- Table 10.599:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit control whose contents you want to print.|
|copies|An integer specifying the number of copies you want to print.|
|pagerange|A string describing the pages you want to print. To print all pages, specify an empty string (""). To specify a subset of pages, use dashes to specify a range and commas to separate ranges and individual page numbers, for example, "1-3" or "2,5,8-10".<br><br>When rtename shares data with a DataWindow, pagerange refers to pages based on the total number of pages in the control, not within each instance of the document.|
|collate|A boolean value indicating whether you want the copies collated. Values are:|



|Argument|Description|
|---|---|
| |TRUE -- Collate copies FALSE -- Do not collate copies|
|canceldialog|A boolean value indicating whether you want to display a nonmodal dialog box that allows the user to cancel printing. Values are:<br><br>TRUE -- Display the dialog box FALSE -- Do not display the dialog box|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage



When the RichTextEdit control shares data with a DataWindow, the total number of pages contained in the control is the page count of the document multiplied by the row count of the DataWindow.



You can specify printed page numbers by including an input field in the header or footer of your document.
