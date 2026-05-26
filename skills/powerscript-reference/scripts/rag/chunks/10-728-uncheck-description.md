# 10.728 Uncheck Description

Removes the check mark, if any, next to an item a drop-down or cascading menu and sets the item's Checked property to false.



Applies to Menu objects Syntax



menuname.Uncheck ( )



- Table 10.901:




|Argument|Description|
|---|---|
|menuname|The fully qualified name of the menu selection from which you want to remove the checkmark, if any. The menu must be on a drop-down or cascading menu, not an item on a menu bar.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If menuname is null, Uncheck returns null. Usage



A checkmark next to a menu item indicates that the menu option is currently on and that the user can turn the option on and off by choosing it. For example, in the Window painter's Design menu, a checkmark is displayed next to Grid when the grid is on.



You can use Check in an item's Clicked script to mark a menu item when the user turns the option on and Uncheck to remove the check when the user turns the option off.



Equivalent syntax You can set the object's Checked property instead of calling Uncheck:



menuname.Checked = false



This statement:



m_appl.m_view.m_grid.Checked = FALSE



is equivalent to:



m_appl.m_view.m_grid.Uncheck()
