# Syntax

GetDataDDEOrigin ( applstring, topicstring, itemstring )



- Table 10.239:




|Argument|Description|
|---|---|
|applstring|A string variable in which GetDataDDEOrigin will store the name of the server application|
|topicstring|A string variable in which GetDataDDEOrigin will store the topic (for example, in Microsoft Excel, the topic could be REGION.XLS)|
|itemstring|A string variable in which GetDataDDEOrigin will store the item identification (for example, in Microsoft Excel, the item could be R1C2)|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs (such as the function was called in the wrong context). If any argument's value is null, GetDataDDEOrigin returns null. Usage



Call GetDataDDEOrigin in the window-level script for a RemoteSend event or a HotLinkAlarm event.



When your application is a DDE server, call GetDataDDEOrigin in the script for the RemoteSend event. Use it to determine the topic and item requested by the client. The application name is the application specified by the client (the server's own DDEname).



When your application is a DDE client, call GetDataDDEOrigin in the script for the HotLinkAlarm event. Use it to identify the source of the data when hot links may exist for more than one topic within the server application or for more than one application.



Examples This example illustrates how to call GetDataDDEOrigin:



string WhichAppl, WhatTopic, WhatLoc GetDataDDEOrigin(WhichAppl, WhatTopic, WhatLoc)



See also GetDataDDE



- 10.201 GetDataLabelling Description Determines whether the data at a given data point is labeled in a DirectX 3D graph. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax controlname.GetDataLabelling ({graphcontrol,} series, datapoint, value)


- Table 10.240:




|Argument|Description|
|---|---|
|controlname|The name of the graph from which you want data, or the name of the DataWindow control containing the graph.|
|graphcontrol (Data control only)|(Optional)Window A string whose value is the name of the graph in the DataWindow control.|
|seriesnumber|The number that identifies the series for which you want the data label setting.|
|datapoint|The data point for which you want to obtain a label.|
|value|A boolean passed by reference that indicates whether the data point has a label.|
