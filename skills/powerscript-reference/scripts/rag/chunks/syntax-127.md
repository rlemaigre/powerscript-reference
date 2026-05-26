# Syntax

controlname.SetDataStyle ( { graphcontrol, } seriesnumber, datapointnumber, linestyle, linewidth )



- Table 10.749:




|Argument|Description|
|---|---|
|controlname|The name of the graph in which you want to set the line style and width of a data point, or the name of the DataWindow containing the graph.|
|graphcontrol (Data control only) (optional)|AWindowstring whose value is the name of the graph in the DataWindow control in which you want to set the line style and width.|
|seriesnumber|The number of the series in which you want to set the line style and width of a data point.|
|datapointnumber|The number of the data point for which you want to set the line style and width.|
|linestyle|A value of the LineStyle enumerated datatype. Values are: Continuous! Dash! DashDot! DashDotDot! Dot! Transparent!|
|linewidth|An integer whose value is the width of the line in pixels.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, SetDataStyle returns null. Usage



To change the appearance of a series, use SetSeriesStyle. The settings you make for the series are the defaults for all data points in the series.



For a graph in a DataWindow, you can specify the appearance of a data point in the graph before PowerBuilder draws the graph. To do so, define a user event for pbm_dwngraphcreate and call SetDataStyle in the script for that event. The event pbm_dwngraphcreate is triggered just before a graph is created in a DataWindow object.
