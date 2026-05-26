# Return value

Integer. Returns 1 if the function succeeds and a negative value if an error occurs. If any argument's value is null, the method returns null.



1 -- Success



- -1 -- General error
- -2 -- Invalid URL
- -3 -- Cannot connect to the Internet
- -4 -- Timeout
- -7 -- Failed to decompress data
- -10 -- The token is invalid or has expired
- -14 -- Code conversion failed
- -15 -- Unsupported character set Example The following example shows the usage of SendGetRequest.


- RestClient lrc_P019


- String ls_P019_ResPonse


- lrc_P019 = Create RestClient




//Sets the request header to return a gzip package lrc_P019.SetRequestHeaders("Content-Type:application/json;charset=UTF-8~r~nAcceptEncoding:gzip") lrc_P019.SendGetRequest('https://demo.appeon.com/PB/webapi_client/api/department/ retrieve', ls_P019_ResPonse) If lrc_P019.GetResponseStatusCode() = 200 Then



//Column name and type between dw_Data the returned JSON string ls_P019_ResPonse must match. dw_Data.ImportJson( ls_P019_ResPonse)



Else //Checks if any error according to the value of ResponseStatuscode and ls_Response



SendPostRequest SendPutRequest SendDeleteRequest SendPatchRequest
