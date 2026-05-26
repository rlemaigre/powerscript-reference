# Syntax

controlname.GetSeriesStyle ( { graphcontrol, } seriesname, linestyle, linewidth )



- Table 10.332:




|Argument|Description|
|---|---|
|controlname|The name of the graph for which you want the line style and width for a series in a graph, or the name of the DataWindow control containing the graph.|
|graphcontrol (Data control only)|(Optional)Window A string whose value is the name of the graph in the DataWindow control for which you want the line style information.|
|seriesname|A string whose value is the name of the series for which you want the line style information.|
|linestyle|A variable of type LineStyle in which you want to store the line style of seriesname.|
|linewidth|An integer variable in which you want to store the line width for seriesname. The width is measured in pixels.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Stores in linestyle a value of the LineStyle enumerated datatype and in linewidth the width of the line used for the specified series. If any argument's value is null, GetSeriesStyle returns null. Examples



These statements store in the variables line_style and line_width the line style and width for the series under the mouse pointer in the graph gr_product_data:



string SeriesName integer SeriesNbr, Data_Point, line_width LineStyle line_style grObjectType MouseHit



MouseHit = ObjectAtPointer(SeriesNbr, Data_Point) IF MouseHit = TypeSeries! THEN



SeriesName = & gr_product_data.SeriesName(SeriesNbr)



gr_product_data.GetSeriesStyle(SeriesName, &



line_style, line_width) END IF



See also AddSeries GetDataStyle FindSeries SetDataStyle SetSeriesStyle



- 10.271.3 Syntax 3: For the fill pattern or symbol of a series Description Obtains the fill pattern or symbol of a series in a graph. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax controlname.GetSeriesStyle ( { graphcontrol, } seriesname, enumvariable )


- Table 10.333:




|Argument|Description|
|---|---|
|controlname|The name of the graph for which you want the style information for a series in a graph, or the name of the DataWindow control containing the graph.|
|graphcontrol (Data control only)|(Optional)Window A string whose value is the name of the graph in the DataWindow control for which you want the style information.|
|seriesname|A string whose value is the name of the series for which you want the style information.|
|enumvariable|The variable in which you want to store the style information. You can specify a FillPattern or grSymbolType variable. The style information that GetSeriesStyle stores depends on the variable type.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Stores in enumvariable a value of the appropriate enumerated datatype for the fill pattern or symbol used for the specified series. If any argument's value is null, GetSeriesStyle returns null. Usage



See SetSeriesStyle for a list of the enumerated datatype values that GetSeriesStyle stores in enumvariable.
