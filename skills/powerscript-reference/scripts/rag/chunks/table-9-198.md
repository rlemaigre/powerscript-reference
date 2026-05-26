# Table 9.198:

|Object|See|
|---|---|
|Controls and windows, except RichTextEdit|Syntax 1|
|RichTextEdit control|Syntax 2<br><br>|



- 9.89.1 Syntax 1: For controls and windows, except RichTextEdit Description




For a window, occurs when the right mouse button is pressed in an unoccupied area of the window (any area with no visible, enabled object). The window event will occur if the cursor is over an invisible or disabled control.



For a control, occurs when the right mouse button is pressed on the control. Event ID



- Table 9.199:



|Event ID|Objects|
|---|---|
|pbm_rbuttondown|Windows and controls that can be placed on a window, except RichTextEdit|



Arguments



- Table 9.200:




|Argument|Description|
|---|---|
|flags|UnsignedLong by value (the modifier keys and mouse buttons that are pressed).<br><br>Values are:<br><br>• 1 -- Left mouse button<br>• 2 -- Right mouse button<br>• 4 -- Shift key<br>• 8 -- Ctrl key<br>• 16 -- Middle mouse button<br><br><br>In the RButtonDown event, the right mouse button is always pressed, so 2 is always summed in the value of flags.<br><br>For an explanation of flags, see Syntax 2 of MouseMove.<br><br>|
|xpos|Integer by value (the distance of the pointer from the left edge of the window's workspace in pixels).|
|ypos|Integer by value (the distance of the pointer from the top of the window's workspace in pixels).|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Examples



These statements in the RButtonDown script for the window display a pop-up menu at the cursor position. Menu4 was created in the Menu painter and includes a menu called m_language. Menu4 is not the menu for the active window and therefore needs to be created. NewMenu is an instance of Menu4 (datatype Menu4):



Menu4 NewMenu NewMenu = CREATE Menu4 NewMenu.m_language.PopMenu(xpos, ypos)



In a Multiple Document Interface (MDI) application, the arguments for PopMenu need to specify coordinates relative to the MDI frame:



NewMenu.m_language.PopMenu( & w_frame.PointerX(), w_frame.PointerY())



See also Clicked



- 9.89.2 Syntax 2: For RichTextEdit controls Description




Occurs when the user presses the right mouse button on the RichTextEdit control and the control's PopMenu property is set to false.
