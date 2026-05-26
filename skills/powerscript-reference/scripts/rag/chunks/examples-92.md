# Examples

This excerpt from a script asks the DDE channel to Microsoft Excel to save the active spreadsheet as file REGION.XLS. The OpenChannel function names the server application and the topic, so ExecRemote only needs to specify the channel handle. The script is associated with a button on a window, whose handle is specified as the last argument of OpenChannel:



long handle handle = OpenChannel("Excel", "REGION.XLS", &



Handle(Parent))



. . . // Some processing ExecRemote("[Save]", handle) CloseChannel(handle, Handle(Parent))



See also CloseChannel GetRemote OpenChannel SetRemote
