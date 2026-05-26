# Event ID

- Table 9.103:



|Event ID|Objects|
|---|---|
|None|Connection, DataWindow, DataStore, OLE, OLEObject, OLETxnObject|



Arguments



- Table 9.104:




|Argument|Description|
|---|---|
|errornumber|Unsigned integer by value (PowerBuilder's error number)|
|errortext|String, read-only (PowerBuilder's error message)|
|errorwindowmenu|String, read-only (the name of the window or menu that is the parent of the object whose script caused the error)|
|errorobject|String, read-only (the name of the object whose script caused the error)|
|errorscript|String, read-only (the full text of the script in which the error occurred)|
|errorline|Unsigned integer by value (the line in the script where the error occurred)|
|action|ExceptionAction by reference. A value you specify to control the application's course of action as a result of the error. Values are:<br><br>• ExceptionFail! -- fail as if this script were not implemented. The error condition triggers any active event handlers, or if none, the SystemError event.<br>• ExceptionIgnore! -- ignore this error and return as if no error occurred (use this option with caution because the conditions that caused the error can cause another error).<br>• ExceptionRetry! -- execute the function or evaluate the expression again in case the OLE server was not ready. This option is not valid for DataWindows.<br>• ExceptionSubstituteReturnValue! -- use the value specified in the returnvalue argument instead of the value returned by the OLE server or DataWindow, and cancel the error condition.<br>|



|Argument|Description|
|---|---|
|returnvalue|Any by reference (a value whose datatype matches the expected value that the OLE server or DataWindow would have returned).<br><br>This value is used when the value of action is ExceptionSubstituteReturnValue!.|



Return Values None. Do not use a RETURN statement. Usage



DataWindow and OLE objects are dynamic. Expressions that use dot notation to refer to data and properties of these objects might be valid under some runtime conditions but not others. The Error event allows you to respond to this dynamic situation with error recovery logic.



The Error event also allows you to respond to communications errors in the client component of a distributed application. In the Error event for a custom connection object, you can tell PowerBuilder what action to take when an error occurs during communications between the client and the server.



The Error event gives you an opportunity to substitute a default value when the error is not critical to your application. Its arguments also provide information that is helpful in debugging. For example, the arguments can help you debug DataWindow data expressions that cannot be checked by the compiler -- such expressions can only be evaluated at runtime.
