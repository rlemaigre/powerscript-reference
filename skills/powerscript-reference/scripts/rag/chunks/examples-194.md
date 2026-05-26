# Examples

These statements change the data for Apr in the series named Costs in the graph gr_product_data:



integer SeriesNbr, CategoryNbr // Get the number of the series. SeriesNbr = gr_product_data.FindSeries("Costs") CategoryNbr = gr_product_data.FindCategory("Apr") gr_product_data.ModifyData(SeriesNbr, &



CategoryNbr, 1250)



FindCategory FindSeries InsertCategory InsertData



- 10.419.2 Syntax 2: For scatter graphs Description




Changes the value of a data point in a series on a graph. You specify the data point by position and provide an x and y value.
