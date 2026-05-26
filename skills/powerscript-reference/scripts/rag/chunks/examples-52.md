# Examples

This example is for the lb_value ListBox in the window w_graph_sheet_with_list in the PowerBuilder Examples application. When the user chooses values, they are graphed as series in the graph gr_1. The MultiSelect property for the ListBox is set to true, so index has no effect. The script checks all the items to see if they are selected:



integer itemcount,i,r string ls_colname



gr_1.SetRedraw(FALSE) // Clear out categories, series and data from graph gr_1.Reset(All!) // Loop through all selected values and // create as many series as the user specified FOR i = 1 to lb_value.TotalItems()



IF lb_value.State(i) = 1 THEN ls_colname = lb_value.Text(i) // Call window function to set up the graph wf_set_a_series(ls_colname, ls_colname, & lb_category.text(1))



END IF NEXT gr_1.SetRedraw(TRUE)



See also Clicked



- 9.104.2 Syntax 2: For Tab controls Description Occurs when a tab is selected. Event ID


- Table 9.228:



|Event ID|Objects|
|---|---|
|pbm_tcnselchanged|Tab|



Arguments



- Table 9.229:




|Argument|Description|
|---|---|
|oldindex|Integer by value (the index of the tab that was previously selected)|
|newindex|Integer by value (the index of the tab that has become selected)|
