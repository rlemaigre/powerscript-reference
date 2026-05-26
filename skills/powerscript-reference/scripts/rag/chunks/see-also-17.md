# See also

BuildModel



- 10.137 ExecRemote Asks a DDE server application to execute the specified command.


- Table 10.167:



|To send|Use|
|---|---|
|A single command to a DDE server application (a cold link)|Syntax 1|
|A command to a DDE server application after you have opened a channel (a warm link)|Syntax 2<br><br>|



- 10.137.1 Syntax 1: For sending single commands Description Sends a single command to a DDE server application, called a cold link. Syntax ExecRemote ( command, applname, topicname )


- Table 10.168:




|Argument|Description|
|---|---|
|command|A string whose value is the command you want a DDE server application to execute. To determine the correct command format, see the documentation for the server application.|
|applname|A string whose value is the DDE name of the server application.|
|topicname|A string identifying the data or the instance of the DDE application you want to use with the command. In Microsoft Excel, for example, the topic name could be system or the name of an open spreadsheet.|



Return value Integer. Returns 1 if it succeeds. If it fails, it returns a negative integer. Possible values are:



- -1 -- Link was not started
- -2 -- Request denied
- -3 -- Could not terminate server If any argument's value is null, ExecRemote returns null. Usage




The DDE server application must already be running when you call a DDE function. Use the Run function to start the application if necessary.



The ExecRemote function allows you to start a cold link or use a warm link between the PowerBuilder client application and the DDE server application.



A cold link is a single DDE command and is not associated with a DDE channel. Each time you call ExecRemote without opening a channel (Syntax 1), Windows polls all running applications to find one that acknowledges the request. The is also true for the related functions GetRemote and SetRemote.



A warm link is associated with a DDE channel (see Syntax 2). A DDE hot link, which enables automatic updating of data in the PowerBuilder client application, involves other functions. For more information, see the StartHotLink function. Examples



This statement asks Microsoft Excel to save the active spreadsheet as file REGION.XLS. A channel is not open, so the function arguments specify the application and topic (the name of the spreadsheet):



ExecRemote("[Save()]", "Excel", "REGION.XLS")



See also CloseChannel GetRemote OpenChannel SetRemote StartHotLink



- 10.137.2 Syntax 2: For commands over an opened channel Description




Sends a command to a DDE server application when you have already called OpenChannel and established a warm link with the server.
