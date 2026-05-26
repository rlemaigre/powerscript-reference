# Examples

Assuming the category label Jan does not already exist, these statements insert a data value in the series named Costs before the data point for Mar and assign the data point the category label Jan in the graph gr_product_data:



integer SeriesNbr, CategoryNbr // Get the numbers of the series and category. SeriesNbr = gr_product_data.FindSeries("Costs") CategoryNbr = gr_product_data.FindCategory("Mar") gr_product_data.InsertData(SeriesNbr, &



CategoryNbr, 1250, "Jan")



These statements insert the data value 1250 after the data value for Apr in the series named Revenues in the graph gr_product_data. The data is inserted in the category after Apr, and the rest of the data, if any, moves over a category:



integer SeriesNbr, CategoryNbr // Get the number of the series and category. CategoryNbr = gr_product_data.FindCategory("Apr") SeriesNbr = gr_product_data.FindSeries("Revenues") gr_product_data.InsertData(SeriesNbr, &



CategoryNbr + 1, 1250)



See also AddData FindCategory FindSeries GetData
