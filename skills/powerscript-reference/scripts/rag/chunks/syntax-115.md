# Syntax

objectname.RetrieveOne (DWControl dwObject, string urlName {,string data})



- Table 10.660:




|Argument|Description|
|---|---|
|objectname|A reference to the RestClient object.|
|dwObject|The name of the DataWindow control, DataStore, or child DataWindow.|
|urlName|A string whose value is the URL.|
|data (optional)|A string specifying the data to send to the server. If this argument is not specified, the RetrieveOne function sends the request to the server with "GET" method, otherwise with "POST".|
