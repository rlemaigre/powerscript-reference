# Examples

These statements start a new print job and then print PowerBuilder in the current font 3.7 inches from the left edge at the top of the page (location 3700,10):



long Job // Define a new blank page. Job = PrintOpen() // Print the text. PrintText(Job,"PowerBuilder", 3700, 10)



... // Other printing PrintClose(Job)



The following statements define a new blank page and then print Confidential in bold (as defined for font number 3), centered at the top of the page:



long Job // Start a new job and a new page. Job = PrintOpen() // Define the font.



- PrintDefineFont(Job, 3, & "Courier 10Cps", 250,700, &




Default!, AnyFont!, FALSE, FALSE)



// Print the text. PrintText(Job, "Confidential", 3700, 10, 3)



... // Other printing PrintClose(Job)



This example prints four lines of text in the middle of the page. The coordinates for PrintText establish a new vertical position for the print cursor, which the subsequent Print functions use and increment. The first Print function uses the x coordinate returned by PrintText to continue the first line. The rest of the Print functions print additional lines of text, after tabbing to the x coordinate used initially by PrintText. In this example, each Print function increments the y coordinate so that the following Print function starts a new line:



long Job // Start a new job and a new page. Job = PrintOpen() // Print the text. x = PrintText(Job,"The material ", 2000, 4000) Print(Job, x, " in this report") Print(Job, 2000, "is confidential and should not") Print(Job, 2000, "be disclosed to anyone who") Print(Job, 2000, "is not at this meeting.")



... // Other printing



PrintClose(Job)



See also Print PrintClose PrintOpen



- 10.497 PrintWidth Description Determines the width of a string using the current font of the specified print job. Syntax PrintWidth ( printjobnumber, string )

- Table 10.618:




|Argument|Description|
|---|---|
|printjobnumber|The number the PrintOpen function assigned to the print job|
|string|A string whose value is the text for which you want to determine the width|



Return value



Integer. Returns the width of string in thousandths of an inch using the current font of printjobnumber if it succeeds and -1 if an error occurs. If any argument's value is null, PrintWidth returns null. If the returned width exceeds the maximum integer limit (+32767), PrintWidth returns -1.



Examples



These statements define a new blank page and then set W to the length of the string PowerBuilder in the current font and then use the length to position the next text line:



long Job int W



// Start a new print job. Job = PrintOpen()



// Determine the width of the text. W = PrintWidth(Job,"PowerBuilder")



// Use the width to get the next print position. Print(Job, W - 500, "Features List")



See also



PrintClose PrintOpen



- 10.498 PrintX Description




Reports the x coordinate of the print cursor. Syntax



- PrintX ( printjobnumber )



Table 10.619:



|Argument|Description|
|---|---|
|printjobnumber|The number the PrintOpen function assigned to the print job|



Return value



- Integer. Returns the x coordinate of the print cursor if it succeeds and -1 if an error occurs. If any argument's value is null, PrintX returns null. Examples



These statements set LocX to the x coordinate of the cursor and print End of Report an inch beyond that location:



integer LocX long Job Job = PrintOpen()



... //Print statements LocX = PrintX(Job) Print(LocX+1000, "End of Report")



See also PrintY



10.499 PrintY



Description Reports the y coordinate of the print cursor. Syntax



PrintY ( printjobnumber )



Table 10.620:



|Argument|Description|
|---|---|
|printjobnumber|The number the PrintOpen function assigned to the print job|



Return value



- Integer. Returns the y coordinate of the cursor if it succeeds and -1 if an error occurs. If any argument's value is null, PrintY returns null. Examples These statements print a bitmap one inch below the location of the print cursor:






integer LocX, LocY long Job Job = PrintOpen()



... //Print statements LocX = PrintX(Job) LocY = PrintY(Job) + 1000



PrintBitmap(Job, "CORP.BMP", LocX, LocY, 1000,1000)
