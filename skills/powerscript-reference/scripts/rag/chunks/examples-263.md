# Examples

These statements store in the variable li_series_count the number of series in the graph gr_product_data:



integer li_series_count li_series_count = gr_product_data.SeriesCount()



These statements store in the variable li_series_count the number of series in the graph gr_computers in the DataWindow control dw_equipment:



integer li_series_count li_series_count = &



dw_equipment.SeriesCount("gr_computers")



See also CategoryCount DataCount



- 10.588 SeriesName Description Obtains the series name associated with the specified series number. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax controlname.SeriesName ( { graphcontrol, } seriesnumber )


- Table 10.726:




|Argument|Description|
|---|---|
|controlname|The name of the graph in which you want the name of a series, or the name of the DataWindow containing the graph|
|graphcontrol (Data control only) (optional)|AWindowstring whose value is the name of the graph in the DataWindow control for which you want the name of a series|
|seriesnumber|The number of the series for which you want to obtain the name|



Return value String. Returns the name assigned to the series. If an error occurs, it returns the empty string (""). If any argument's value is null, SeriesName returns null.
