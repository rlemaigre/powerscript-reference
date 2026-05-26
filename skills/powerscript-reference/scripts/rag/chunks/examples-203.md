# Examples

These statements open a channel to the active spreadsheet REGION.XLS in Microsoft Excel and set handle to the handle to the channel:



long handle handle = OpenChannel("Excel", "REGION.XLS")



The following example opens a DDE channel to Excel and requests data from three spreadsheet cells. In the PowerBuilder application, the data is stored in the string array s_regiondata. The client window for the DDE conversation is w_ddewin:



long handle string s_regiondata[3] handle = OpenChannel("Excel", "REGION.XLS", &



Handle(w_ddewin)) GetRemote("R1C2", s_regiondata[1], handle, & Handle(w_ddewin)) GetRemote("R1C3", s_regiondata[2], handle, & Handle(w_ddewin)) GetRemote("R1C4", s_regiondata[3], handle, & Handle(w_ddewin)) CloseChannel(handle, Handle(w_ddewin))



See also CloseChannel ExecRemote GetRemote SetRemote
