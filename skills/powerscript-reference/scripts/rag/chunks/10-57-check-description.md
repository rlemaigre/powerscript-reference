# 10.57 Check Description

Displays a checkmark next to a menu item in a drop-down or cascading menu and sets the menu item's Checked property to true.



Applies to Menu objects Syntax



menuname.Check ( )



- Table 10.68:




|Argument|Description|
|---|---|
|menuname|The fully qualified name of the menu next to which you want to display a checkmark. The item must be in a drop-down or cascading menu, not an item on a menu bar.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If menuname is null, Check returns null. Usage



A checkmark next to a menu item indicates that the menu option is currently on and that the user can turn the option on and off by choosing it. For example, in the Window painter's Design menu, a checkmark is displayed next to Grid when the grid is on.



You can use Check in an item's Clicked script to mark a menu item when the user turns the option on and Uncheck to remove the check when the user turns the option off.



Equivalent syntax You can set a menu object's Checked property instead of calling Check.



menuname.Checked = true



This statement:



Menu_Appl.M_View.M_Grid.Checked = TRUE



is equivalent to:



Menu_Appl.M_View.M_Grid.Check()
