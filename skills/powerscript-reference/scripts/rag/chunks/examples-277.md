# Examples

This example sets the minimum and maximum dates for a control using today's date as the minimum date and a date specified in an EditMask control as the maximum date:



integer li_return Date mindate, maxdate



mindate = Today() maxdate = Date(em_1.Text) li_return = mc_1.SetDateLimits(mindate, maxdate)



See also GetDateLimits



- 10.608 SetDropHighlight Description Highlights the specified item as the drop target. Applies to TreeView controls Syntax treeviewname.SetDropHighlight ( itemhandle )
