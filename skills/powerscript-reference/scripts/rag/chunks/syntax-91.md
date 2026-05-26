# Syntax

controlname.ModifyData ( seriesnumber, datapoint, xvalue, yvalue )



- Table 10.510:




|Argument|Description|
|---|---|
|controlname|The name of the scatter graph in which you want to modify data in a series|
|seriesnumber|The number that identifies the series in which you want to modify data|
|datapoint|The number of the data point for which you want to modify data|
|xvalue|The new x value of the data you want to modify|
|yvalue|The new y value of the data you want to modify|



Return value Integer.



- Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, ModifyData returns null. Usage




For scatter graphs, there are no categories. You specify the position in the series whose data you want to modify and provide the x and y values for the data.
