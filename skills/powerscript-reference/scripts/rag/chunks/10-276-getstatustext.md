# 10.276 GetStatusText

- 10.276.1 Syntax 1: for TokenResponse objects Description Gets the response status description. Applies to TokenResponse objects Syntax objectname.GetStatusText ( )


- Table 10.340:




|Argument|Description|
|---|---|
|objectname|A reference to the TokenResponse object in which you want to get the response status description.|



Return value String. Returns the response status description. Examples



The following example shows the use of the GetStatusText function to get the response status text:



string ls_statustext TokenResponse lnv_TokenResponse



ls_statustext = lnv_TokenResponse.getstatustext( )



See also GetAccessToken GetBody GetExpiresIn GetHeader GetHeaders GetRefreshToken



GetStatusCode GetTokenError GetTokenType



- 10.276.2 Syntax 2: for ResourceResponse objects Description Gets the response status description. Applies to ResourceResponse objects Syntax objectname.GetStatusText ( )


- Table 10.341:




|Argument|Description|
|---|---|
|objectname|A reference to the ResourceResponse object in which you want to get the response status description.|



Return value String. Returns the response status description. Examples



The following example shows the use of the GetStatusText function to get the response status text:



string ls_statustext ResourceResponse lnv_ResourceResponse



ls_statustext = lnv_ResourceResponse.getstatustext( )



See also GetBody GetHeader GetHeaders GetStatusCode



- 10.277 GetStatus (obsolete) Description Returns the status of the EAServer transaction associated with the calling thread.
