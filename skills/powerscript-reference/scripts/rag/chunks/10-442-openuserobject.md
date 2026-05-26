# 10.442 OpenUserObject

Adds a user object to a window or visual user object and makes all its properties and controls available to scripts.



- Table 10.553:



|To|Use|
|---|---|
|Open an instance of a specified visual user object|Syntax 1|
|Open a visual user object, allowing the application to select the user object's type at runtime|Syntax 2<br><br>|



- 10.442.1 Syntax 1: For user objects of a known datatype Description Opens a user object of a known datatype. Applies to Window objects and visual user objects Syntax objectname.OpenUserObject ( targetobjectvar {, x, y } )


- Table 10.554:




|Argument|Description|
|---|---|
|objectname|The name of the window or user object in which to open the target user object.|
|targetobjectvar|The name of the user object you want to display. You can specify a user object defined in the User Object painter (which is a user object datatype) or a variable of the desired user object datatype. OpenUserObject places a reference to the opened user object in targetobjectvar.|
|x (optional)|The x coordinate in PowerBuilder units of the target object within the first object's frame. The default is 0.|
|y (optional)|The y coordinate in PowerBuilder units of the target object within the first object's frame. The default is 0.|
