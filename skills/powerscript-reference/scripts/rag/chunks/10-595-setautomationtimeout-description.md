# 10.595 SetAutomationTimeout Description

Sets the number of milliseconds that a PowerBuilder client waits before canceling an OLE procedure call to the server.



Applies to OLEObject objects Syntax



oleobject.SetAutomationTimeout ( interval )



- Table 10.735:




|Argument|Description|
|---|---|
|oleobject|The name of an OLEObject variable containing the object for which you want to set the timeout period.|
|interval|A 32-bit signed long integer value (in milliseconds) specifying how long a PowerBuilder client waits before canceling a procedure call. The default value is 300,000 milliseconds (5 minutes). Specifying 0 or a negative value resets interval to the default value.|



Return value Integer.



- Returns 0 if it succeeds and -1 if it fails. Usage




This function passes the value of interval to PowerBuilder's implementation of the IMessageFilter interface and determines how long PowerBuilder tries to complete an OLE procedure call. The value applies only when PowerBuilder is the OLE client, not when PowerBuilder is the OLE server.
