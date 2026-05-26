# 10.181 GetBody

- 10.181.1 Syntax 1: for TokenResponse objects Description Gets the response body into a string. Applies to TokenResponse objects Syntax objectname.GetBody ( string data )



Table 10.216:



|Argument|Description|
|---|---|
|objectname|A reference to the TokenResponse object in which you want to get the response body.|
|data|A string variable into which the function returns data.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null. Examples The following example shows the use of the GetBody function to get the response body:



int li_return string ls_data TokenResponse lnv_tokenResponse



li_return = lnv_tokenResponse.getbody(ls_data)



See also GetAccessToken GetExpiresIn GetHeader GetHeaders GetRefreshToken GetStatusCode GetStatusText GetTokenError GetTokenType



- 10.181.2 Syntax 2: for OAuthRequest objects Description




Gets the body into a string. Applies to OAuthRequest objects Syntax



objectname.GetBody ( string data ) objectname.GetBody ( blob data ) objectname.GetBody ( string data, encoding encodingType )



- Table 10.217:




|Argument|Description|
|---|---|
|objectname|A reference to the OAuthRequest object in which you want to get the body.|
|data|A string or blob variable into which the function returns data. The following data encodings are supported: EncodingANSI!, EncodingUTF8!, EncodingUTF16LE! and EncodingUTF16BE!.|
|encodingType|An encoding value specifying the data which is converted to EncodingUTF16LE!.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null. Examples



The following example shows the use of the GetBody function to get the response body of string data type:



int li_return string ls_data OAuthRequest lnv_OAuthRequest



li_return = lnv_OAuthRequest.getbody(ls_data)



The following example shows the use of the GetBody function to get the response body of string data type in encodingUTF8!:



int li_return string ls_data OAuthRequest lnv_OAuthRequest



li_return = lnv_OAuthRequest.getbody(ls_data, encodingUTF8!)



The following example shows the use of the GetBody function to get the response body of blob data type:



int li_return blob lblb_data OAuthRequest lnv_OAuthRequest



li_return = lnv_OAuthRequest.getbody(lblb_data)



See also ClearHeaders GetHeader GetHeaders SetAccessToken SetBody SetHeader SetHeaders



- 10.181.3 Syntax 3: for ResourceResponse objects Description Gets the response body into a string. Applies to ResourceResponse objects Syntax objectname.GetBody ( string data ) objectname.GetBody ( blob data ) objectname.GetBody ( string data, encoding encodingType )


- Table 10.218:




|Argument|Description|
|---|---|
|objectname|A reference to the ResourceResponse object in which you want to get the response body.|
|data|A string or blob variable into which the function returns data. The following data encodings are supported: EncodingANSI!, EncodingUTF8!, EncodingUTF16LE! and EncodingUTF16BE!.|
|encodingType|An encoding value specifying the data which is converted to EncodingUTF16LE!.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null. Examples



The following example shows the use of the GetBody function to get the response body of string data type:



int li_return string ls_data ResourceResponse lnv_ResourceResponse



li_return = lnv_ResourceResponse.getbody(ls_data)



The following example shows the use of the GetBody function to get the response body of string data type in encodingUTF8!:



int li_return string ls_data ResourceResponse lnv_ResourceResponse



li_return = lnv_ResourceResponse.getbody(ls_data, encodingUTF8!)



The following example shows the use of the GetBody function to get the response body of blob data type:



int li_return blob lblb_data ResourceResponse lnv_ResourceResponse



li_return = lnv_ResourceResponse.getbody(lblb_data)



See also GetHeader GetHeaders GetStatusCode GetStatusText



- 10.182 GetByte Description Extracts data of type Byte from a blob variable. Syntax GetByte ( blobvariable, n, b )


- Table 10.219:




|Argument|Description|
|---|---|
|blobvariable|A variable of the Blob datatype from which you want to extract a value of the Byte datatype|
|n|Tthe number of the position in blobvariable at which you want to retrieve a value of the Byte datatype|
|b|Variable of the Byte datatype in which you want to store the returned data of type Byte|



Return value Integer. Returns 1 if it succeeds or -1 if n exceeds the scope of blobvariable; it returns null if the value of any of its arguments is null. Usage



If you want to get the value of the initial character in a blob, you can use the Byte function without using an argument defining the position of the character.
