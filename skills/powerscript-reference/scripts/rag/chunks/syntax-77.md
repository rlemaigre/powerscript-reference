# Syntax

controlname.InsertData ( seriesnumber, datapoint, datavalue {, categoryvalue } )



- Table 10.393:




|Argument|Description|
|---|---|
|controlname|The name of the graph in which you want to insert data into a series.|
|seriesnumber|The number that identifies the series in which you want to insert data.|
|datapoint|The number of the data point before which you want to insert the data.|
|datavalue|The value of the data point you want to insert.|
|categoryvalue (opt|ional)The category for this data value on the category axis. The datatype of categoryvalue should match the datatype of the category axis. In most cases, you should include categoryvalue. Otherwise, an uncategorized value will be added to the series.|
