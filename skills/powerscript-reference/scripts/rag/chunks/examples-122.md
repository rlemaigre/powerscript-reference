# Examples

This script runs another PowerBuilder application and uses the OSType property of the Environment object to determine how to specify the path:



string path environment env integer rtn



rtn = GetEnvironment(env) IF rtn <> 1 THEN RETURN



CHOOSE CASE env.OSType CASE aix!



path = "/export/home/pb_apps/analyze.exe" CASE Windows!, WindowsNT!



path = "C:\PB_apps\analyze.exe" CASE ELSE



RETURN END CHOOSE Run(path)



This example displays a message box that shows the major, minor, and fixes versions and the build number of PowerBuilder:



string ls_version environment env integer rtn



rtn = GetEnvironment(env) IF rtn <> 1 THEN RETURN ls_version = "Version: "+ string(env.pbmajorrevision) ls_version += "." + string(env.pbminorrevision) ls_version += "." + string(env.pbfixesrevision) ls_version += " Build: " + string(env.pbbuildnumber) MessageBox("PowerBuilder Version", ls_version)



- 10.216 GetExpiresIn Description Gets the lifetime of the access token returned by the authorization server.




Applies to TokenResponse objects Syntax



objectname.GetExpiresIn ( )



- Table 10.258:




|Argument|Description|
|---|---|
|objectname|A reference to the TokenResponse object in which you want to get the lifetime of the access token.|



Return value Long. Values are: >0 -- Expiration time of the access token in seconds; 0 -- Never expires. Examples



The following example shows the use of the GetExpiresIn function to get the lifetime of the access token:



long ll_expiresin TokenResponse lnv_TokenResponse



ll_expiresin = lnv_TokenResponse.getexpiresin()



See also GetAccessToken GetBody GetHeader GetHeaders GetRefreshToken GetStatusCode GetStatusText GetTokenError GetTokenType
