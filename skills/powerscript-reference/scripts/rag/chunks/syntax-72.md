# Syntax

objectname.Hide ( )



- Table 10.372:




|Argument|Description|
|---|---|
|objectname|The name of the object or control you want to make invisible|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If objectname is null, Hide returns null. Usage If the object you want to hide is already invisible, then Hide has no effect. You cannot use Hide to hide a drop-down or cascading menu or any menu that has an MDI frame window as its parent window. Nor can you hide a window that has been opened as an MDI sheet. You can use the Disable function to disable menu items, which displays them in the disabled color and makes them inactive. To disable an object so that it does not respond to events, but is still visible, set its Enabled property. You can set an object's Visible property instead of calling Hide:



objectname.Visible = false



This statement:



lb_Options.Visible = FALSE



is equivalent to:



lb_Options.Hide()



Examples This statement hides the ListBox lb_options:



lb_options.Hide()



In the script for a menu item, this statement hides the CommandButton cb_delete on the active sheet in the MDI frame w_mdi. The active sheets are of type w_sheet:



w_sheet w_active w_active = w_mdi.GetActiveSheet() IF IsValid(w_active) THEN w_active.cb_delete.Hide()



See also Show
