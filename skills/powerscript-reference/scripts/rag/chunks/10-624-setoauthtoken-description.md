# 10.624 SetOAuthToken Description

Sets the OAuth 2.0 token string to the HTTP request header which will be sent to the server in the following interface: Submit, SendGetRequest, SendPostRequest, SendDeleteRequest, SendPatchRequest, SendPutRequest, Retrieve, and RetrieveOne. If a token has been set in the



HTTP request header, it will replace the original token. Applies to RESTClient objects Syntax



objectname.SetOAuthToken(string token)



- Table 10.774:




|Argument|Description|
|---|---|
|objectname|The name of the RESTClient object in which you want to set the OAuth 2.0 access token.|
|token|A string value specifying the OAuth 2.0 access token.|
