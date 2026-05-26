# See also

DirectoryExists GetCurrentDirectory



- 10.519 RequestResource Description Sends a request to get resource. Applies to OAuthClient objects Syntax




objectname.RequestResource ( OAuthRequest oAuthRequest, ResourceResponse resourceResponse )



- Table 10.643:




|Argument|Description|
|---|---|
|objectname|A reference to the OAuthClient object.|
|oAuthRequest|A reference to the OAuthRequest object specifying the request information.|
|resourceResponse|A reference to the ResourceResponse object into which the function returns the object.|



Return value Integer. Returns the value as follows. If any argument's value is null, the method returns null.



- 1 -- Success


- -1 -- General error
- -2 -- Invalid URL
- -3 -- Cannot connect to the Internet
- -4 -- Timeout Examples The following example shows the use of the RequestResource function to get resource:




int li_return OAuthClient lnv_OAuthClient OAuthRequest lnv_OAuthRequest ResourceResponse lnv_ResourceResponse



lnv_OAuthClient = create OAuthClient li_return = lnv_OAuthClient.requestresource(lnv_OAuthRequest, lnv_ResourceResponse)



See also AccessToken
