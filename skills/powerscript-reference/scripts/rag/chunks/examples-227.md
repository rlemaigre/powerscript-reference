# Examples

This example places the current printer name, driver, and port in separate SingleLineEdit textboxes:



String ls_fullstring ls_fullstring=PrintGetPrinter() String ls_name, ls_driver, ls_port, ls_temp Long ll_place ll_place=pos (ls_fullstring, "~t") ls_name=left(ls_fullstring, ll_place -1) ls_temp=mid(ls_fullstring, ll_place +1) ll_place=pos (ls_temp, "~t") ls_driver=left(ls_temp, ll_place -1) ls_port=mid(ls_temp, ll_place +1)



- sle_1.text=ls_name
- sle_2.text=ls_driver
- sle_3.text=ls_port




See also PrintGetPrinters PrintSetPrinter



- 10.482 PrintGetPrinters Description Gets the list of available printers. Syntax PrintGetPrinters ( ) Return value String. Each printer is listed in the string in the format printername ~t drivername ~t port ~n. Usage



The return string can be loaded into a DataWindow using ImportString or separated using the ~n as shown in the example.



Examples



This example parses printer names from the return string on the PrintGetPrinters call, then places each printer name in an existing SingleLineEdit control. If you have more printers than SingleLineEdit boxes, the last SingleLineEdit contains a string for all the printers that are not listed in the other SingleLineEdits:



singlelineedit sle long ll_place, i, k string ls_left, ls_prntrs



ls_prntrs = PrintGetPrinters ( ) k = upperbound(control) FOR i= k to 1 STEP -1



IF parent.control[i].typeof()=singlelineedit! then sle=parent.control[i] ll_place=pos (ls_prntrs, "~n" ) ls_left = Left (ls_prntrs, ll_place - 1) sle.text = ls_left ls_prntrs = Mid (ls_prntrs, ll_place + 1)



END IF NEXT sle.text = ls_prntrs



See also ImportString method for DataWindows in Section 9.100, “ImportString” in DataWindow Reference.



PrintGetPrinter PrintSetPrinter



- 10.483 PrintLine Description




Draws a line of a specified thickness between the specified endpoints on the current print page.
