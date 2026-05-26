# Event ID

- Table 9.111:



|Event ID|Objects|
|---|---|
|None|OLE, OLEObject, OLETxnObject|



Arguments



- Table 9.112:




|Argument|Description|
|---|---|
|resultcode|UnsignedLong by value (a PowerBuilder number identifying the exception that occurred on the server).|
|exceptioncode|UnsignedLong by value (a number identifying the error that occurred on the server. For the meaning of the code, see the server documentation).|
|source|String by value (the name of the server, which the server provides).|
|description|String by value (a description of the exception, which the server provides).|
|helpfile|String by value (the name of a Help file containing information about the exception, which the server provides).|
|helpcontext|UnsignedLong by value (the context ID of a Help topic in helpfile containing information about the exception, which the server provides).|



|Argument|Description|
|---|---|
|action|ExceptionAction by reference. A value you specify to control the application's course of action as a result of the error. Values are:<br><br>• ExceptionFail! -- fail as if this script were not implemented. The error condition triggers the SystemError event.<br>• ExceptionIgnore! -- ignore this error and return as if no error occurred (use this option with caution because the conditions that caused the error can cause another error).<br>• ExceptionRetry! -- execute the function or evaluate the expression again in case the OLE server was not ready.<br>• ExceptionSubstituteReturnValue! -- use the value specified in the returnvalue argument instead of the value returned by the OLE server or DataWindow and cancel the error condition.<br>|
|returnvalue|Any by reference. A value whose datatype matches the expected value that the OLE server would have returned. This value is used when the value of action is ExceptionSubstituteReturnValue!.|



Return Values None. (Do not use a RETURN statement.) Usage



OLE objects are dynamic. Expressions that refer to data and properties of these objects might be valid under some runtime conditions but not others. If the expression causes an exception on the server, PowerBuilder triggers the ExternalException event. The ExternalException event gives you information about the error that occurred on the OLE server.



The server defines what it considers exceptions. Some errors, such as mismatched datatypes, generally do not cause an exception but do trigger the Error event. In some cases you might not consider the cause of the exception to be an error. To determine the reason for the exception, see the documentation for the server.



When an exception occurs because of a call to an OLE server, error handling occurs like this:



- 1. The ExternalException event occurs.
- 2. If the ExternalException event has no script or its action argument is set to ExceptionFail!, the Error event occurs.
- 3. If the Error event has no script or its action argument is set to ExceptionFail!, any active exception handler for an OLERuntimeError or its RuntimeError ancestor is invoked.
- 4. If no exception handler exists, or if the existing exception handlers do not handle the exception, the SystemError event is triggered.


- 5. If the SystemError event has no script, an application error occurs and the application is terminated.
