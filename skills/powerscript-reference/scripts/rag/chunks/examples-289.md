# Examples

This statement asks Microsoft Excel to set the value of the data in row 5, column 7 of a worksheet called SALES.XLS to 4500:



SetRemote("R5C7", "4500", "Excel", "SALES.XLS")



See also ExecRemote GetRemote OpenChannel



- 10.635.2 Syntax 2: For DDE requests via an open channel Description




Asks a DDE server application to accept data to be stored in the specified location when you have already established a warm link by opening a channel to the server. A warm link, with an open channel, is more efficient when you intend to make several DDE requests.
