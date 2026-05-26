# 10.443 OpenUserObjectWithParm

Adds a user object to a window or visual user object and makes all its properties and controls available to scripts, as OpenUserObject does. OpenUserObjectWithParm also stores a parameter in the system's Message object so that it is accessible to the opened object.



- Table 10.556:



|To|Use|
|---|---|
|Open an instance of a specified visual user object|Syntax 1|
|Open a visual user object, allowing the application to select the user object's type at runtime|Syntax 2<br><br>|



- 10.443.1 Syntax 1: For user objects of a known datatype Description




Opens a user object of a known datatype and stores a parameter in the system's Message object.



Applies to Window objects and visual user objects Syntax



objectname.OpenUserObjectWithParm ( targetobjectvar, parameter {, x, y } )



- Table 10.557:




|Argument|Description|
|---|---|
|objectname|The name of the window or user object in which to open the target user object.|



|Argument|Description|
|---|---|
|targetobjectvar|The name of the target object you want to display. You can specify a user object defined in the User Object painter (which is a user object datatype) or a variable of the desired user object datatype. OpenUserObject places a reference to the opened target object in targetobjectvar.|
|parameter|The parameter you want to store in the Message object when the target object is opened. Parameter must have one of these datatypes:<br><br>• String<br>• Numeric<br>• PowerObject<br>|
|x (optional)|The x coordinate in PowerBuilder units of the target object within the objectname object. The default is 0.|
|y (optional)|The y coordinate in PowerBuilder units of the target object within the objectname object. The default is 0.|
