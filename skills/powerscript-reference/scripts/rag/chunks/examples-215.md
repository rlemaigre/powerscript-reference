# Examples

In a script for a control in a window, the following example stores the distance of the pointer from the edge of the window in the variable li_dist. If the pointer is 5 units from the left edge of the window, li_dist equals 5:



integer li_dist li_dist = Parent.PointerX()



This statement in a control's RButtonDown script displays a pop-up menu m_Appl.M_Help at the cursor position:



m_Appl.m_Help.PopMenu(Parent.PointerX(), & Parent.PointerY())



If the previous example was part of the window's RButtonDown script, instead of a control in the window, the following statement displays the pop-up menu at the cursor position:



m_Appl.m_Help.PopMenu(This.PointerX(), & This.PointerY())



See also PointerY PopMenu WorkSpaceHeight WorkSpaceWidth



- WorkSpaceX

- WorkSpaceY


- 10.460 PointerY Description Determines the distance of the pointer from the top of the specified object. Applies to Any object or control Syntax

- objectname.PointerY ( )


- Table 10.581:




|Argument|Description|
|---|---|
|objectname|The name of the control or window for which you want the pointer's distance from the top. If you do not specify objectname, PointerY reports the distance from the top of the current sheet or window.|



Return value



Integer. Returns the pointer's distance from the top of objectname in PowerBuilder units if it succeeds and -1 if an error occurs. If objectname is null, PointerY returns null.



Examples



In a script for a control in a window, the following example stores the distance of the pointer from the top of the window in the variable li_dist. If the pointer is 10 units from the top of the window, li_dist equals 10:



integer li_Dist li_Dist = Parent.PointerY()



This statement in a control's RButtonDown script displays a pop-up menu m_Appl.M_Help at the cursor position:



m_Appl.M_Help.PopMenu(Parent.PointerX(), & Parent.PointerY())



See also PointerX PopMenu WorkSpaceHeight WorkSpaceWidth



- WorkSpaceX

- WorkSpaceY


- 10.461 PopMenu Description Displays a menu at the specified location. Applies to




Menu objects Syntax



menuname.PopMenu ( xlocation, ylocation )



- Table 10.582:




|Argument|Description|
|---|---|
|menuname|The fully qualified name of a menu on a menu bar you want to display at the specified location|
|xlocation|The distance in PowerBuilder units of the displayed menu from the left edge of the window|
|ylocation|The distance in PowerBuilder units of the displayed menu from the top of the window|
