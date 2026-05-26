# Examples

The following example shows the use of the DisableCommit in a component method that performs database updates:



// Instance variables: // DataStore ids_datastore // TransactionServer ts Integer li_rc long ll_rv



li_rc = this.GetContextService("TransactionServer", & ts) IF li_rc <> 1 THEN



// handle the error END IF



... ll_rv = ids_datastore.Update()



IF ll_rv = 1 THEN



ts.EnableCommit() ELSE



ts.DisableCommit() END IF



See also EnableCommit IsInTransaction (obsolete) IsTransactionAborted (obsolete) SetAbort SetComplete Which



- 10.126 DisconnectObject Description Releases any object that is connected to the specified OLEObject variable. Applies to OLEObject objects Syntax oleobject.DisconnectObject ( )


- Table 10.155:




|Argument|Description|
|---|---|
|oleobject|The name of an OLEObject variable that you want to disconnect from an OLE object. You cannot specify an OLEObject that is the Object property of an OLE control.|



Return value Integer.



- Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -1 -- Invalid call: the argument is the Object property of a control
- -9 -- Other error If oleobject is null, DisconnectObject returns null. Usage




The OLEObject variable is used for OLE automation, in which the PowerBuilder application asks the server application to manipulate the OLE object programmatically.



For more information about OLE automation, see ConnectToObject. Examples



This example creates an OLEObject variable and connects it to a new Excel object; then after some unspecified code, it disconnects:



integer result OLEObject myoleobject



myoleobject = CREATE OLEObject result = myoleobject.ConnectToNewObject( &



"excel.application")



. . . result = myoleobject.DisconnectObject()



See also ConnectToObject ConnectToNewObject



- 10.127 DisconnectServer Description Disconnects a client application from a server application. Applies to Connection objects Syntax connection.DisconnectServer ( )


- Table 10.156:




|Argument|Description|
|---|---|
|connection|The name of the Connection object used to establish the connection you want to delete|



Return value Long.



- Returns 0 if it succeeds and one of the following values if an error occurs: 50 -- Distributed service error


- 52 -- Distributed communications error
- 53 -- Requested server not active
- 54 -- Server not accepting requests
- 55 -- Request terminated abnormally
- 56 -- Response to request incomplete


- 57 -- Not connected 62 -- Server busy Usage




After disconnecting from the server application, the client application needs to destroy the Connection object.



DisconnectServer causes all remote objects and proxy objects created for the client connection to be destroyed.
