# Examples

This statement sets the line style and width for the series named Costs in the graph gr_product_data:



gr_product_data.SetSeriesStyle("Costs", & Dot!, 5)



See also GetDataStyle GetSeriesStyle SeriesName SetDataStyle



- 10.642.3 Syntax 3: For the fill pattern and symbols in a graph Description Specifies the fill pattern and symbol for data markers in a series. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax controlname.SetSeriesStyle ( { graphcontrol, } seriesname, enumvalue )


- Table 10.800:




|Argument|Description|
|---|---|
|controlname|The name of the graph in which you want to set the appearance of a series, or the name of the DataWindow control containing the graph.|
|graphcontrol (Data control only) (optional)|AWindowstring whose value is the name of the graph in the DataWindow control in which you want to set the appearance.|
|seriesname|A string whose value is the name of the series in which you want to set the appearance.|
|enumvalue|A value of an enumerated datatype specifying an appearance setting for the series. Values for the FillPattern or grSymbolType enumerated datatypes follow.|
| |To change the fill pattern, use a FillPattern value: Bdiagonal! (Lines from lower left to upper right) Diamond! Fdiagonal! (Lines from upper left to lower right) Horizontal! Solid! Square! Vertical! To change the symbol type, use a grSymbolType value: NoSymbol! SymbolHollowBox! SymbolX! SymbolStar! SymbolHollowUpArrow! SymbolHollowCircle! SymbolHollowDiamond! SymbolSolidDownArrow!|



|Argument|Description|
|---|---|
| |SymbolSolidUpArrow! SymbolSolidCircle! SymbolSolidDiamond! SymbolPlus! SymbolHollowDownArrow! SymbolSolidBox!|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, SetSeriesStyle returns null. Usage



Data points in a series can have their own style settings. Settings made with SetDataStyle set the style of individual data points and override series settings.



The graph stores style information for properties that do not apply to the current graph type. For example, you can set the fill pattern in a two-dimensional line graph or the line style in a bar graph, but that fill pattern or line style will not be visible.



For a graph in a DataWindow, you can specify the appearance of a series in the graph before PowerBuilder draws the graph. To do so, define a user event for pbm_dwngraphcreate and call SetSeriesStyle in the script for that event. The event pbm_dwngraphcreate is triggered just before a graph is created in a DataWindow object.



Using SetSeriesStyle with DirectX 3D Graphs You cannot use a fill pattern or specify specific symbols for a series.
