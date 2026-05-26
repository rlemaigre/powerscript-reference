# 10.224 GetHeader

- 10.224.1 Syntax 1: for TokenRequest objects Description Gets the request header by name. Applies to TokenRequest objects Syntax objectname.GetHeader ( string headerName )


- Table 10.266:




|Argument|Description|
|---|---|
|objectname|A reference to the TokenRequest object in which you want to get the request header.|
|headerName|A string specifying the header name.|



Return value String. Returns the value related to the header name. If any argument's value is null, the method returns null. Examples



The following example shows the use of the GetHeader function to get the value of the content-type header:



string ls_header TokenRequest lnv_TokenRequest



ls_header = lnv_TokenRequest.getheader("content-type")



See also AppendParam ClearHeaders GetHeaders SetHeader SetHeaders



- 10.224.2 Syntax 2: for TokenResponse objects Description Gets the response header by name. Applies to TokenResponse objects Syntax objectname.GetHeader ( string headerName )


- Table 10.267:




|Argument|Description|
|---|---|
|objectname|A reference to the TokenResponse object in which you want to get the response header.|
|headerName|A string specifying the header name.|



Return value String. Returns the value related to the header name. If any argument's value is null, the method returns null. Examples



The following example shows the use of the GetHeader function to get the value of the content-type header:



string ls_header TokenResponse lnv_TokenResponse



ls_header = lnv_TokenResponse.getheader("content-type")



See also GetAccessToken



GetBody GetExpiresIn GetHeaders GetRefreshToken GetStatusCode GetStatusText GetTokenError GetTokenType



- 10.224.3 Syntax 3: for OAuthRequest objects Description Gets the request header by name. Applies to OAuthRequest objects Syntax objectname.GetHeader ( string headerName )


- Table 10.268:




|Argument|Description|
|---|---|
|objectname|A reference to the OAuthRequest object in which you want to get the request header.|
|headerName|A string specifying the header name.|



Return value String. Returns the value related to the header name. If any argument's value is null, the method returns null. Examples



The following example shows the use of the GetHeader function to get the value of the content-type header:



string ls_header OAuthRequest lnv_OAuthRequest



ls_header = lnv_OAuthRequest.getheader("content-type")



See also ClearHeaders GetBody GetHeaders SetAccessToken



SetBody SetHeader SetHeaders



- 10.224.4 Syntax 4: for ResourceResponse objects Description Gets the response header by name. Applies to ResourceResponse objects Syntax objectname.GetHeader ( string headerName )


- Table 10.269:




|Argument|Description|
|---|---|
|objectname|A reference to the ResourceResponse object in which you want to get the response header.|
|headerName|A string specifying the header name.|



Return value String. Returns the value related to the header name. If any argument's value is null, the method returns null. Examples



The following example shows the use of the GetHeader function to get the value of the content-type header:



string ls_header ResourceResponse lnv_ResourceResponse



ls_header = lnv_ResourceResponse.getheader("content-type")



See also GetBody GetHeaders GetStatusCode GetStatusText
