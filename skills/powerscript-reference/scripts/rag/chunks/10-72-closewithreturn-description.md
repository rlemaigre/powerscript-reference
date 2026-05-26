# 10.72 CloseWithReturn Description

Closes a window and stores a return value in the Message object. You should use CloseWithReturn only for response windows.



Applies to Window objects Syntax



CloseWithReturn ( windowname, returnvalue )



- Table 10.95:




|Argument|Description|
|---|---|
|windowname|The name of the window you want to close.|
|returnvalue|The value you want to store in the Message object when the window is closed. Returnvalue must be one of these datatypes:<br><br>• String<br>• Numeric<br>• PowerObject<br>|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, CloseWithReturn returns null. The return value is usually not used. Usage



The purpose of CloseWithReturn is to close a response window and return information from the response window to the window that opened it. Use CloseWithReturn to close a window,



release the storage occupied by the window and all the controls in the window, and return a value.



Just as with Close, CloseWithReturn removes a window from view, closes it, and executes the script for the CloseQuery and Close events, if any. Do not call Close or CloseWithReturn from these events, since this produces an endless loop.



Before executing the event scripts, CloseWithReturn stores returnvalue in the Message object, and PowerBuilder executes the rest of the script that called the CloseWithReturn function.



After a window is closed, its properties, instance variables, and controls can no longer be referenced in scripts. If a statement in the script references the closed window or its properties or instance variables, an execution error results.



PowerBuilder stores returnvalue in the Message object properties according to its datatype. In the script that called CloseWithReturn, you can access the returned value by specifying the property of the Message object that corresponds to the return value's datatype.



- Table 10.96: Message object properties where return values are stored




|Return value datatype|Message object property|
|---|---|
|Numeric|Message.DoubleParm|
|PowerObject (such as a structure)|Message.PowerObjectParm|
|String|Message.StringParm|
