# Examples

These statements store in the variable data_pattern the fill pattern for the series under the mouse pointer in the graph gr_product_data:



string SeriesName integer SeriesNbr, Data_Point FillPattern data_pattern grObjectType MouseHit



MouseHit = ObjectAtPointer(SeriesNbr, Data_Point) IF MouseHit = TypeSeries! THEN



SeriesName = & gr_product_data.SeriesName(SeriesNbr)



gr_product_data.GetSeriesStyle(SeriesName, &



data_pattern) END IF



This example stores in the variable data_pattern the fill pattern for the series under the pointer in the graph gr_depts in the DataWindow control dw_employees. It then sets the fill pattern for the series Total Salary in the graph gr_dept_data to that pattern:



string SeriesName integer SeriesNbr, Data_Point FillPattern data_pattern grObjectType MouseHit



MouseHit = & ObjectAtPointer("gr_depts" , SeriesNbr, & Data_Point)



IF MouseHit = TypeSeries! THEN SeriesName = &



dw_employees.SeriesName("gr_depts" , SeriesNbr) dw_employees.GetSeriesStyle("gr_depts" , &



SeriesName, data_pattern) gr_dept_data.SetSeriesStyle("Total Salary", &



data_pattern) END IF



In these examples, you can change the datatype of data_pattern (the variable specified as the last argument) to find out the symbol type.



See also AddSeries GetDataStyle FindSeries SetDataStyle SetSeriesStyle



- 10.271.4 Syntax 4: For determining whether a series is an overlay Description




Reports whether a series in a graph is an overlay -- whether it is shown as a line on top of another graph type.



Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax



controlname.GetSeriesStyle ( { graphcontrol, } seriesname,overlayindicator )
