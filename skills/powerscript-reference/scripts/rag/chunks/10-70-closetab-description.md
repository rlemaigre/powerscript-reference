# 10.70 CloseTab Description

Removes a tab page from a Tab control that was opened previously with the OpenTab or OpenTabWithParm function. CloseTab executes the scripts for the user object's Destructor event.



Applies to Tab controls Syntax



tabcontrolname.CloseTab ( userobjectvar )



- Table 10.93:




|Argument|Description|
|---|---|
|tabcontrolname|The name of the Tab control containing the tab page you want to close|
|userobjectvar|The name of the user object you want to close|



Return value Integer.



- Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, CloseTab returns null. The return value is usually not used. Usage




CloseTab closes a user object that has been opened as a tab page and releases the storage occupied by the object and its controls.



When you call CloseTab, PowerBuilder removes the tab page from the control, closes it, executes the script for the Destructor event (if any), and then executes the rest of the statements in the script that called the CloseTab function.



CloseTab also removes the user object from the Tab control's Control array, which is a property that lists the tab pages within the Tab control. If the closed tab page was not the last element in the array, the index for all subsequent tab pages is reduced by one.



After a user object is closed, its properties, instance variables, and controls can no longer be referenced in scripts. If a statement in the script references the closed user object or its properties or instance variables, an execution error will result.
