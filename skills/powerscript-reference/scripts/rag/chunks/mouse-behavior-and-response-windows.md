# Mouse behavior and response windows

Controls capture the mouse in order to perform certain operations. For instance, CommandButtons capture during mouse clicks, edit controls capture for text selection, and scroll bars capture during scrolling. If a response window is opened while the mouse is captured, unexpected results can occur.



Because a response window grabs focus, you should not open it when focus is changing, such as in a LoseFocus event.



Examples This statement opens an instance of a window named w_employee:



Open(w_employee)



The following statements open an instance of a window of the type w_employee:



w_employee w_to_open Open(w_to_open)



The following code opens an instance of a window of the type child named cw_data and makes w_employee the parent:



child cw_data Open(cw_data, w_employee)



The following code opens two windows of type w_emp:



w_emp w_e1, w_e2 Open(w_e1) Open(w_e2)



See also Close OpenWithParm Show



- 10.428.2 Syntax 2: For windows of unknown datatype Description




Opens a window object when you do not know its datatype until the application is running. Open displays the window and makes all its properties and controls available to scripts.



Applies to Window objects Syntax



Open ( windowvar, windowtype {, parent } )



- Table 10.522:




|Argument|Description|
|---|---|
|windowvar|A window variable, usually of datatype window. Open places a reference to the opened window in windowvar.|
|windowtype|A string whose value is the datatype of the window you want to open. The datatype of windowtype must be the same or a descendant of windowvar.|
|parent (child and pop-up windows only) (optional)|The window you want to make the parent of the child or pop-up window you are opening. If you open a child or pop-up window and omit parent, PowerBuilder associates the window being opened with the currently active window.|
