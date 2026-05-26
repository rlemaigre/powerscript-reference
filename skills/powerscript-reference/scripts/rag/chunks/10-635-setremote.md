# 10.635 SetRemote

Asks a DDE server application to accept data and store it in the specified location. There are two ways of calling SetRemote, depending on the type of DDE connection you have established.



- Table 10.788:



|To|Use|
|---|---|
|Make a single DDE request of a server application (a cold link)|Syntax 1|
|Make a DDE request of a server application when you have established a warm link by opening a channel|Syntax 2<br><br>|



- 10.635.1 Syntax 1: For single DDE requests Description




Asks a DDE server application to accept data to be stored in the specified location without requiring an open channel. This syntax is appropriate when you will make only one or two requests of the server.



Syntax



SetRemote ( location, value, applname, topicname {, bAnsi} )



- Table 10.789:




|Argument|Description|
|---|---|
|location|A string whose value is the location of the data in the server application that will accept the data. The format of location depends on the application that will receive the request.|
|value|A string whose value you want to send to the remote application.|
|applname|A string whose value is the DDE name of the server application.|
|topicname|A string identifying the data or the instance of the application that will accept the data (for example, in Microsoft Excel, the topic name could be the name of an open spreadsheet).|
|bAnsi (optional)|A boolean identifying whether the string to send to the DDE server is in ANSI format. If bAnsi is NULL, false, or empty, PowerBuilder will first try to send the data in a UNICODE formatted string. If bAnsi is true, PowerBuilder will try to send the data in an ANSI formatted string.|
