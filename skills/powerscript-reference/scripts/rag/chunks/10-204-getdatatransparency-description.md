# 10.204 GetDataTransparency Description

Obtains the transparency percentage of a data point in a DirectX 3D graph (those with 3D rendering). Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax



controlname.GetDataTransparency ( { graphcontrol, } seriesnumber, datapoint, transparency )



- Table 10.246:




|Argument|Description|
|---|---|
|controlname|The name of the graph from which you want data, or the name of the DataWindow control containing the graph.|
|graphcontrol (Data control only)|(Optional)Window A string whose value is the name of the graph in the DataWindow control from which you want the data.|
|seriesnumber|The number that identifies the series from which you want data.|
|datapoint|The number of the data point for which you want the transparency value.|
|transparency|Integer value for percent transparency. A value of 0 means that the data point is opaque and a value of 100 means that it is completely transparent.|
