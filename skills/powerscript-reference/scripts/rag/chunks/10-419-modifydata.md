# 10.419 ModifyData

Changes the value of a data point in a series on a graph. There are two syntaxes depending on the type of graph.



- Table 10.508:



|To modify a data point in|Use|
|---|---|
|All graph types except scatter|Syntax 1|
|Scatter graphs|Syntax 2<br><br>|



- 10.419.1 Syntax 1: For all graph types except scatter Description




Changes the value of a data point in a series on a graph. You can specify the data point to be modified by position or by category.



Applies to



Graph controls in windows and user objects. Does not apply to graphs within DataWindow objects (their data comes directly from the DataWindow).



Syntax



controlname.ModifyData (seriesnumber, datapoint, datavalue {, categoryvalue } )



- Table 10.509:




|Argument|Description|
|---|---|
|controlname|The name of the graph in which you want to modify data.|
|seriesnumber|The number of the series in which you want to modify data.|
|datapoint|The number of the data point for which you want to modify the data.|
|datavalue|The new value of the data point. The datatype of datavalue is the same as the datatype of the values axis of the graph.|
|categoryvalue (opt|ional)The category for datavalue. The datatype of categoryvalue is the same as the datatype of the category axis of the graph.|
