# 10.79 ConnectToNewRemoteObject Description

Creates a new OLE object in the specified remote server application (if security on the server allows it) and associates the new object with a PowerBuilder OLEObject variable. ConnectToNewRemoteObject starts the server application if necessary.



Applies to OLEObject objects Syntax



oleobject.ConnectToNewRemoteObject ( hostname, classname )



- Table 10.101:




|Argument|Description|
|---|---|
|oleobject|The name of an OLEObject variable which you want to connect to an OLE object. You cannot specify an OLEObject that is the Object property of an OLE control.|
|hostname|A string whose value is the name of the remote host where the COM server is located.|
|classname|A string whose value is the name of an OLE class, which identifies an OLE server application and a type of object that the server can manipulate via OLE.|



Return value Integer. Returns 0 if it succeeds and one of the following negative values if an error occurs:



- -1 -- Invalid call: the argument is the Object property of a control
- -2 -- Class name not found
- -3 -- Object could not be created
- -4 -- Could not connect to object
- -9 -- Other error
- -10 -- Feature not supported on this platform


- -11 -- Server name is invalid
- -12 -- Server does not support operation
- -13 -- Access to remote host denied
- -14 -- Server unavailable
- -15 -- COM+ is not loaded on this computer
- -16 -- Invalid Call: this function not applicable to OLETxnObject Usage




The OLEObject variable is used for OLE automation, in which the PowerBuilder application asks the server application to manipulate the OLE object programmatically. ConnectToNewRemoteObject can only be used with servers that support remote activation. For more information about OLE automation, see ConnectToObject. For information about connecting to objects on a remote host, see ConnectToRemoteObject. Examples



This example creates an OLEObject variable and calls ConnectToNewRemoteObject to create and connect to a new Excel object on a remote host named ulysses:



integer result OLEObject myoleobject



myoleobject = CREATE OLEObject result = myoleobject.ConnectToNewRemoteObject( &



"ulysses", "Excel.application")



See also ConnectToObject ConnectToRemoteObject
