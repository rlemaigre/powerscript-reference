# See also

PrintGetPrinter PrintSetPrinter PrintSetup



- 10.496 PrintText Description Prints a single line of text starting at the specified coordinates. Syntax PrintText ( printjobnumber, string, x, y {, fontnumber } )


- Table 10.617:




|Argument|Description|
|---|---|
|printjobnumber|The number the PrintOpen function assigned to the print job.|
|string|A string whose value is the text you want to print.|
|x|An integer specifying the x coordinate in thousandths of an inch of the beginning of the text.|
|y|An integer specifying the y coordinate in thousandths of an inch of the beginning of the text.|
|fontnumber (optio|nal)The number (1 to 8) of a font defined for the job by using the PrintDefineFont function or 0 (the default font for the printer). If you omit fontnumber, the text prints in the current font for the print job.|
