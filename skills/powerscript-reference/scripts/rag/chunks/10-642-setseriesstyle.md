# 10.642 SetSeriesStyle

Specifies the appearance of a series in a graph. There are several syntaxes, depending on what settings you want to change.



- Table 10.797:




|To|Use|
|---|---|
|Set the series' colors|Syntax 1|
|Set the line style and width|Syntax 2|
|Set the fill pattern or symbol for the series|Syntax 3|
|Specify that the series is an overlay|Syntax 4<br><br>|



- 10.642.1 Syntax 1: For setting a series' colors Description Specifies the colors of a series in a graph. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax controlname.SetSeriesStyle ( { graphcontrol, } seriesname, colortype, color )


- Table 10.798:




|Argument|Description|
|---|---|
|controlname|The name of the graph in which you want to set the color of a series, or the name of the DataWindow control containing the graph.|
|graphcontrol (Data control only) (optional)|AWindowstring whose value is the name of the graph in the DataWindow control for which you want to set the color of a series.|
|seriesname|A string whose value is the name of the series for which you want to set the color.|
|colortype|A value of the grColorType enumerated datatype specifying the item for which you want to set the color. Values are:<br><br>• Foreground! -- Text color<br>• Background! -- Background color<br>• LineColor! -- Line color<br>• Shade! -- Shade (for graphics that are three-dimensional or have solid objects)<br>|
|color|A long specifying the new color for colortype.|



Return value Integer.



- Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, SetSeriesStyle returns null. Usage




Data points in a series can have their own style settings. Settings made with SetDataStyle set the style of individual data points and override series settings.



The graph stores style information for properties that do not apply to the current graph type. For example, you can set the fill pattern in a two-dimensional line graph or the line style in a bar graph, but that fill pattern or line style will not be visible.



For a graph in a DataWindow, you can specify the appearance of a series in the graph before PowerBuilder draws the graph. To do so, define a user event for pbm_dwngraphcreate and call SetSeriesStyle in the script for that event. The event pbm_dwngraphcreate is triggered just before a graph is created in a DataWindow object.
