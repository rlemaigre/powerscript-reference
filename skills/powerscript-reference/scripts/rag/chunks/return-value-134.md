# Return value

Integer. Returns 1 if the function succeeds and a negative value if an error occurs. If any argument's value is null, the method returns null.



1 -- Success



-1 -- General error Example The following code example adds a new data record and submits it to the server.



String ls_P020_Responsebody,ls_Token,ls_PostData Long ll_InsertRow Integer li__P020_SendReturn



Integer li_P020_GetTokenReturn RestClient lrc_P020 lrc_P020 = Create RestClient



//Sets the token parameters TokenRequest ltreq_Appeon ltreq_Appeon.tokenlocation = "http://demo.appeon.com/pb/identityserver/connect/ token" ltreq_Appeon.method = "post" ltreq_Appeon.GrantType = "password" ltreq_Appeon.ClientId = "P0VRQ-ddHn/WWd6lcCNJbaO9ny-JCNHirDJkHNgZ0-M=" ltreq_Appeon.ClientSecret = "K7gNU3sdo-OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols=" ltreq_Appeon.UserName = "TestUser" ltreq_Appeon.PassWord = "TestPassword"



//Gets token via RESTClient li_P020_GetTokenReturn = lrc_P020.GetOauthtoken( ltreq_Appeon, ls_Token) If li_P020_GetTokenReturn = 1 Then



lrc_P020.SetRequestHeaders( "Content-Type:application/



json;charset=UTF-8~r~nAccept-Encoding:gzip" ) lrc_P020.SetOauthToken( ls_Token ) //Sets authentication //Adds a new data row ll_InsertRow = dw_Data.InsertRow( 0 ) //Sets the data value dw_Data.SetItem(ll_InsertRow,1,0) dw_Data.SetItem(ll_InsertRow,2,"TestCreate"+String(rand(50))) //Once https://demo.appeon.com/PB/webapi_client/api/department/create Web service detects that //the passed-in department id is smaller than 1, it will automatically finds the largest ID //value and assigns value to it ls_PostData=dw_Data.Exportrowasjson( ll_InsertRow)//Exports the new data row from dw_Data to JSON string li__P020_SendReturn = lrc_P020.SendPostRequest("https://demo.appeon.com/PB/



webapi_client/api/department/create", ls_PostData, ls_P020_Responsebody) If li__P020_SendReturn <> 1 Or lrc_P020.GetResponseStatusCode() <> 201 Then



//Checks if any error information End If



//Finds out if the new data record exists via https://demo.appeon.com/PB/ webapi_client/api/department/retrieve



lrc_P020.Retrieve( dw_Data, "https://demo.appeon.com/PB/webapi_client/api/ department/retrieve") Else //Gets the token failure error End If If IsValid(lrc_P020) Then Destroy lrc_P020



See also GetOAuthToken



- 10.625 SetOverlayPicture Description Puts an image in the control's image list into an overlay image list. Applies to ListView and TreeView controls Syntax controlname.SetOverlayPicture ( overlayindex, imageindex )


- Table 10.775:




|Argument|Description|
|---|---|
|controlname|The name of the ListView or TreeView control to which you want to add an overlay image.|
|overlayindex|The index number of the overlay picture in the overlay image list. The overlay image list is a 1-based array. Overlayindex must be 1 (for the first image), a previously designated index (replacing an image), or 1 greater than the current largest index (adding another image). SetOverlayPicture fails if you specify an index that creates gaps in the array.|
|imageindex|The index number of an image in the control's main image list. For ListViews, both the large and small pictures at that index become overlay images. The image is still available for use as an item's main image.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage



An overlay picture must have the same height and width as the picture it is used to overlay. The color specified in the SetPictureMask property when the picture is inserted becomes transparent when the picture is used as an overlay, allowing part of the original image to be visible beneath the overlay.



The overlay list acts as a pointer back to the source image in the regular picture lists. If you delete an image that is also used in the overlay list, the displayed overlay pictures are affected too.
