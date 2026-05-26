# Examples

These statements add a data value of 1250 to the series named Costs and assign the data point the category label Jan in the graph gr_product_data:



integer SeriesNbr // Get the number of the series. SeriesNbr = gr_product_data.FindSeries("Costs") gr_product_data.AddData(SeriesNbr, 1250, "Jan")



These statements add a data value of 1250 to the end of the series named Costs in the graph gr_product_data but do not assign the data point to a category:



integer SeriesNbr // Get the number of the series. SeriesNbr = gr_product_data.FindSeries("Costs") gr_product_data.AddData(SeriesNbr, 1250)



See also DeleteData FindSeries GetData InsertData
