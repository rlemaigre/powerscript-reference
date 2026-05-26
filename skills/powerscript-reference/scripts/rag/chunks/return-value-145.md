# Return value

Integer. Returns 1 if the function succeeds and a negative value if an error occurs. If any argument's value is null, the method returns null.



1 -- Success



- -1 -- General error
- -2 -- Invalid URL
- -3 -- Cannot connect to the Internet
- -4 -- Timeout
- -6 -- Failed to export JSON
- -7 -- Failed to decompress data
- -10 -- The token is invalid or has expired


- -14 -- Code conversion failed
- -15 -- Unsupported character set Examples




The following example demonstrates the usage of syntax 1: Submit(string urlName, ref string response, DWControl dwObject{, boolean format}).



String ls_P025_ResponseBody Integer li_P025_SendReturn RestClient lrc_P025 lrc_P025 = Create RestClient lrc_P025.SetRequestHeaders( "Content-Type:application/json;charset=UTF-8~r~nAcceptEncoding:gzip" )



lrc_P025.Retrieve( dw_Data, "https://demo.appeon.com/PB/webapi_client/api/ department/retrieve") //Modifies the data in dw_Data If dw_Data.GetRow() > 0 Then



dw_Data.SetItem(dw_Data.GetRow(), 2, "Test submit") //....



End If //Uses the DataWindow JSON //Server determines whether to update according to the data state //DataWindow column name and type must match with that of server li_P025_SendReturn = lrc_P025.submit ("http://demo.appeon.com/PB/webapi_client/ department/updateByJson",ls_P025_Responsebody, dw_Data,True)



If li_P025_SendReturn <> 1 Or lrc_P025.GetResponseStatusCode() <> 200 Then



//Checks if any error information End If //Finds out if data is updated via https://demo.appeon.com/PB/webapi_client/api/ department/retrieve lrc_P025.Retrieve( dw_Data, "https://demo.appeon.com/PB/webapi_client/api/ department/retrieve")



The following example submits the data of the DataWindow primary buffer using syntax 2: Submit(string urlName, ref string response, DWControl dwObject {,DWBuffer dwbuffer}, boolean changedonly, boolean format).



String ls_P025_ResponseBody Integer li_P025_SendReturn RestClient lrc_P025 lrc_P025 = Create RestClient lrc_P025.SetRequestHeaders( "Content-Type:application/json;charset=UTF-8~r~nAcceptEncoding:gzip" )



lrc_P025.Retrieve( dw_Data, "https://demo.appeon.com/PB/webapi_client/api/ department/retrieve") //Modifies the data in dw_Data If dw_Data.GetRow() > 0 Then



dw_Data.SetItem(dw_Data.GetRow(), 2, "Test submit primary") //....



End If //Uses the DataWindow JSON //Server determines whether to update according to the data state //DataWindow column name and type must match with that of server li_P025_SendReturn = lrc_P025.Submit("http://demo.appeon.com/PB/webapi_client/ department/updateByJson",ls_P025_Responsebody, dw_Data,Primary!, True, True) If li_P025_SendReturn <> 1 Or lrc_P025.GetResponseStatusCode() <> 200 Then



//Checks if any error information



//Finds out if data is updated via https://demo.appeon.com/PB/webapi_client/api/ department/retrieve lrc_P025.Retrieve( dw_Data, "https://demo.appeon.com/PB/webapi_client/api/ department/retrieve")



The following example submits the data of the DataWindow delete buffer using syntax 3: Submit(string urlName, ref string response, DWControl dwObject, boolean primarydata, boolean filterdata, boolean deletedata, boolean dwcdata {, boolean format}).



String ls_P025_ResponseBody Integer li_P025_SendReturn RestClient lrc_P025 lrc_P025 = Create RestClient lrc_P025.SetRequestHeaders( "Content-Type:application/json;charset=UTF-8~r~nAcceptEncoding:gzip" )



lrc_P025.Retrieve( dw_Data, "https://demo.appeon.com/PB/webapi_client/api/ department/retrieve") //Modifies the data in dw_Data If dw_Data.RowCount() > 0 Then



dw_Data.DeleteRow( dw_Data.RowCount()) //....



End If //Uses the DataWindow JSON //Server determines whether to update according to the data state //DataWindow column name and type must match with that of server li_P025_SendReturn = lrc_P025.Submit("https://demo.appeon.com/PB/webapi_client/ department/updateByJson", ls_P025_Responsebody, dw_Data, False, False, True, False,



True) If li_P025_SendReturn <> 1 Or lrc_P025.GetResponseStatusCode() <> 200 Then



//Checks if any error information End If //Finds out if data is deleted via https://demo.appeon.com/PB/webapi_client/api/ department/retrieve lrc_P025.Retrieve( dw_Data, "https://demo.appeon.com/PB/webapi_client/api/ department/retrieve")



