# Examples

This example displays the printer setup dialog box for the last printer in the list retrieved by the PrintGetPrinters function.



long ll_place string ls_setptr string ls_prntrs = PrintGetPrinters ( )



ll_place=lastpos (ls_prntrs, "~n") ls_setptr = Mid (ls_prntrs, ll_place + 1) PrintSetPrinter (ls_setptr) PrintSetupPrinter ()
