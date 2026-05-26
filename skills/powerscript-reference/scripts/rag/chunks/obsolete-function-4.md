# Obsolete function

GetCredentialAttribute is obsolete, because EAServer is no longer supported since PowerBuilder 2017.



Applies to SSLCallBack objects Syntax



sslcallback.GetCredentialAttribute ( thesessioninfo, attr, attrvalues )



- Table 10.233:




|Argument|Description|
|---|---|
|sslcallback|An instance of a customized SSLCallBack object.|
|thesessioninfo|A CORBAObject that contains information about the SSL session. This information can optionally be displayed to the user to provide details about the session.|
|attr|A long indicating whether the user needs to specify the path name of an INI file or a profile file. Values are:<br><br>• 1 -- CRED_ATTR_ENTRUST_INIFILE<br>• 2 -- CRED_ATTR_ENTRUST_USERPROFILE<br>|
|attrvalues|An array of string values that contains the available attribute values.|



Return value String. Returns the selected attribute value.
