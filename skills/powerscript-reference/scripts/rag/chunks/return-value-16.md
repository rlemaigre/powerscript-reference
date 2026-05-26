# Return value

Integer.



- Returns 1 if it succeeds and -1 if an error occurs. Examples




The following example shows the use of the ClearHeaders function to clear the value of all headers:



int li_return TokenRequest lnv_TokenRequest



li_return = lnv_TokenRequest.clearheaders( )



See also AppendParam GetHeader GetHeaders SetHeader SetHeaders



- 10.64.2 Syntax 2: for OAuthRequest objects Description Clears the header of requests. Applies to OAuthRequest objects Syntax objectname.ClearHeaders ( )


- Table 10.81:




|Argument|Description|
|---|---|
|objectname|A reference to the OAuthRequest object in which you want to clear the request header.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Examples



The following example shows the use of the ClearHeaders function to clear the value of all headers:



int li_return OAuthRequest lnv_OAuthRequest



li_return = lnv_OAuthRequest.clearheaders()
