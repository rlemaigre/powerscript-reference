# 10.582 SendGetRequest Description

Sends the HTTP GET request to the server and then gets the content of the server response. It does not parse the HTTP response code and content of the server response.



It is not recommended to use this method to process large data (20 MB or 100,000 data rows can be considered as large data based on our tests).



Applies to RESTClient objects Syntax



objectname.SendGetRequest(string urlName, ref string response)



- Table 10.720:




|Argument|Description|
|---|---|
|objectname|The name of the RESTClient object from which you want to send the request.|
|urlName|A string value specifying the URL.|
|response|The content of the server response. If RESTClient failed to send request or server provides no response, the response value is an empty string. If the response value is compressed as gzip, it will be automatically decompressed. Only gzip compression format is supported at this moment. If the server specified the ContentType response header, and in which the encoding charset is specified, this function will encode the data with the specified charset, if charset is not specified, this function will encode the data in UTF-8 by default.|
