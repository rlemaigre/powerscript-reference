# Return value

Integer. Returns 1 if the function succeeds and a negative value if an error occurs. If any argument's value is null, the method returns null.



- 1 -- Success




-1 -- General error



- Example 1 The following code example sets the JWT token authentication.



String ls_P028_JWTToken Integer li_P028_GetJWTTokenReturn RestClient lrc_P028 lrc_P028 = Create RestClient



lrc_P028.SetRequestHeaders( "Content-Type:application/json;charset=UTF-8~r~nAcceptEncoding:gzip" ) //Sets the request header //Gets the JWT token. The second parameter provides the value according to the



token server request. li_P028_GetJWTTokenReturn=lrc_P028.GetJWTToken("https://demo.appeon.com/pb/jwt/ HSExample/api/values/GetToken", '{"Username":"user1","Password":"password1"}',



ls_P028_JWTToken)



If li_P028_GetJWTTokenReturn = 1 Then //Sets the JWT token lrc_P028.SetJwtToken( ls_P028_JWTToken) //Retrieves data for dw_Data lrc_P028.retrieve( dw_Data, "https://demo.appeon.com/pb/jwt/HSExample/api/



department/retrieve") Else



//Prints the GetJWTToken error message if any End If



- Example 2 The following code example sets the JWT token authentication.




String ls_P028_JWTToken Integer li_P028_GetJWTTokenReturn JsonPackage ljpk_JWTINF ljpk_JWTINF =Create JsonPackage RestClient lrc_P028 lrc_P028 = Create RestClient



lrc_P028.SetRequestHeaders( "Content-Type:application/json;charset=UTF-8~r~nAcceptEncoding:gzip" ) //Sets the request header //Gets the JWT token. The second parameter provides the value according to the



token server request.



- li_P028_GetJWTTokenReturn=lrc_P028.GetJWTToken("http://demo.appeon.com/pb/jwt/ HSExample/api/values/Authenticate", '{"Username":"user1","Password":"password1"}',




ls_P028_JWTToken)



If li_P028_GetJWTTokenReturn = 1 Then //If the token server returns the token as well as other information, gets the token first and then provides it to RestClient //in this example, the token server returns a JSON string which contains token, therefore, gets the token via the following scripts ljpk_JWTINF.Loadstring( ls_P028_JWTToken)



If ljpk_JWTINF.ContainsKey( "token" ) Then



ls_P028_JWTToken = ljpk_JWTINF.GetValueString( "token" ) End If //Sets the JWT token lrc_P028.SetJwtToken( ls_P028_JWTToken) //Retrieves data for dw_Data lrc_P028.retrieve( dw_Data, "https://demo.appeon.com/pb/jwt/HSExample/api/



department/retrieve") Else



//Prints the GetJWTToken error message if any End If



See also GetJWTToken



- 10.617 SetLevelPictures Description Sets the picture indexes for all items at a particular level. Applies to TreeView controls Syntax




treeviewname.SetLevelPictures ( level, pictureindex, selectedpictureindex, statepictureindex, overlaypictureindex)



- Table 10.767:




|Argument|Description|
|---|---|
|treeviewname|The TreeView control in which you want to set the pictures for a given TreeView level|
|level|The TreeView level for which you are setting the picture indexes|
|pictureindex|An index from the regular picture list specifying the picture to be displayed when the item is not selected|
|selectedpictureind|exAn index from the regular picture list specifying the picture to be displayed when the item is selected|
|statepictureindex|An index from the state picture list specifying the picture to be displayed to the left of the regular picture|
|overlaypictureinde|xAn index from the overlay picture list specifying the picture to be displayed on top of the regular picture|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage



To set pictures for individual items, call GetItem, set the picture properties, and call SetItem to copy the changes to the TreeView. You must specify a value for all four indexes. To display nothing, specify 0.



Examples This example sets the pictures for TreeView level 3, then inserts two new TreeView items:



long ll_tvi, ll_child, ll_child2 int li_pict, li_level treeviewitem l_tvi



li_level = 6 tv_list.SetLevelPictures( 3, li_level, li_level, &



li_level, li_level)



ll_tvi = tv_list.FindItem(RootTreeItem! , 0) ll_child = tv_list.InsertItemLast(ll_tvi, "Walton",2) ll_child2 = tv_list.InsertItemLast(ll_child, &



"Spitfire Suite", li_level) tv_list.ExpandItem(ll_child) tv_list.SetFirstVisible(ll_child)



See also AddPicture



- 10.618 SetLibraryList Description Changes the files in the library search path of the application at runtime.
