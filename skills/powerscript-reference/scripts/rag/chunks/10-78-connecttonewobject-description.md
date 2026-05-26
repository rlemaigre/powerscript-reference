# 10.78 ConnectToNewObject Description

Creates a new object in the specified server application and associates it with a PowerBuilder OLEObject variable. ConnectToNewObject starts the server application if necessary.



Applies to OLEObject objects, OLETxnObject objects Syntax



oleobject.ConnectToNewObject ( classname )



- Table 10.100:




|Argument|Description|
|---|---|
|oleobject|The name of an OLEObject variable that you want to connect to an automation server or COM object. You cannot specify an OLEObject that is the Object property of an OLE control.|
|classname|A string whose value is a programmatic identifier or class ID that identifies an automation server or COM server.|



Return value Integer. Returns 0 if it succeeds and one of the following negative values if an error occurs:



- -1 -- Invalid Call: the argument is the Object property of a control
- -2 -- Class name not found


- -3 -- Object could not be created
- -4 -- Could not connect to object
- -9 -- Other error
- -15 -- COM+ is not loaded on this computer
- -16 -- Invalid Call: this function not applicable If any argument's value is null, ConnectToNewObject returns null. Usage




The OLEObject variable can be used for automation, in which the PowerBuilder application asks the server application to manipulate the OLE object programmatically. It can also be used to connect to a COM object that is registered on a local or remote computer or that is installed in COM+.



The OLETxnObject variable is used to provide COM+ transaction control to PowerBuilder clients. Calling ConnectToNewObject with an OLETxnObject variable creates a new object instance within the transaction context associated with the variable. If COM+ is not loaded on the client computer, the ConnectToNewObject call fails. Use SetAbort to abort the transaction or SetComplete to complete it if all other participants in the transaction concur.



For more information about automation and connecting to COM objects, see ConnectToObject.
