# Examples

This statement closes the response window w_employee_response, returning the string emp_name to the window that opened it:



CloseWithReturn(Parent, "emp_name")



Suppose that a menu item opens one window if the user is a novice and another window if the user is experienced. The menu item displays a response window called w_signon to prompt for the user's experience level. The user types an experience level in the SingleLineEdit control sle_signon_id. The OK button in the response window passes the text in sle_signon_id back to the menu item script. The menu item script checks the StringParm property of the Message object and opens the desired window.



The script for the Clicked event of the OK button in the w_signon response window is a single line:



CloseWithReturn(Parent, sle_signon_id.Text)



The script for the menu item is:



string ls_userlevel // Open the response window Open(w_signon) // Check text returned in Message object ls_userlevel = Message.StringParm IF ls_userlevel = "Novice" THEN



Open(win_novice) ELSE



Open(win_advanced) END IF



See also Close OpenSheetWithParm OpenUserObjectWithParm OpenWithParm



- 10.73 CollapseItem Description Collapses the specified item. Applies to TreeView controls Syntax treeviewname.CollapseItem ( itemhandle )


- Table 10.97:




|Argument|Description|
|---|---|
|treeviewname|The TreeView control in which you want to collapse an item|
|itemhandle|The handle of the item you want to collapse|
