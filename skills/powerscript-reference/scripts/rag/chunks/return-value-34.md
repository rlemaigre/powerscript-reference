# Return value

Integer. Returns 1 if the function succeeds and a negative value if an error occurs. If any argument's value is null, the method returns null.



1 -- Success



- -1 -- General error
- -2 -- Invalid URL
- -3 -- Cannot connect to the Internet
- -4 -- Timeout
- -5 -- Failed to get token.
- -7 -- Failed to decompress data
- -14 -- Code conversion failed
- -15 -- Unsupported character set


- Example 1 The following code example gets the data that requires JWT token authentication.



String ls_P028_JWTToken Integer li_P028_GetJWTTokenReturn RestClient lrc_P028 lrc_P028 = Create RestClient



lrc_P028.SetRequestHeaders( "Content-Type:application/json;charset=UTF-8~r~nAcceptEncoding:gzip" ) //Sets the request header //Gets the JWT token. The second parameter provides the value according to the



token server request. li_P028_GetJWTTokenReturn=lrc_P028.GetJWTToken("https://demo.appeon.com/pb/jwt/ HSExample/api/values/GetToken", '{"Username":"user1","Password":"password1"}',



ls_P028_JWTToken)



If li_P028_GetJWTTokenReturn = 1 Then //Sets the JWT token lrc_P028.SetJwtToken( ls_P028_JWTToken) //Retrieves data for dw_Data lrc_P028.retrieve( dw_Data, "https://demo.appeon.com/pb/jwt/HSExample/api/



department/retrieve") Else



//Prints the GetJWTToken error message if any End If



- Example 2




The following code example gets the data that requires JWT token authentication.



String ls_P028_JWTToken Integer li_P028_GetJWTTokenReturn JsonPackage ljpk_JWTINF ljpk_JWTINF =Create JsonPackage RestClient lrc_P028 lrc_P028 = Create RestClient



lrc_P028.SetRequestHeaders( "Content-Type:application/json;charset=UTF-8~r~nAcceptEncoding:gzip" ) //Sets the request header //Gets the JWT token. The second parameter provides the value according to the



token server request. li_P028_GetJWTTokenReturn=lrc_P028.GetJWTToken("http://demo.appeon.com/pb/jwt/ HSExample/api/values/Authenticate", '{"Username":"user1","Password":"password1"}',



ls_P028_JWTToken)



If li_P028_GetJWTTokenReturn = 1 Then //If the token server returns the token as well as other information, gets the token first and then provides it to RestClient //in this example, the token server returns a JSON string which contains token, therefore, gets the token via the following scripts ljpk_JWTINF.Loadstring( ls_P028_JWTToken) If ljpk_JWTINF.ContainsKey( "token" ) Then



ls_P028_JWTToken = ljpk_JWTINF.GetValueString( "token" ) End If //Sets the JWT token lrc_P028.SetJwtToken( ls_P028_JWTToken) //Retrieves data for dw_Data lrc_P028.retrieve( dw_Data, "https://demo.appeon.com/pb/jwt/HSExample/api/



department/retrieve") Else



//Prints the GetJWTToken error message if any End If



See also SetJWTToken



- 10.242 GetKey Description Gets the key name. Applies to JSONPackage objects Syntax objectname.GetKey ( Index )


- Table 10.300:




|Argument|Description|
|---|---|
|objectname|The name of the JSONPackage object whose key you want to obtain.|
|Index|A long value specifying the index of the key.|
