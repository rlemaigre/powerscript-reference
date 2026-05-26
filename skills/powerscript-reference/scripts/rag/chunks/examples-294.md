# Examples

This statement sets the symbol used for the series named Costs in the graph gr_product_data to a plus sign:



gr_product_data.SetSeriesStyle("Costs", & SymbolPlus!)



This statement sets the symbol used for the series named Costs in the graph gr_computers in the DataWindow control dw_equipment to X:



dw_equipment.SetSeriesStyle("gr_computers", & "Costs", SymbolX!)



See also GetDataStyle GetSeriesStyle SeriesName



SetDataStyle



- 10.642.4 Syntax 4: For creating an overlay in a graph Description




Specifies whether a series is an overlay, meaning that the series is represented by a line on top of another graph type.



Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax



controlname.SetSeriesStyle ( { graphcontrol, } seriesname, overlaystyle )



- Table 10.801:




|Argument|Description|
|---|---|
|controlname|The name of the graph in which you want to set the overlay status of a series, or the name of the DataWindow control containing the graph.|
|graphcontrol (Data control only) (optional)|AWindowstring whose value is the name of the graph in the DataWindow control in which you want to set the overlay status.|
|seriesname|A string whose value is the name of the series whose overlay status you want to change.|
|overlaystyle|A boolean value indicating whether you want the series to be an overlay, meaning that the series is shown in front as a line. Set overlaystyle to true to make the specified series an overlay. Set it to false to remove the overlay setting.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, SetSeriesStyle returns null. Usage



For a graph in a DataWindow, you can specify the appearance of a series in the graph before PowerBuilder draws the graph. To do so, define a user event for pbm_dwngraphcreate and call SetSeriesStyle in the script for that event. The event pbm_dwngraphcreate is triggered just before a graph is created in a DataWindow object.



Using SetSeriesStyle with DirectX 3D Graphs You cannot use the overlay style for a series.



Examples



This statement sets the style of the series named Costs in the graph gr_product_data to overlay:



gr_product_data.SetSeriesStyle("Costs", TRUE)



These statements in the Clicked event of the DataWindow control dw_employees store the style of the series under the pointer in the graph gr_depts in the variable style_type. If the style of the series is overlay (true), the script changes the style to normal (false):



string SeriesName integer SeriesNbr, Data_Point boolean overlay_style grObjectType MouseHit



MouseHit = dw_employees.ObjectAtPointer( &



"gr_depts", SeriesNbr, Data_Point) IF MouseHit = TypeSeries! THEN



SeriesName = &



dw_employees.SeriesName("gr_depts",SeriesNbr) dw_employees.GetSeriesStyle("gr_depts", &



SeriesName, overlay_style) IF overlay_style THEN &



dw_employees.SetSeriesStyle("gr_depts", &



SeriesName, FALSE) END IF



See also GetDataStyle GetSeriesStyle SeriesName SetDataStyle



- 10.643 SetSeriesTransparency Description Sets the tranparency percentage of a series in a DirectX 3D graph (those with 3D rendering). Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax controlname.SetSeriesTransparency ( { graphcontrol, } series, transparency )


- Table 10.802:




|Argument|Description|
|---|---|
|controlname|The name of the graph in which you want to set a series transparency value, or the name of the DataWindow control containing the graph.|
|graphcontrol (Data control only)|(Optional)Window A string whose value is the name of the graph in the DataWindow control in which you want to set a series transparency value.|
|series|The string that identifies the series for which you want to set the transparency value.|



|Argument|Description|
|---|---|
|transparency|Integer value for percent transparency. A value of 0 means that the series is opaque and a value of 100 means that it is completely transparent.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, SetSeriesTransparency returns null. Usage



SetSeriesTransparency sets the transparency value for a series in any DirectX 3D graph (those with 3D rendering).
