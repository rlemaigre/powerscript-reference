# Obsolete function

GetPin is obsolete, because EAServer is no longer supported since PowerBuilder 2017.



Applies to SSLCallBack objects Syntax



sslcallback.GetPin ( thesessioninfo, timedout )



- Table 10.313:




|Argument|Description|
|---|---|
|sslcallback|An instance of a customized SSLCallBack object.|
|thesessioninfo|A CORBAObject that contains information about the SSL session. This information can optionally be displayed to the user to provide details about the session.|
|timedout|A boolean value that indicates the reason for the callback. A value of true indicates that the PIN timed out and must be obtained again. A value of false indicates that the PIN was not specified at the time of the SSL connection.|



Return value String. Returns the PIN specified by the user. Usage



A PowerBuilder application does not usually call the GetPin function directly. GetPin is called by EAServer when an EAServer client has not specified a PIN for logging in to a PKCS 11 token for an SSL connection.



To override the behavior of any of the functions of the SSLCallBack object, create a standard class user object that descends from SSLCallBack and customize this object as necessary. To let EAServer know which object to use when a callback is required, specify the name of the object in the callbackImpl SSL property. You can set this property value by calling the SetGlobalProperty function.



If you do not provide an implementation of GetPin, EAServer receives the CORBA::NO_IMPLEMENT exception and an empty string is returned. To obtain a



useful return value, code the function to request the user to provide a PIN. You can supply information to the user such as the token name from the passed thesessioninfo object.



If an incorrect PIN or an empty string is returned, EAServer invokes the TrustVerify callback.



You can enable the user to cancel the attempt to connect by throwing an exception in this callback function. All exceptions thrown in SSLCallback functions return a CTSSecurity::UserAbortedException to the server. You need to catch the exception by wrapping the ConnectToServer function in a try-catch block.
