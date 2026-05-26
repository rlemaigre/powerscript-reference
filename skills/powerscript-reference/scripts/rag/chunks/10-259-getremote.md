# 10.259 GetRemote

Asks a DDE server application to provide data and stores that data in the specified variable. There are two ways of calling GetRemote, depending on the type of DDE connection you have established.



- Table 10.316:



|To|Use|
|---|---|
|Make a single request of a DDE server application (called a cold link)|Syntax 1|
|Request data from a DDE server application after you have opened a channel (called a warm link)|Syntax 2<br><br>|



- 10.259.1 Syntax 1: For single DDE requests Description




Asks a DDE server application to provide data and stores that data in the specified variable without requiring an open channel. This syntax is appropriate when you will make only one or two requests of the server.



Syntax



GetRemote ( location, target, applname, topicname {, bAnsi} )



- Table 10.317:




|Argument|Description|
|---|---|
|location|A string whose value is the location of the data you want returned from the DDE server application. The format of location depends on the particular DDE server application that will receive the message.|
|target|A string variable into which the returned data will be placed.|
|applname|A string whose value is the DDE name of the DDE server application. If another PowerBuilder application is the DDE server, this is the application name specified in its StartServerDDE function call.|
|topicname|A string identifying the data or the instance of the application you want to use with the command (for example, in Microsoft Excel, the topic name could be system or the name of an open spreadsheet). If another PowerBuilder application is the DDE server, this is the topic specified in its StartServerDDE function call.|
|bAnsi (optional)|A boolean identifying whether the string to get from the DDE server is in ANSI format. If bAnsi is NULL, false, or empty, PowerBuilder will first try to get the DDE data as a UNICODE formatted string. If bAnsi is true, PowerBuilder will try to get the DDE data as an ANSI formatted string.|



Return value Integer. Returns 1 if it succeeds and a negative integer if an error occurs. Values are:



- -1 -- Link was not started


- -2 -- Request denied If any argument's value is null, GetRemote returns null. Usage




When using DDE, your PowerBuilder application must have an open window, which will be the client window. For this syntax, the active window is the DDE client window.



For more information about DDE channels and warm and cold links, see the two syntaxes of the ExecRemote function.
