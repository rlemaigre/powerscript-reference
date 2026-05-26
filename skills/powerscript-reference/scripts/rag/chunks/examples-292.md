# Examples

This statement sets the text (foreground) color of the series named Salary in the graph gr_emp_data to black:



gr_emp_data.SetSeriesStyle("Salary", & Foreground!, 0)



This statement sets the background color of the series named Salary in the graph gr_depts in the DataWindow control dw_employees to black:



dw_employees.SetSeriesStyle("gr_depts", & "Salary", Background!, 0)



These statements in the Clicked event of the graph control gr_product_data coordinate line color between it and the graph gr_sales_data. The script stores the line color for the series under the mouse pointer in the graph gr_product_data in the variable line_color. Then it sets the line color for the series northeast in the graph gr_sales_data to that color:



string SeriesName integer SeriesNbr, Series_Point long line_color grObjectType MouseHit



MouseHit = ObjectAtPointer(SeriesNbr,Series_Point) IF MouseHit = TypeSeries! THEN



SeriesName = & gr_product_data.SeriesName(SeriesNbr)



gr_product_data.GetSeriesStyle(SeriesName, & LineColor!, line_color)



gr_sales_data.SetSeriesStyle("Northeast", &



LineColor!, line_color) END IF



See also GetDataStyle GetSeriesStyle SeriesName SetDataStyle



- 10.642.2 Syntax 2: For lines in a graph Description Specifies the style and width of a series' lines in a graph. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls objects Syntax controlname.SetSeriesStyle ( { graphcontrol, } seriesname, linestyle, linewidth )


- Table 10.799:




|Argument|Description|
|---|---|
|controlname|The name of the graph in which you want to set the line style and width of a series, or the name of the DataWindow control containing the graph.|



|Argument|Description|
|---|---|
|graphcontrol (Data control only) (optional)|AWindowstring whose value is the name of the graph in the DataWindow control in which you want to set the line style and width.|
|seriesname|A string whose value is the name of the series for which you want to set the line style and width.|
|linestyle|A value of the LineStyle enumerated datatype. Values are: Continuous! Dash! DashDot! DashDotDot! Dot! Transparent!|
|linewidth|An integer specifying the width of the line in pixels.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, SetSeriesStyle returns null. Usage



Data points in a series can have their own style settings. Settings made with SetDataStyle set the style of individual data points and override series settings.



The graph stores style information for properties that do not apply to the current graph type. For example, you can set the fill pattern in a two-dimensional line graph or the line style in a bar graph, but that fill pattern or line style will not be visible.



For a graph in a DataWindow, you can specify the appearance of a series in the graph before PowerBuilder draws the graph. To do so, define a user event for pbm_dwngraphcreate and call SetSeriesStyle in the script for that event. The event pbm_dwngraphcreate is triggered just before a graph is created in a DataWindow object.
