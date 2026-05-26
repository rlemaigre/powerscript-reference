# 10.444.1 Syntax 1: For windows of a known datatype Description

Opens a window object of a known datatype. OpenWithParm displays the window and makes all its properties and controls available to scripts. It also stores a parameter in the system's Message object.



Applies to Window objects Syntax



OpenWithParm ( windowvar, parameter {, parent } )



- Table 10.562:



|Argument|Description|
|---|---|
|windowvar|The name of the window you want to display. You can specify a window object defined in the Window painter (which is a window datatype) or a variable of the desired window datatype. OpenWithParm places a reference to the open window in windowvar.|
|parameter|The parameter you want to store in the Message object when the window is opened. Parameter must have one of these datatypes:<br><br>• String<br>• Numeric<br>• PowerObject<br>|
|parent (child and pop-up windows only) (optional)|The window you want make the parent of the child or pop-up window you are opening. If you open a child or pop-up window and omit parent, PowerBuilder associates the window being opened with the currently active window.|



Return value



Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, OpenWithParm returns null.



Usage



The system Message object has three properties for storing data. Depending on the datatype of the parameter specified for OpenWithParm, your scripts for the opened window would check one of the following properties.



- Table 10.563:




|Message object property|Argument datatype|
|---|---|
|Message.DoublePa|Numericrm|
|Message.PowerOb|PowerObjectjectParm (PowerBuilder objects, including user-defined structures)|
|Message.StringPar|Stringm|



In the opened window, it is a good idea to access the value passed in the Message object immediately because some other script may use the Message object for another purpose.
