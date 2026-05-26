# Obsolete function

ConnectToServer is obsolete, because EAServer is no longer supported since PowerBuilder 2017.



Applies to Connection objects Syntax



connection.ConnectToServer ( )



- Table 10.104:




|Argument|Description|
|---|---|
|connection|The name of the Connection object you want to use to establish the connection. The Connection object has properties that specify how the connection will be established.|



Return value Long. Returns 0 if it succeeds and one of the following values if an error occurs: 50 -- Distributed service error



- 52 -- Distributed communications error
- 53 -- Requested server not active
- 54 -- Server not accepting requests
- 55 -- Request terminated abnormally


- 56 -- Response to request incomplete
- 57 -- Connection object not connected to server 62 -- Server busy 92 -- Required property is missing or invalid Usage




Before calling ConnectToServer, you assign values to the properties of the Connection object.
