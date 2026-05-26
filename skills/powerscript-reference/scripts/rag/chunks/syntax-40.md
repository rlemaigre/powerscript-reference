# Syntax

ExecRemote ( command, handle {, windowhandle } )



- Table 10.169:




|Argument|Description|
|---|---|
|command|A string whose value is the command you want a DDE server application to execute. The format of the command depends on the DDE application you want to execute the command.|
|handle|A long that identifies the channel to the DDE server application. The OpenChannel function returns handle when you call it to open a DDE channel.|
|windowhandle (op|tional)The handle to the window that you want to act as the DDE client. Specify this parameter to control which window is acting as the DDE client when you have more than one open window. If you do not specify windowhandle, the active window acts as the DDE client.|
