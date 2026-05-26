# Examples

The following example shows the use of the SetHeaders function to set the value of the content-type header and the charset header:



int li_return TokenRequest lnv_TokenRequest



li_return = lnv_TokenRequest.setheaders("content-type:application/x-www-formurlencoded; charset=UTF-8~r~nCache-Control:no-cache")



See also AppendParam ClearHeaders GetHeader GetHeaders SetHeader



- 10.614.2 Syntax 2: for OAuthRequest objects Description Sets the header information of all requests. Applies to OAuthRequest objects Syntax objectname.SetHeaders ( string headers )


- Table 10.761:




|Argument|Description|
|---|---|
|objectname|A reference to the OAuthRequest object in which you want to set the request header.|
|headers|A string specifying all of the header names.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null. Examples



The following example shows the use of the SetHeaders function to set the value of the content-type header and the charset header:



int li_return OAuthRequest lnv_OAuthRequest



li_return = lnv_OAuthRequest.setheaders("content-type:application/x-www-formurlencoded; charset=UTF-8~r~nCache-Control:no-cache")
