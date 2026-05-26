# Examples

This example checks the line style used for data point 10 in the series named Costs in the graph gr_computers in the DataWindow control dw_equipment. If it is dash-dot, the SetDataStyle sets it to continuous. The line width stays the same:



integer SeriesNbr, line_width



LineStyle line_style // Get the number of the series SeriesNbr = dw_equipment.FindSeries( &



"gr_computers", "Costs")



// Get the current line style dw_equipment.GetDataStyle("gr_computers", &



SeriesNbr, 10, line_style, line_width)



// If the pattern is dash-dot, change to continuous IF line_style = DashDot! THEN &



dw_equipment.SetDataStyle("gr_computers", & SeriesNbr, 10, Continuous!, line_width)



See also GetDataStyle GetSeriesStyle SeriesName SetSeriesStyle



- 10.605.3 Syntax 3: For the fill pattern and symbol of a data point Description Specifies the fill pattern and symbol for a data point in a graph. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax




controlname.SetDataStyle ( { graphcontrol, } seriesnumber, datapointnumber, enumvalue )
