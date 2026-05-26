# Table 10.9:

|Argument|Description|
|---|---|
|controlname|The name of the scatter graph in which you want to add data to a series. The graph's type should be scatter.|
|seriesnumber|The number that identifies the series to which you want to add data.|
|xvalue|The x value of the data point you want to add.|
|yvalue|The y value of the data point you want to add.|



Return value Long. Returns the position of the data value in the series if it succeeds and -1 if an error occurs. If any argument's value is null, AddData returns null. Examples



These statements add the x and y values of a data point to the series named Costs in the scatter graph gr_sales_yr:



integer SeriesNbr // Get the number of the series. SeriesNbr = gr_sales_yr.FindSeries("Costs") gr_sales_yr.AddData(SeriesNbr, 12, 3)



See also DeleteData FindSeries GetData



10.8 AddItem



Adds an item to a list control.
