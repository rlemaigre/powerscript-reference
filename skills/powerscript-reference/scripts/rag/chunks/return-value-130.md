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
- -15 -- Unsupported character set Example




The following example updates the value of Department Name for the current row via SendPutRequest.



- RestClient lrc_P021


- String ls_P021_Response String ls_P021_PostData String ls_P021_Token Integer li_P021_SendReturn Integer li_P021_GetTokenReturn


- lrc_P021 = Create RestClient




//Sets the token parameters TokenRequest ltreq_P021_Appeon ltreq_P021_Appeon.tokenlocation = "http://demo.appeon.com/pb/identityserver/ connect/token" ltreq_P021_Appeon.method = "post" ltreq_P021_Appeon.GrantType = "password" ltreq_P021_Appeon.ClientId = "P0VRQ-ddHn/WWd6lcCNJbaO9ny-JCNHirDJkHNgZ0-M=" ltreq_P021_Appeon.ClientSecret = "K7gNU3sdo-OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=" ltreq_P021_Appeon.UserName = "TestUser" ltreq_P021_Appeon.PassWord = "TestPassword"



//Gets token via RESTClient



- li_P021_GetTokenReturn = lrc_P021.GetOauthtoken( ltreq_P021_Appeon, ls_P021_Token) If li_P021_GetTokenReturn = 1 Then


- lrc_P021.SetRequestHeaders( "Content-Type:application/json;charset=UTF-8~r~nAcceptEncoding:gzip" )


- lrc_P021.SetOauthToken( ls_P021_Token ) //Sets the authentication


- lrc_P021.Retrieve( dw_Data, "https://demo.appeon.com/PB/webapi_client/api/ department/retrieve") If dw_Data.GetRow() > 0 Then




//Modifies the data in DataWindow dw_Data.SetItem(dw_Data.GetRow(),2,"Update"+String(rand(50))) //Exports a DataWindow row to JSON string ls_P021_PostData=dw_Data.Exportrowasjson( dw_Data.GetRow()) li_P021_SendReturn = lrc_P021.SendPutRequest("https://demo.appeon.com/PB/



webapi_client/api/department/update",ls_P021_PostData, ls_P021_Response) If li_P021_SendReturn <> 1 Or lrc_P021.GetResponseStatusCode() <> 200 Then



//Checks the error information End If



//Finds out if data is modified via https://demo.appeon.com/PB/webapi_client/api/ department/retrieve



lrc_P021.Retrieve( dw_Data, "https://demo.appeon.com/PB/webapi_client/api/ department/retrieve") End If Else //Gets the token failure error



End If



See also SendGetRequest SendPostRequest SendDeleteRequest SendPatchRequest



- 10.586 SendRequest Description Sends the request from the HTTPClient object to the server.




It is not recommended to use this method to process large data (20 MB or 100,000 data rows can be considered as large data based on our tests).



Applies to HTTPClient objects Syntax



objectname.SendRequest ( methodName, urlName ) objectname.SendRequest ( methodName, urlName, string data ) objectname.SendRequest ( methodName, urlName, blob data ) objectname.SendRequest ( methodName, urlName, string data, encodingType )



- Table 10.724:




|Argument|Description|
|---|---|
|objectname|The name of the HTTPClient object from which you want to send the request.|
|methodName|A string value specifying the request method name, including GET, POST, PUT, DELETE, OPTIONS, TRACE, HEAD, and CONNECT.|
|urlName|A string value specifying the URL.|
|data|A blob or string value specifying the data.|
|encodingType (optional)|A value specifying the encoding charset of the string data to be sent: EncodingANSI!, EncodingUTF8!, EncodingUTF16LE!, or EncodingUTF16BE!.<br><br>For the string data, it will be encoded in the charset specified by the encodingType argument; if the encodingType argument is not specified, the data will be encoded in the charset specified in the Content-Type request header; if no charset is specified in the Content-Type request header, the data will be encoded in UTF-8 by default.|



Return value Integer. Returns values as follows. If any argument's value is null, the method returns null.



1 -- Success



- -1 -- General error
- -2 -- Invalid URL
- -3 -- Cannot connect to the Internet
- -4 -- Timed out
- -5 -- Code conversion failed
- -6 -- Unsupported character sets


- Example 1 This example requests information from a URL using the GET method:



Integer li_rc String ls_string HttpClient lnv_HttpClient lnv_HttpClient = Create HttpClient



// Sends request using GET method li_rc = lnv_HttpClient.SendRequest("GET", "http://demo.appeon.com/PB/webapi_client/ employee/102") // Obtains the response data if li_rc = 1 and lnv_HttpClient.GetResponseStatusCode() = 200 then



lnv_HttpClient.GetResponseBody(ls_string) end if



- Example 2



This example sends a string query when requesting information from a URL using the POST method:



Integer li_rc String ls_ReturnJson HttpClient lnv_HttpClient lnv_HttpClient = Create HttpClient



- String ls_json = '{"empId":100, "fname":" John", "lname": "Guevara"}'




// Constructs a POST request (supports all headers) lnv_HttpClient.SetRequestHeader("Content-Type", "application/json;charset=UTF-8") // Content-Length header set by SendRequest



// Sends request using POST method (to add the string data to the body and set to



the Content-Length header) li_rc = lnv_HttpClient.SendRequest("POST", "http://demo.appeon.com/PB/ webapi_client/employee", ls_json)



// Obtains the response data if li_rc = 1 and lnv_HttpClient.GetResponseStatusCode() = 200 then



lnv_HttpClient.GetResponseBody(ls_ReturnJson) end if



- Example 3




This example sends a string query in EncodingUTF8 when requesting information from a URL using the POST method:



Integer li_rc String ls_ReturnJson HttpClient lnv_HttpClient



lnv_HttpClient = Create HttpClient



- String ls_json = '{"empId":101, "fname":" John", "lname": "Guevara"}'




// Constructs a POST request (supports all headers) lnv_HttpClient.SetRequestHeader("Content-Type", "application/json;charset=UTF-8") // Content-Length header set by SendRequest



// Sends request using POST method (to add the string data to the body and set to



the Content-Length header) li_rc = lnv_HttpClient.SendRequest("POST", " http://demo.appeon.com/PB/ webapi_client/employee", ls_json, EncodingUTF8!) // Obtains the response data if li_rc = 1 and lnv_HttpClient.GetResponseStatusCode() = 200 then



lnv_HttpClient.GetResponseBody(ls_ReturnJson) end if
