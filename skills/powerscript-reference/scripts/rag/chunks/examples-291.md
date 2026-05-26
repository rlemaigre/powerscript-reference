# Examples

These statements obtain the series and data point of graph gr_1 in the DataWindow control dw_employee.



integer SeriesNbr, ItemNbr string ls_SeriesName grObjectType clickedtype



// Get the number of the series and datapoint clickedtype = this.ObjectAtPointer("gr_1", &



SeriesNbr, ItemNbr)



//Get the name of series ls_SeriesName = dw_employee.SeriesName("gr_1", &



SeriesNbr)



// Set Series label dw_employee.SetSeriesLabelling("gr_1", &



ls_SeriesName, true)



These statements obtain the series and data point of graph gr_1.



integer SeriesNbr, ItemNbr string ls_SeriesName grObjectType clickedtype



clickedtype = gr_1.ObjectAtPointer(SeriesNbr, &



ItemNbr) ls_SeriesName = gr_1.SeriesName(SeriesNbr) gr_1.SetSeriesLabelling(ls_SeriesName, true)



See also GetDataLabelling GetSeriesLabelling SetDataLabelling
