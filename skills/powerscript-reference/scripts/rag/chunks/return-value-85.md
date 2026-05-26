# Return value

Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, PrintDataWindow returns null.



Usage Do not use PrintDataWindow with any Print functions except PrintOpen and PrintClose. When you use PrintDataWindow with PrintOpen and PrintClose, you can print several DataWindows in one print job. The information in each DataWindow control starts printing on a new page. When you print a DataWindow using PrintDataWindow, PowerBuilder uses the fonts and layout specified in the computer's printer setup, not the fonts and layout specified in the DataWindow. The PrintDefineFont and PrintSetFont methods also have no effect. When the DataWindow's presentation style is RichTextEdit, each row begins a new page in the printed output. For information on skipping individual pages with return codes in the PrintPage event, see the Print function. Examples



These statements send the contents of three DataWindow controls to the current printer in a single print job:



long job job = PrintOpen( ) // Each DataWindow starts printing on a new page. PrintDataWindow(job, dw_EmpHeader) PrintDataWindow(job, dw_EmpDetail) PrintDataWindow(job, dw_EmpDptSum) PrintClose(job)



See also Print PrintClose PrintOpen
