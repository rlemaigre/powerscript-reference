# Event ID

- Table 9.170:



|Event ID|Objects|
|---|---|
|pbm_sbnthumbtrack|HScrollBar, HTrackBar, VScrollBar, VTrackBar|



Arguments



- Table 9.171:




|Argument|Description|
|---|---|
|scrollpos|Integer by value (a number indicating position of the scroll box within the range of values specified by the MinPosition and MaxPosition properties)|



The Moved event updates the Position property of the scroll bar with the value of scrollpos. Examples



This statement in the Moved event displays the new position of the scroll box in a StaticText control:



st_1.Text = "Moved " + String(scrollpos)



See also LineDown LineLeft LineRight LineUp PageDown PageLeft PageRight PageUp



- 9.72 Notify Description Occurs when a TreeView control sends a WM_NOTIFY message to its parent. Event ID


- Table 9.172:



|Event ID|Objects|
|---|---|
|pbm_notify|TreeView controls|



Arguments



- Table 9.173:




|Argument|Description|
|---|---|
|wparam|UnsignedLong by value containing the ID of the control sending the message. This value is not guaranteed to be unique.|
|lparam|Long by value containing a pointer to a structure that contains the window handle and identifier of the control sending a message and a notification code.|



The lparam argument can point to an NMHDR structure or to a larger structure that contains an NMHDR structure as its first member. Since the wparam value is not guaranteed to be unique, you should use the identifier in the NMHDR structure.



You can use this event to process custom drawing messages.



- 9.73 Open The Open event has different arguments for different objects:


- Table 9.174:



|Object|See|
|---|---|
|Application|Syntax 1|
|Window|Syntax 2<br><br>|



- 9.73.1 Syntax 1: For the application object Description Occurs when the user starts the application. Event ID


- Table 9.175:



|Event ID|Objects|
|---|---|
|None|Application|



Arguments



- Table 9.176:




|Argument|Description|
|---|---|
|commandline|String by value. Additional arguments are included on the command line after the name of the executable program.|



Return Values None (do not use a RETURN statement) Usage



This event can establish database connection parameters and open the main window of the application.
