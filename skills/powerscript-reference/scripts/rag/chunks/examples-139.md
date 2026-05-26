# Examples

These statements obtain the number of the series and datapoint for the graph gr_1 in the DataWindow control dw_employee and then set the series label.



integer SeriesNbr, ItemNbr boolean refB string ls_SeriesName grObjectType clickedtype



// Get the number of the series and datapoint clickedtype = this.ObjectAtPointer("gr_1", &



SeriesNbr, ItemNbr)



//Get the name of series ls_SeriesName = dw_employee.SeriesName("gr_1", &



SeriesNbr)



// Set Series label dw_employee.GetSeriesLabelling("gr_1", &



ls_SeriesName, refB)



These statements obtain the number of the series and datapoint for the graph gr_1 and then set the series label.



integer SeriesNbr, ItemNbr boolean refB string ls_SeriesName grObjectType clickedtype



clickedtype = gr_1.ObjectAtPointer(SeriesNbr, &



ItemNbr) ls_SeriesName = gr_1.SeriesName(SeriesNbr) gr_1.GetSeriesLabelling(ls_SeriesName, refB)
