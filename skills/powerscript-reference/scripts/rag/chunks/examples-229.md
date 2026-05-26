# Examples

This example starts a print job with a new blank page, and then prints an oval that fits in a 1inch square. The upper-left corner of the oval's bounding box is four inches from the top and three inches from the left edge of the print area. Because its height and width are equal, the oval is actually a circle:



long Job // Define a new blank page. Job = PrintOpen() // Print an oval. PrintOval(Job, 4000, 3000, 1000, 1000, 10)



... // Other printing PrintClose(Job)



See also PrintBitmap PrintClose PrintLine PrintOpen PrintRect PrintRoundRect
