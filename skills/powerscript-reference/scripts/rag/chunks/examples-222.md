# Examples

This statement prints one copy of pages 1 to 5 of the document in the RichTextEdit control rte_1. The output is not collated and a dialog box displays to allow the user to cancel the printing:



rte_1.Print(1, "1-5", FALSE, TRUE)



See also Preview PrintEx



- 10.475 PrintBitmap Description Writes a bitmap at the specified location on the current page. Syntax PrintBitmap ( printjobnumber, bitmap, x, y, width, height )


- Table 10.600:




|Argument|Description|
|---|---|
|printjobnumber|The number the PrintOpen function assigned to the print job.|
|bitmap|A string whose value is the file name of the bitmap image.|
|x|An integer whose value is the x coordinate (in thousandths of an inch) on the page of the bitmap image.|
|y|An integer whose value is the y coordinate (in thousandths of an inch) on the page of the bitmap image.|



|Argument|Description|
|---|---|
|width|The integer width of the bitmap image in thousandths of an inch. If width is 0, PowerBuilder uses the original width of the image.|
|height|The integer height of the bitmap image in thousandths of an inch. If height is 0, PowerBuilder uses the original height of the image.|
