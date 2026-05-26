# Return Values

Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage



The SelectionChanged event occurs when the Tab control is created and the initial selection is set.



See also Clicked SelectionChanging



- 9.104.3 Syntax 3: For TreeView controls Description Occurs when the item is selected in a TreeView control. Event ID


- Table 9.230:



|Event ID|Objects|
|---|---|
|pbm_tvnselchanged|TreeView|



Arguments



- Table 9.231:




|Argument|Description|
|---|---|
|oldhandle|Long by value (the handle of the previously selected item)|
|newhandle|Long by value (the handle of the currently selected item)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Usage The SelectionChanged event occurs after the SelectionChanging event. Examples This example tracks items in the SelectionChanged event:



TreeViewItem l_tvinew, l_tviold // get the treeview item that was the old selection This.GetItem(oldhandle, l_tviold) // get the treeview item that is currently selected This.GetItem(newhandle, l_tvinew)



// Display the labels for the two items in sle_get sle_get.Text = "Selection changed from " &



+ String(l_tviold.Label) + " to " &

+ String(l_tvinew.Label)



See also Clicked SelectionChanging



- 9.105 SelectionChanging The SelectionChanging event has different arguments for different objects:


- Table 9.232:



|Object|See|
|---|---|
|Tab control|Syntax 1|
|TreeView control|Syntax 2<br><br>|



9.105.1 Syntax 1: For Tab controls Description Occurs when another tab is about to be selected. Event ID



- Table 9.233:



|Event ID|Objects|
|---|---|
|pbm_tcnselchanging|Tab|



Arguments



- Table 9.234:




|Argument|Description|
|---|---|
|oldindex|Integer by value (the index of the currently selected tab)|
|newindex|Integer by value (the index of the tab that is about to be selected)|



Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Allow the selection to change 1 -- Prevent the selection from changing Usage



Use the SelectionChanging event to prevent the selection from changing or to do processing for the newly selected tab page before it becomes visible. If CreateOnDemand is true and this is the first time the tab page is selected, the controls on the page do not exist yet, and you cannot refer to them in the event script.
