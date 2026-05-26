# 10.124 Disable Description

Disables an item on a menu. The menu item is dimmed (its color is changed to the user's disabled text color, usually gray), and the user cannot select it.



Applies to Menu objects Syntax



menuname.Disable ( )



- Table 10.153:




|Argument|Description|
|---|---|
|menuname|The name of the menu selection you want to deactivate (disable)|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If menuname is null, Disable returns null. Equivalent syntax Setting the menu's Enabled property is the same as calling Disable.



menuname.Enabled = false



This statement:



m_appl.m_edit.Enabled = FALSE



is equivalent to:



m_appl.m_edit.Disable()



Examples This statement disables the m_edit menu item on the menu m_appl:



m_appl.m_edit.Disable()



See also Enable
