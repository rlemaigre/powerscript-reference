# Examples

This example checks the fill pattern used for data point 10 in the series named Costs in the graph gr_product_data. If it is diamond, then SetDataStyle changes it to solid:



integer SeriesNbr FillPattern data_pattern



// Get the number of the series SeriesNbr = gr_product_data.FindSeries("Costs")



// Get the current fill pattern gr_product_data.GetDataStyle(SeriesNbr, 10, &



data_pattern)



// If the pattern is diamond, change it to solid IF data_pattern = Diamond! THEN &



gr_product_data.SetDataStyle(SeriesNbr, & 10, Solid!)



See also GetDataStyle GetSeriesStyle SeriesName SetSeriesStyle



- 10.606 SetDataTransparency Description Sets the transparency percentage of a data point in a series in a DirectX 3D graph (those with


- 3D rendering). Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax




controlname.SetDataTransparency ( { graphcontrol, } seriesnumber, datapoint, transparency )
