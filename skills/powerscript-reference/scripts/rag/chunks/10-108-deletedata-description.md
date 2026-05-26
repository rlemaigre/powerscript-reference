# 10.108 DeleteData Description

Deletes a data point from a series of a graph. The remaining data points in the series are shifted left to fill the data point's category.



Applies to



Graph controls in windows and user objects. Does not apply to graphs within DataWindow objects (because their data comes directly from the DataWindow).



Syntax



controlname.DeleteData ( seriesnumber, datapointnumber )



- Table 10.134:




|Argument|Description|
|---|---|
|controlname|The name of the graph in which you want to delete a data value|
|seriesnumber|The number of the series containing the data value you want to delete from controlname|
|datapointnumber|The number of the data point containing the data you want to delete|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, DeleteData returns null. Examples



These statements delete the data at data point 7 in the series named Costs in the graph gr_product_data:



integer SeriesNbr // Get the number of the series. SeriesNbr = gr_product_data.FindSeries("Costs") gr_product_data.DeleteData(SeriesNbr, 7)



See also AddData DeleteCategory DeleteSeries FindSeries
