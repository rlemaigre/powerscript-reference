# Examples

These statements define a new blank page and then print the bitmap in file d:\PB \BITMAP1.BMP in its original size at location 50,100:



long Job // Define a new blank page. Job = PrintOpen( ) // Print the bitmap in its original size. PrintBitmap(Job, "d:\PB\BITMAP1.BMP", 50,100, 0,0) // Send the page to the printer and close Job. PrintClose(Job)



See also PrintClose PrintLine PrintRect PrintRoundRect PrintOval PrintOpen
