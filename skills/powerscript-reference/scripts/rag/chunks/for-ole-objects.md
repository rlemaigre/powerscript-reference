# For OLE objects

Open loads an OLE object contained in a file or storage into an OLE control or storage object variable. The source and the target are then connected for the purposes of saving work.



- Table 10.519:



|To open|Use|
|---|---|
|An OLE object in a file and load it into an OLE control|Syntax 3|
|An OLE object in a storage object in memory and load it into an OLE control|Syntax 4|
|An OLE object in an OLE storage file and load it into a storage object in memory|Syntax 5|
|An OLE object that is a member of an open OLE storage and load it into a storage object in memory|Syntax 6|
|A stream in an OLE storage object in memory and load it into a stream object|Syntax 7<br><br>|



For trace files Open opens the specified trace file for reading.



- Table 10.520:



|To|Use|
|---|---|
|Open a trace file|Syntax 8<br><br>|



- 10.428.1 Syntax 1: For windows of a known datatype Description




Opens a window object of a known datatype. Open displays the window and makes all its properties and controls available to scripts.



Applies to Window objects Syntax



Open ( windowvar {, parent } )



- Table 10.521:




|Argument|Description|
|---|---|
|windowvar|The name of the window you want to display. You can specify a window object defined in the Window painter (which is a window datatype) or a variable of the desired window datatype. Open places a reference to the opened window in windowvar.|
|parent (child and pop-up windows only) (optional)|The window you want make the parent of the child or pop-up window you are opening. If you open a child or pop-up window and omit parent, PowerBuilder associates the window being opened with the currently active window.|
