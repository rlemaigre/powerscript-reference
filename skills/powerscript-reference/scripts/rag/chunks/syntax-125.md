# Syntax

objectname.SendDeleteRequest(string urlName{, string data }, ref string response)



- Table 10.719:




|Argument|Description|
|---|---|
|objectname|The name of the RESTClient object from which you want to send the request.|
|urlName|A string value specifying the URL.|
|data (optional)|A string value specifying the data to send.<br><br>If the user sets the encoding charset in the Content-Type request header, this function will encode the data with the specified charset; if charset is not specified, this function will encode the data in UTF-8 by default.|
|response|The content of the server response. If RESTClient failed to send request or server provides no response, the response value is an empty string. If the response value is compressed as gzip, it will be automatically decompressed. Only gzip compression format is supported at this moment. If the server specified the ContentType response header, and in which the encoding charset is specified, this function will encode the data with the specified charset; if charset is not specified, this function will encode the data in UTF-8 by default.|
