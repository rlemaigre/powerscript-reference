# Return value

Integer. Returns 1 if the function succeeds and a negative value if an error occurs. If any argument's value is null, the method returns null.



1 -- Success



- -1 -- General error
- -2 -- Invalid URL
- -3 -- Cannot connect to the Internet
- -4 -- Timeout
- -5 -- Failed to get token
- -11 -- The parameter is invalid
- -12 -- Invalid grant
- -13 -- Invalid SCOP Example The following example adds a new data records and submits it to the server.




String ls_P020_Responsebody,ls_Token,ls_PostData Long ll_InsertRow Integer li__P020_SendReturn Integer li_P020_GetTokenReturn RestClient lrc_P020 lrc_P020 = Create RestClient



//Sets the token parameters TokenRequest ltreq_Appeon ltreq_Appeon.tokenlocation = "http://demo.appeon.com/pb/identityserver/connect/ token" ltreq_Appeon.method = "post" ltreq_Appeon.GrantType = "password" ltreq_Appeon.ClientId = "P0VRQ-ddHn/WWd6lcCNJbaO9ny-JCNHirDJkHNgZ0-M=" ltreq_Appeon.ClientSecret = "K7gNU3sdo-OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=" ltreq_Appeon.UserName = "TestUser" ltreq_Appeon.PassWord = "TestPassword"



//Gets token via RESTClient li_P020_GetTokenReturn = lrc_P020.GetOauthtoken( ltreq_Appeon, ls_Token) If li_P020_GetTokenReturn = 1 Then



lrc_P020.SetRequestHeaders( "Content-Type:application/



json;charset=UTF-8~r~nAccept-Encoding:gzip" ) lrc_P020.SetOauthToken( ls_Token ) //Sets authentication //Adds a new data row ll_InsertRow = dw_Data.InsertRow( 0 ) //Sets the data value dw_Data.SetItem(ll_InsertRow,1,0) dw_Data.SetItem(ll_InsertRow,2,"TestCreate"+String(rand(50))) //Once https://demo.appeon.com/PB/webapi_client/api/department/create Web service detects that



//the passed-in department id is smaller than 1, it will automatically finds the largest ID //value and assigns value to it ls_PostData=dw_Data.Exportrowasjson( ll_InsertRow)//Exports the new data row from dw_Data to JSON string li__P020_SendReturn = lrc_P020.SendPostRequest("https://demo.appeon.com/PB/



webapi_client/api/department/create", ls_PostData, ls_P020_Responsebody) If li__P020_SendReturn <> 1 Or lrc_P020.GetResponseStatusCode() <> 201 Then



//Checks if any error information End If //Finds out if the new data row exists via https://demo.appeon.com/PB/ webapi_client/api/department/retrieve lrc_P020.Retrieve( dw_Data, "https://demo.appeon.com/PB/webapi_client/api/ department/retrieve") Else //Gets the token failure error End If If IsValid(lrc_P020) Then Destroy lrc_P020



See also SetOAuthToken
