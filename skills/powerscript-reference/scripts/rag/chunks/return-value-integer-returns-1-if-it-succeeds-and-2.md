# Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If objectname is null, Show returns null. Usage If the specified object is a window that is not open, an execution error occurs.

You cannot use Show to show a drop-down or cascading menu, or any menu that has an MDI frame window as its parent window.



Equivalent syntax You can set the object's Visible property instead of calling Show:



objectname.Visible = true



This statement:



m_status.m_options.Visible = TRUE



is equivalent to:



m_status.m_options.Show()



Examples This statement makes visible the menu selection called m_options on the menu m_status:



m_status.m_options.Show()



This statement makes the child window w_child visible:



w_child.Show()



See also Hide
