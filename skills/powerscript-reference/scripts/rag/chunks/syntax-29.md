# Syntax

name.Clipboard ( { graphobject } )



- Table 10.86:




|Argument|Description|
|---|---|
|name|The name of the graph or the DataWindow control or DataStore containing the graph you want to copy to the clipboard|
|graphobject (DataW control and DataStore only) (optional)|Aindowstring whose value is the name of the graph in the DataWindow object that you want to copy to the clipboard|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, Clipboard returns null. Examples This statement copies the graph gr_products_data to the clipboard:



gr_products_data.Clipboard()



This statement copies the graph gr_employees in the DataWindow control dw_emp_data to the clipboard:



dw_emp_data.Clipboard("gr_employees")



- 10.68 Close Closes a window, an OLE storage or stream, or a trace file.


- Table 10.87:



|To close|Use|
|---|---|
|A window|Syntax 1|
|An OLEStorage object variable, saving the object and clearing connections between it and a storage file or object<br><br>|Syntax 2|
|A stream associated with the specified OLEStream object variable|Syntax 3|
|A trace file|Syntax 4<br><br>|



- 10.68.1 Syntax 1: For windows Description




Closes a window and releases the storage occupied by the window and all the controls in the window.



Applies to Window objects Syntax



Close ( windowname )



- Table 10.88:




|Argument|Description|
|---|---|
|windowname|The name of the window you want to close|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If windowname is null, Close returns null. The return value is usually not used. Usage



Use Syntax 1 to close a window and release the storage occupied by the window and all the controls in the window.



When you call Close, PowerBuilder removes the window from view, closes it, executes the scripts for the CloseQuery and Close events (if any), and then executes the rest of the statements in the script that called the Close function. Do not call Close from the CloseQuery or Close events, since this produces an endless loop.



After a window is closed, its properties, instance variables, and controls can no longer be referenced in scripts. If a statement in the script references the closed window or its properties or instance variables, an execution error will result.



Closing a window by calling the Close function in any of the window's events or in an event of any control on the window can cause PowerBuilder to crash if the Close function is not



the last statement in the event script. You can avoid this issue by calling the Close function in the last statement of the event script, or in a user-defined event that is posted from the event script. For example, the following code in the Open event script for a window called w_1 can cause a crash:



// w_1 Open event script close(this) open(w_2) // causes crash



This code does not cause a crash:



// w_1 ue_postopen event script close(this)



// w_1 Open event script open(w_2) this.Post Event ue_postopen()
