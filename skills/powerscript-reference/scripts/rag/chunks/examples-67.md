# Examples

These statements close the tab page user object u_employee and then open the user object u_departments in the Tab control tab_personnel:



tab_personnel.CloseTab(u_employee)



tab_personnel.OpenTab(u_departments)



When the user chooses a menu item that closes a user object, the following excerpt from the menu item's script prompts the user for confirmation before closing the u_employee user object in the window to which the menu is attached:



IF MessageBox("Close ", "Close?", & Question!, YesNo!) = 1 THEN // User chose Yes, close user object. ParentWindow.CloseTab(u_employee) // If user chose No, take no action.



END IF



See also OpenTab
