# Examples

These statements set the series and datapoint for the graph gr_1 in the DataWindow control dw_employee.



integer SeriesNbr, ItemNbr grObjectType clickedtype



// Get the number of the series and datapoint clickedtype = this.ObjectAtPointer("gr_1", &



SeriesNbr, ItemNbr)



// Set data label dw_employee.SetDataLabelling("gr_1", &



SeriesNbr, ItemNbr, true)



These statements set the series and datapoint for the graph gr_1.



integer SeriesNbr, ItemNbr grObjectType clickedtype



clickedtype = gr_1.ObjectAtPointer(SeriesNbr, & ItemNbr)



gr_1.SetDataLabeling(SeriesNbr, ItemNbr, true)



See also GetDataLabelling GetSeriesLabelling SetSeriesLabelling