The following example submits the data of the specified row and column using syntax 4: Submit(string urlName, ref string response, DWControl dwObject, DWBuffer dwbuffer{,long startrow{, long endrow{, long startcol{, long endcol}}}} {, boolean format}).



String ls_P025_ResponseBody Integer li_P025_SendReturn RestClient lrc_P025 lrc_P025 = Create RestClient lrc_P025.SetRequestHeaders( "Content-Type:application/json;charset=UTF-8~r~nAcceptEncoding:gzip" )



//Retrieves data for dw_Data lrc_P025.Retrieve( dw_Data, "https://demo.appeon.com/PB/webapi_client/api/ department/retrieve") //Modifies the data in dw_Data If dw_Data.GetRow() > 0 Then



- dw_Data.SetItem( dw_Data.GetRow(), 2,"Submit row col"+String(rand(100)))
- dw_Data.SetItem( dw_Data.GetRow(), 3,rand(1000)) //....




End If //Uses the DataWindow JSON //Server determines whether to update according to the data state //DataWindow column name and type must match with that of server



li_P025_SendReturn = lrc_P025.Submit("https://demo.appeon.com/PB/webapi_client/ department/updateByJson", ls_P025_Responsebody, dw_Data, Primary!,1, 2, 1, 2) If li_P025_SendReturn <> 1 Or lrc_P025.GetResponseStatusCode() <> 200 Then



//checke the failed information End If //Finds out if data of column 2 is updated via https://demo.appeon.com/PB/ webapi_client/api/department/retrieve lrc_P025.Retrieve( dw_Data, "https://demo.appeon.com/PB/webapi_client/api/ department/retrieve")



The following example submits data via JSONPackage object and token authentication using syntax 5: Submit(string urlName, ref string response, ref JsonPackage package).



JsonPackage ljpk_submit RestClient lrc_JPK_Submit String ls_P017_Token String ls_Submit_Responsebody Integer li_JsonpackageSetValueReturn Integer li_P017_GetTokenReturn Integer li_SubmitReturn



ljpk_submit = Create JsonPackage lrc_JPK_Submit = Create RestClient



//Sets the token parameters TokenRequest ltreq_P017_Appeon ltreq_P017_Appeon.tokenlocation = "http://demo.appeon.com/pb/identityserver/ connect/token" ltreq_P017_Appeon.method = "post" ltreq_P017_Appeon.GrantType = "password" ltreq_P017_Appeon.ClientId = "P0VRQ-ddHn/WWd6lcCNJbaO9ny-JCNHirDJkHNgZ0-M=" ltreq_P017_Appeon.ClientSecret = "K7gNU3sdo-OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=" ltreq_P017_Appeon.UserName = "TestUser" ltreq_P017_Appeon.PassWord = "TestPassword"



//Gets token via RESTClient li_P017_GetTokenReturn = lrc_JPK_Submit.GetOauthtoken( ltreq_P017_Appeon,



ls_P017_Token) If li_P017_GetTokenReturn = 1 Then lrc_JPK_Submit.SetRequestHeaders( "Content-Type:application/



json;charset=UTF-8~r~nAccept-Encoding:gzip" ) lrc_JPK_Submit.SetOauthToken( ls_P017_Token ) //Sets the authentication lrc_JPK_Submit.Retrieve( dw_Data, "https://demo.appeon.com/PB/webapi_client/api/



department/retrieve") //Modifies data If dw_Data.GetRow() >0 Then



dw_Data.SetItem(dw_Data.GetRow(),2,"Test submit from jsonpackage"+String(rand(100)))



//...



End If //Value of JSONPackage comes from dw_Data li_JsonpackageSetValueReturn = ljpk_submit.setvalue( "AppeonJsonPackageKey", dw_Data, True)



//Submits the DataWindow data to server //Requires token authentication //DataWindow column name and type must match with that of server li_SubmitReturn = lrc_JPK_Submit.Submit( "http://demo.appeon.com/PB/webapi_client/



identity/department/UpdateByJsonPackage",ls_Submit_Responsebody, ljpk_submit) If li_SubmitReturn <> 1 Or lrc_JPK_Submit.GetResponseStatusCode() <> 200 Then



//Checks if any error information and checks the submit parameter: ls_Submit_Responsebody



//Finds out if data is updated via https://demo.appeon.com/PB/webapi_client/api/ department/retrieve



lrc_JPK_Submit.Retrieve( dw_Data, "https://demo.appeon.com/PB/webapi_client/api/ department/retrieve") End If



- 10.693 SuspendTransaction (obsolete) Description Suspends the EAServer transaction associated with the calling thread.
