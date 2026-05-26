# 10.583 SendPatchRequest Description

Sends the HTTP PATCH request to the server and then gets the content of the server response. It does not parse the HTTP response code and content of the server response.



It is not recommended to use this method to process large data (20 MB or 100,000 data rows can be considered as large data based on our tests).



Applies to RESTClient objects Syntax



objectname.SendPatchRequest(string urlName, string data, ref string response)
