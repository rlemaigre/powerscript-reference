# 10.271 GetSeriesStyle

Finds out the appearance of a series in a graph. The appearance settings for individual data points can override the series settings, so the values obtained from GetSeriesStyle may not reflect the current state of the graph. There are several syntaxes, depending on what settings you want.



- Table 10.330:




|To|Use|
|---|---|
|Get the series' colors|Syntax 1<br><br>|



|To|Use|
|---|---|
|Get the line style and width used by the series|Syntax 2|
|Get the fill pattern or symbol for the series|Syntax 3|
|Find out if the series is an overlay (a series shown as a line on top of another graph type)|Syntax 4<br><br>|



GetSeriesStyle provides information about a series. The data points in the series can have their own style settings. Use SetSeriesStyle to change the style values for a series. Use GetDataStyle to get style information for a data point and SetDataStyle to override series settings and set style information for individual data points.



The graph stores style information for properties that do not apply to the current graph type. For example, you can find out the fill pattern for a data point or a series in a two-dimensional line graph, but that fill pattern will not be visible.



- 10.271.1 Syntax 1: For the colors of a series Description Obtains the colors associated with a series in a graph. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax




controlname.GetSeriesStyle ( { graphcontrol, } seriesname, colortype, colorvariable )
