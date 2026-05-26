# Return value

Integer. Returns the number of the series if it succeeds and -1 if an error occurs. If the series named in seriesname exists already, it returns the number of the existing series. If any argument's value is null, InsertSeries returns null.



Usage Series names are unique if they have different capitalization. Equivalent syntax If you want to add a series to the end of the list, you can use AddSeries instead, which requires fewer arguments. This statement:



gr_data.InsertSeries("Costs", 0)



is equivalent to:



gr_data.AddSeries("Costs")
