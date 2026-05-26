# Examples

This example sets the printer to the first printer in the list retrieved by the PrintGetPrinters function:



long ll_place string ls_setprn string ls_prntrs = PrintGetPrinters ( ) ll_place=pos (ls_prntrs, "~n") mle_1.text = PrintGetPrinters ( ) ls_setprn = Left (ls_prntrs, ll_place - 1) PrintSetPrinter (ls_setprn)



See also PrintGetPrinter PrintGetPrinters



- 10.493 PrintSetSpacing Description Sets the factor that PowerBuilder uses to calculate line spacing. Syntax PrintSetSpacing ( printjobnumber, spacingfactor )


- Table 10.616:




|Argument|Description|
|---|---|
|printjobnumber|The number the PrintOpen function assigned to the print job.|
|spacingfactor|The number by which you want to multiply the character height to determine the vertical line-to-line spacing. The default is 1.2.|
