# Syntax

PrintSetFont ( printjobnumber, fontnumber )



- Table 10.614:



|Argument|Description|
|---|---|
|printjobnumber|The number the PrintOpen function assigned to the print job|
|fontnumber|The number (1 to 8) of a font defined for the job in PrintDefineFont or 0 (the default font for the printer)|



Return value



Integer. Returns the character height of the current font if it succeeds and -1 if an error occurs. If any argument's value is null, PrintSetFont returns null.



Examples



This example starts a new print job and specifies that font number 2 is Courier, 18 point, bold, default pitch, in modern font, with no italic or underline. The PrintSetFont statement sets the current font to font 2. Then the Print statement prints the company name:



long Job // Start a new print job and a new page. Job = PrintOpen() // Define the font for Job.



- PrintDefineFont(Job, 2, "Courier 10Cps", & 250, 700, Default!, Modern!, FALSE, FALSE)




// Set the font for Job. PrintSetFont(Job, 2)



// Print the company name in the specified font. Print(Job,"Appeon Corporation")



See also PrintDefineFont PrintOpen



10.492 PrintSetPrinter



Description Sets the printer to use for the next print function call. This function does not affect open jobs. Syntax



PrintSetPrinter ( printername )



- Table 10.615:




|Argument|Description|
|---|---|
|printername|String for the name of the printer you want to use|
