# 10.534 Retrieve Description

Retrieves data to the DataWindow, DataWindowChild, or DataStore from the RESTFul Web service according to the key name of the JSON string. If the data received from the RESTful web service is compressed as gzip, it will be automatically decompressed. Only gzip compression format is supported at this moment. The developer can use the SetRequestHeader function to set the Accept-Encoding header to allow only the gzip compression format.



Applies to RestClient object Syntax



objectname.Retrieve ( dwControl, urlName {, data} {, tokenrequest} )



- Table 10.659:




|Argument|Description|
|---|---|
|objectname|A reference to the RestClient object.|
|dwControl|The name of the DataWindow control, DataStore, or child DataWindow.|
|urlName|A string whose value is the URL.|
|data (optional)|A string or blob data. If this argument is not specified, the retrieve function sends the request to the server with "GET" method, otherwise with "POST".|
|tokenrequest (optional)|A reference to the TokenRequest object for supporting OAuth 2.0. If this parameter is used, the token settings in the SetOAuthToken and SetJWTToken functions will be ignored.<br><br>|
