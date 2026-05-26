# Examples

The following example shows the use of the GetStatusCode function to get the response status code:



long ll_statuscode TokenResponse lnv_TokenResponse



ll_statuscode = lnv_TokenResponse.getstatuscode()



See also GetAccessToken GetBody GetExpiresIn GetHeader GetHeaders GetRefreshToken GetStatusText GetTokenError GetTokenType



- 10.275.2 Syntax 2: for ResourceResponse objects Description Gets the response status code. Applies to ResourceResponse objects Syntax objectname.GetStatusCode ( )


- Table 10.339:




|Argument|Description|
|---|---|
|objectname|A reference to the ResourceResponse object in which you want to get the response status code.|



Return value Long. Returns the response status code. Examples



The following example shows the use of the GetStatusCode function to get the response status code:



long ll_statuscode ResourceResponse lnv_ResourceResponse



ll_statuscode = lnv_ResourceResponse.getstatuscode( )



See also GetBody GetHeader GetHeaders GetStatusText
