# Return value

Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, GetDataTransparency returns null. Usage GetDataTransparency retrieves data from any DirectX 3D graph (those with 3D rendering). Examples



These statements obtain the transparency percentage of data point 3 in the series named Costs in the graph gr_computers in the DataWindow control dw_equipment:



integer SeriesNbr, rtn, transp_value // Get the number of the series. SeriesNbr = dw_equipment.FindSeries( &



"gr_computers", "Costs") rtn = dw_equipment.GetDataTransparency( & "gr_computers" , SeriesNbr, 3, transp_value)



These statements obtain the transparency percentage of data point 2 in the series Costs in the graph gr_computers:



integer SeriesNbr, rtn, trans_value SeriesNbr = gr_computers.FindSeries("Costs") rtn = gr_computers.GetDataTransparency( SeriesNbr, &



2, transp_value)



See also FindSeries GetSeriesTransparency SetSeriesTransparency SetDataTransparency



- 10.205 GetDataValue Description Obtains the value of a data point in a series in a graph. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax




controlname.GetDataValue ( { graphcontrol, } seriesnumber, datapoint, datavariable {, xory } )
