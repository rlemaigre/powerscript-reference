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
- -15 -- Unsupported character set Example The following example deletes the current row in DataWindow via SendDeleteRequest.


- RestClient lrc_P022 String ls_P022_Response


- Integer li_P022_SendReturn,li_P022_GetTokenReturn String ls_P022_Token


- lrc_P022 = Create RestClient




//Sets the token parameters TokenRequest ltreq_P022_Appeon



- ltreq_P022_Appeon.tokenlocation = "http://demo.appeon.com/pb/identityserver/ connect/token"


- ltreq_P022_Appeon.method = "post" ltreq_P022_Appeon.GrantType = "password"


- ltreq_P022_Appeon.ClientId = "P0VRQ-ddHn/WWd6lcCNJbaO9ny-JCNHirDJkHNgZ0-M=" ltreq_P022_Appeon.ClientSecret = "K7gNU3sdo-OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=" ltreq_P022_Appeon.UserName = "TestUser" ltreq_P022_Appeon.PassWord = "TestPassword"




//Gets token via RESTClient li_P022_GetTokenReturn = lrc_P022.GetOauthtoken( ltreq_P022_Appeon, ls_P022_Token)



- If li_P022_GetTokenReturn = 1 Then lrc_P022.SetRequestHeaders( "Content-Type:application/




json;charset=UTF-8~r~nAccept-Encoding:gzip" ) lrc_P022.SetOauthToken( ls_P022_Token ) //Sets the authentication //Gets data lrc_P022.Retrieve( dw_Data, "https://demo.appeon.com/PB/webapi_client/api/



department/retrieve") If dw_Data.GetRow() > 0 Then



li_P022_SendReturn = lrc_P022.SendDeleteRequest("https:// demo.appeon.com/PB/webapi_client/api/department/ DeleteByID/"+String(dw_Data.GetItemNumber(dw_Data.GetRow(),1)), ls_P022_Response)



If li_P022_SendReturn <> 1 Or lrc_P022.GetResponseStatusCode() <> 200 Then //Checks if any error information End If



//Finds out if data is deleted via https://demo.appeon.com/PB/webapi_client/api/ department/retrieve



lrc_P022.Retrieve( dw_Data, "https://demo.appeon.com/PB/webapi_client/api/ department/retrieve")



End If Else //Gets the token failure error End If



See also SendGetRequest SendPostRequest SendPutRequest SendPatchRequest
