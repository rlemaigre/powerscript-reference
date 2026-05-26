# Examples

These statements open a print job with a new page and draw a 1-inch square with a line thickness of 1/8 of an inch. The square's upper left corner is four inches from the left and three inches from the top of the print area:



long Job // Define a new blank page. Job = PrintOpen() // Print the rectangle on the page. PrintRect(Job, 4000,3000, 1000,1000, 125)



... // Other printing PrintClose(Job)



See also PrintBitmap PrintClose PrintLine PrintOpen PrintOval PrintRoundRect
