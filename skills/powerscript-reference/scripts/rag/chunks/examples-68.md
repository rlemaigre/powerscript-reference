# Examples

This statement prompts the user for confirmation before the parent of the current object closes the u_employee target:



IF MessageBox("Close ", "Close?", & Question!, YesNo!) = 1 THEN // User chose Yes, close user object. parent.CloseUserObject(u_employee) // If user chose No, take no action.



END IF



See also OpenUserObject
