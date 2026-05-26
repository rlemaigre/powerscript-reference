# Applies to

Window objects Syntax



OpenWithParm ( windowvar, parameter, windowtype {, parent } )



- Table 10.564:



|Argument|Description|
|---|---|
|windowvar|A window variable, usually of datatype window. OpenWithParm places a reference to the open window in windowvar.|
|parameter|The parameter you want to store in the Message object when the window is opened. Parameter must have one of these datatypes:<br><br>• String<br>• Numeric<br>• PowerObject<br>|
|windowtype|A string whose value is the datatype of the window you want to open. The datatype of windowtype must be the same or a descendant of windowvar.|
|parent (child and pop-up windows only)|The window you want to make the parent of the child or pop-up window you are opening. If you open a child or pop-up window and omit parent, PowerBuilder associates the window being opened with the currently active window.|



Return value



Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, OpenWithParm returns null.



Usage



The system Message object has three properties for storing data. Depending on the datatype of the parameter specified for OpenWithParm, your scripts for the opened window would check one of the following properties.



- Table 10.565:




|Message object property|Argument datatype|
|---|---|
|Message.DoublePa|Numericrm|
|Message.PowerOb|PowerObjectjectParm (PowerBuilder objects, including user-defined structures)|
|Message.StringPar|Stringm|



In the opened window, it is a good idea to access the value passed in the Message object immediately because some other script may use the Message object for another purpose.
