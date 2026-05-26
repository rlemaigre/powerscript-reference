# Event ID

- Table 9.44:




|Event ID|Objects|
|---|---|
|pbm_constructor|All objects|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



You can write a script for a control's Constructor event to affect the control's properties before the window is displayed.



When a window or user object opens, a Constructor event for each control in the window or user object occurs. The order of controls in a window's Control property (which is an array) determines the order in which Constructor events are triggered. If one of the controls in the window is a user object, the Constructor events of all the controls in the user object occur before the Constructor event for the next control in the window.



When you call OpenUserObject to add a user object to a window dynamically, its Constructor event and the Constructor events for all of its controls occur.



When you use the CREATE statement to instantiate a class (nonvisual) user object, its Constructor event occurs.



When a class user object variable has an Autoinstantiate setting of true, its Constructor event occurs when the variable comes into scope. Therefore, the Constructor event occurs for:



- • Global variables when the system starts up
- • Shared variables when the object with the shared variables is loaded
- • Instance variables when the object with the instance variables is created
- • Local variables when the function that declares them begins executing




Examples This example retrieves data for the DataWindow dw_1 before its window is displayed:



dw_1.SetTransObject(SQLCA) dw_1.Retrieve( )



See also Destructor Open



- 9.17 DataChange Description Occurs when the server application notifies the control that data has changed. Event ID



Table 9.45:



|Event ID|Objects|
|---|---|
|pbm_omndatachange|OLE|



Arguments None Return Values Long. Return code: Ignored See also PropertyRequestEdit PropertyChanged Rename ViewChange



- 9.18 DateChanged Description




Occurs immediately after a date is selected. Event ID



- Table 9.46:



|Event ID|Objects|
|---|---|
|pbm_mcdatechanged|MonthCalendar|



Arguments None Return Values Long. Return code: Ignored Usage



If you code a call to a MessageBox function in this event, the message box does not display if the user selects a new date using the mouse. This is because the mouse click captures the mouse. Message boxes do not display when the mouse is captured because unexpected results can occur. The message box does display if the user selects a new date using the arrow keys.



SetSelectedDate and SetSelectedRange trigger a DateChanged event. You should not call either method in a DateChanged event, particularly using the Post method.



See also DateSelected



- 9.19 DateSelected Description Occurs when the user selects a date using the mouse. Event ID


- Table 9.47:




|Event ID|Objects|
|---|---|
|pbm_mcdatesel|MonthCalendar|



Arguments None Return Values Long. Return code: Ignored Usage



This event is similar to DateChanged, but it occurs only when the user has selected a specific date using the mouse. The DateChanged event occurs whenever the date changes -- when a



date is selected using the mouse, when the date is changed in a script, and when the user uses the arrow key on the keyboard to select a different date or the arrow on the control to scroll to a different month.
