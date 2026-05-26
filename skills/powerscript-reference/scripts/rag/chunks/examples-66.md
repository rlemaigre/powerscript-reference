# Examples

These statements open and close the channel identified by handle. The channel is associated with the window w_sheet:



long handle handle = OpenChannel("Excel", "REGION.XLS", &



Handle(w_sheet) )



... // Some processing CloseChannel(handle, Handle(w_sheet))
