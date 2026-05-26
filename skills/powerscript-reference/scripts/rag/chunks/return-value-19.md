# Return value

Long. Returns the number of data points in the specified series if it succeeds and -1 if an error occurs. If any argument's value is null, DataCount returns null. Examples



These statements store in ll_count the number of data points in the series named Costs in the graph gr_product_data:



long ll_count ll_count = gr_product_data.DataCount("Costs")



These statements store in ll_count the number of data points in the series named Salary in the graph gr_dept in the DataWindow control dw_employees:



long ll_count ll_count = &



dw_employees.DataCount("gr_dept", "Salary")



See also AddSeries InsertSeries SeriesCount
