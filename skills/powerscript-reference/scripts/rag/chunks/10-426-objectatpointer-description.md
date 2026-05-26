# 10.426 ObjectAtPointer Description

Finds out where the user clicked in a graph. ObjectAtPointer reports the region of the graph under the pointer and stores the associated series and data point numbers in the designated variables.



Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax



controlname.ObjectAtPointer ( { graphcontrol, } seriesnumber, datapoint )



- Table 10.516:




|Argument|Description|
|---|---|
|controlname|The name of the graph object for which you want the object under the pointer, or the DataWindow control containing the graph|
|graphcontrol (Data control only)|(Optional)Window A string whose value is the name of the graph in the DataWindow control for which you want the object under the pointer|
|seriesnumber|An integer variable in which you want to store the number of the series under the pointer|
|datapoint|An integer variable in which you want to store the number of the data point under the pointer|
