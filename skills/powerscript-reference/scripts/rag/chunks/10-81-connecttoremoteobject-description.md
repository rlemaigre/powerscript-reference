# 10.81 ConnectToRemoteObject Description

Associates an OLE object with a PowerBuilder OLEObject variable and starts the server application.



Applies to OLEObject objects Syntax



oleobject.ConnectToRemoteObject ( hostname, filename {, classname } )



- Table 10.103:




|Argument|Description|
|---|---|
|oleobject|The name of an OLEObject variable that you want to connect to an OLE object. You cannot specify an OLEObject that is the Object property of an OLE control.|
|hostname|A string whose value is the name of the remote host where the COM server is located.|
|filename|A string whose value is the name of an OLE storage file. You cannot specify an empty string. COM looks for filename on the local (client) machine. If filename is located on the remote host, its location must be made available to the local host by sharing. Use the share name for the remote drive to specify a file on a remote host -- for example, \\hostname \shared_directory\test.ext.|
|classname (optiona|Al) string whose value is the name of an OLE class, which identifies an OLE server application and a type of object that the server can manipulate via OLE. If you omit classname and filename, is an OLE structured storage file, PowerBuilder uses the class ID in filename. Otherwise, PowerBuilder uses the filename extension to determine what server application to start.|



Return value Integer.



- Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -1 -- Invalid call: the argument is the Object property of a control
- -2 -- Class name not found
- -3 -- Object could not be created
- -4 -- Could not connect to object
- -5 -- Could not connect to the currently active object
- -6 -- File name is invalid
- -7 -- File not found or could not be opened
- -8 -- Load from file not supported by server


- -9 -- Other error
- -10 -- Feature not supported on this platform
- -11 -- Server name is invalid
- -12 -- Server does not support operation
- -13 -- Access to remote host denied
- -14 -- Server unavailable
- -15 -- COM+ is not loaded on this computer
- -16 -- Invalid Call: this function not applicable to OLETxnObject Usage




The OLEObject variable is used for OLE automation, in which the PowerBuilder application asks the server application to manipulate the OLE object programmatically. ConnectToRemoteObject can only be used with servers that support remote activation.



The following information applies to creating or instantiating and binding to OLE objects on remote hosts.



For general information about OLE automation, see ConnectToObject. Security



Security on the server must be configured correctly to launch objects on remote hosts. Security is configured using registry keys. You must specify attributes for allowing and disallowing launching of servers and connections to running objects to allow client access. You can update the registry manually or with a tool such as DCOMCNFG.EXE or OLE Viewer.



Registry entries The server application must be registered on both the server and the client. To find files other than OLE structured storage files, registry entries must include a file extension entry, such as .xls for Excel. If the file is a structured storage file, then COM reads the file and extracts the server identity from the file; otherwise, the registry entry for the file extension is used and the appropriate server application is launched. If the DCOM server uses a custom interface, the proxy/stub DLL for the interface must be registered on the client. The proxy/stub DLL is created by the designer of the custom interface. It handles the marshaling of parameters through the proxy on the client and the stub on the server so that a remote procedure call can take place. Examples



This example declares and creates an OLEObject variable and connects to an Excel worksheet on a remote host named falco. The drive where the worksheet resides is mapped as f:\excel on the local host:



integer result OLEObject myoleobject



myoleobject = CREATE OLEObject result = myoleobject.ConnectToRemoteObject( &



"falco", "f:\excel\expense.xls")



This example connects to the same object on the remote host but opens it as an Excel chart:



integer result OLEObject myoleobject



myoleobject = CREATE OLEObject result = myoleobject.ConnectToRemoteObject( &



"falco", "f:\excel\expense.xls", "Excel.chart")



See also ConnectToNewRemoteObject ConnectToObject DisconnectObject
