# Syntax

objectname.OpenUserObject ( targetobjectvar, targetobjecttype {, x, y } )



- Table 10.555:




|Argument|Description|
|---|---|
|objectname|The name of the window or user object in which to open the target user object.|
|targetobjectvar|A variable of datatype DragObject. OpenUserObject places a reference to the opened user object in targetobjectvar.|
|targetobjecttype|A string whose value is the name of the user object you want to display. The datatype of targetobjecttype must be a descendant of targetobjectvar.|
|x (optional)|The x coordinate in PowerBuilder units of the user object within the first object's frame. The default is 0.|
|y (optional)|The y coordinate in PowerBuilder units of the user object within the first object's frame. The default is 0.|
