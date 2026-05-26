# 10.71 CloseUserObject Description

Closes a visual user object by removing it from view and executing the scripts for its Destructor event.



Applies to Window objects and visual user objects Syntax



objectname.CloseUserObject ( targetobjectname )



- Table 10.94:




|Argument|Description|
|---|---|
|objectname|The name of the window or user object that will close the target user object|
|targetobjectname|The name of the visual user object to be closed.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, CloseUserObject returns null. The return value is usually not used. Usage



Use CloseUserObject to close a user object and release the storage occupied by the object and its controls.



When you call CloseUserObject, PowerBuilder removes the target object from view, closes it, executes the script for the Destructor event (if any), and then executes the rest of the statements in the script that called the CloseUserObject function.



CloseUserObject also removes the target object from the first object's Control array, which is a property that lists the object's controls. If the closed user object was not the last element in the array, the index for all subsequent user objects is reduced by one.



After the target object is closed, its properties, instance variables, and controls can no longer be referenced in scripts. If a script references the closed user object or its properties or instance variables, an execution error results.
