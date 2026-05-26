# Examples

When the user selects a tab, this code sizes the DataWindow control on the tab page to match the size of another DataWindow control. The resizing happens before the tab page becomes visible. This example is from tab_uo in the w_phone_dir window in the PowerBuilder Examples:



u_tab_dir luo_Tab luo_Tab = This.Control[newindex] luo_Tab.dw_dir.Height = dw_list.Height luo_Tab.dw_dir.Width = dw_list.Width



See also Clicked SelectionChanged



9.105.2 Syntax 2: For TreeView controls Description Occurs when the selection is about to change in the TreeView control. Event ID



- Table 9.235:



|Event ID|Objects|
|---|---|
|pbm_tvnselchanging|TreeView|



Arguments



- Table 9.236:




|Argument|Description|
|---|---|
|oldhandle|Long by value (the handle of the currently selected item)|
|newhandle|Long by value (the handle of the item that is about to be selected)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Allow the selection to change 1 -- Prevent the selection from changing Usage The SelectionChanging event occurs before the SelectionChanged event. Examples This example displays the status of changing TreeView items in a SingleLineEdit:



TreeViewItem l_tvinew, l_tviold // Get TreeViewItem that was the old selection



This.GetItem(oldhandle, l_tviold) // Get TreeViewItem that is currently selected This.GetItem(newhandle, l_tvinew) //Display the labels for the two items in display sle_status.Text = "Selection changed from " &



+ String(l_tviold.Label) + " to " &

+ String(l_tvinew.Label)



See also Clicked SelectionChanged



- 9.106 Show Description Occurs just before the window is displayed. Event ID


- Table 9.237:



|Event ID|Objects|
|---|---|
|pbm_showwindow|Window|



Arguments



- Table 9.238:




|Argument|Description|
|---|---|
|show|Boolean by value (whether the window is being shown). The value is always true.|
|status|Long by value (the status of the window). Values are:<br><br>• 0 -- The current window is the only one affected.<br>• 1 -- The window's parent is also being minimized or a pop-up window is being hidden.<br>• 3 -- The window's parent is also being displayed or maximized or a pop-up window is being shown.<br>|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage The Show event occurs when the window is opened.



See also Activate Hide Open
