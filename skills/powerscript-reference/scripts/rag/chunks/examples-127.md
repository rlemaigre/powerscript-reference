# Examples

The following example shows the use of the GetHeaders function to get the value of all headers:



string ls_headers OAuthRequest lnv_OAuthRequest



ls_headers = lnv_OAuthRequest.getheaders()



See also ClearHeaders GetBody GetHeader SetAccessToken SetBody SetHeader SetHeaders



- 10.225.4 Syntax 4: for ResourceResponse objects Description Gets the header of all responses. Applies to ResourceResponse objects Syntax objectname.GetHeaders ( )


- Table 10.273:




|Argument|Description|
|---|---|
|objectname|A reference to the ResourceResponse object in which you want to get the response header.|



Return value String. Returns the header information of all responses. Examples



The following example shows the use of the GetHeaders function to get the value of all headers:



string ls_headers ResourceResponse lnv_ResourceResponse



ls_headers = lnv_ResourceResponse.getheaders()
