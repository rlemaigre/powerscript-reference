# Examples

This example starts a new print job, which begins a new page, and prints a rectangle with rounded corners as a page border. Then it closes the print job, which sends the page to the printer.



The rectangle is 6 1/4 inches wide by 9 inches high and its upper corner is one inch from the top and one inch from the left edge of the print area. The border has a line thickness of 1/8 of an inch and the corner radius is 300:



long Job // Define a new blank page. Job = PrintOpen()



// Print a RoundRectangle on the page. PrintRoundRect(Job, 1000,1000, 6250,9000, &



300,300, 125)



// Send the page to the printer. PrintClose(Job)



See also PrintBitmap PrintClose PrintLine PrintOpen PrintOval PrintRect



- 10.489 PrintScreen Description Prints the screen image as part of a print job. Syntax PrintScreen ( printjobnumber, x, y {, width, height } )


- Table 10.612:




|Argument|Description|
|---|---|
|printjobnumber|The number the PrintOpen function assigns to the print job.|
|x|An integer whose value is the x coordinate on the page, in thousandths of an inch, of the upper-left corner of the screen image.|
|y|An integer whose value is the y coordinate on the page, in thousandths of an inch, of the upper-left corner of the screen image.|
|width (optional)|The integer width of the printed screen in thousandths of an inch. If you omit width, PowerBuilder prints the screen at its original width. If you specify width, you must also specify height.|
|height (optional)|The integer height of the printed screen in thousandths of an inch. If you omit height, PowerBuilder prints the screen at its original height.|
