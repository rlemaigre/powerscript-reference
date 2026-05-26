# 10.7 AddData

Adds a value to the end of a series of a graph. The syntax you use depends on the type of graph.



- Table 10.7:



|To add data to|Use|
|---|---|
|Any graph type except scatter|Syntax 1|
|Scatter graphs|Syntax 2<br><br>|



- 10.7.1 Syntax 1: For all graph types except scatter Description




Adds a data point to a series in a graph. Use Syntax 1 for any graph type except scatter graphs.



Applies to



Graph controls in windows and user objects. Does not apply to graphs within DataWindow objects because their data comes directly from the DataWindow.



Syntax



controlname.AddData ( seriesnumber, datavalue {, categoryvalue } )



- Table 10.8:




|Argument|Description|
|---|---|
|controlname|The name of the graph in which you want to add data to a series. The graph's type should not be scatter.|
|seriesnumber|The number that identifies the series to which you want to add data.|
|datavalue|The value of the data you want to add.|
|categoryvalue (optional)|The category for this data value on the category axis. The datatype of the categoryvalue should match the datatype of the category axis. In most cases you should include categoryvalue. Otherwise, an uncategorized value will be added to the series.|
