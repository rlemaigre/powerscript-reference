# 10.440.1 Syntax 1: For user objects of a known datatype Description

Opens a custom visual user object of a known datatype as a tab page in a Tab control. Applies to Tab controls Syntax



tabcontrolname.OpenTab ( userobjectvar, index )



- Table 10.546:




|Argument|Description|
|---|---|
|tabcontrolname|The name of the Tab control in which you want to open the user object as a tab page.|
|userobjectvar|The name of the custom visual user object you want to open as a tab page. You can specify a custom visual user object defined in the User Object painter (which is a user object datatype) or a variable of the desired user object datatype. OpenTab places a reference to the opened custom visual user object in userobjectvar.|
|index|The number of the tab before which you want to insert the new tab. If index is 0 or greater than the number of tabs, the tab page is inserted at the end.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, OpenTab returns null. Usage



Use Syntax 1 when you know what user object you want to open. Use Syntax 2 when the application will determine what type of user object to open when the script runs.



The tab page for the user object does not become selected. Scripts for constructor events of the controls on the user object do not run until the tab page is selected.



You must open a user object before you can access the properties of the user object. If you access the user object's properties before you open it, an execution error will occur.



A user object that is part of a Tab control's definition (that is, it was added to the Tab control in the Window painter) does not have to be opened in a script. PowerBuilder opens it when it opens the window containing the Tab control.



OpenTab adds the newly opened user object to the Tab control's Control array, which is a property that lists the tab pages within the Tab control.
