# Obsolete function

TrustVerify is obsolete, because EAServer is no longer supported since PowerBuilder 2017.



Applies to SSLCallBack objects Syntax



sslcallback.TrustVerify ( thesessioninfo, reason )



- Table 10.899:




|Argument|Description|
|---|---|
|sslcallback|An instance of a customized SSLCallBack object|
|thesessioninfo|A CORBAObject that contains information about the SSL session|
|reason|A long value indicating the reason for the call back. Values are:<br><br>• 1 REASON_CHAIN_INCOMPLETE<br>• 2 REASON_UNKNOWN_CA<br>• 3 REASON_CHAIN_EXPIRED<br>• 4 REASON_TRUSTDBPINNOTSET<br>• 5 REASON_TRUSTDBLOGINFAILED<br>|



Return value Long. Returns one of the following values:



- 1 -- TRUST_ONCE (accept the current connection)
- 2 -- TRUST_FAIL (reject the current connection)
- 3 -- TRUST_ALWAYS (accept and mark as trusted in the database)
- 4 -- TRUST_NEVER (reject and mark as untrusted in the database)
- 5 -- TRUST_SESSION (accept now and throughout the current session)
- 6 -- TRUST_FAIL_SESSION (reject throughout the current session) Usage




A PowerBuilder application does not usually call the TrustVerify function directly. TrustVerify is called by EAServer when the internal SSL trust verification check fails to



verify the server's certificate chain or when the PIN to log in to the Sybase PKCS11 token was not supplied or incorrect. TrustVerify can be invoked when you are using any SSL protocol, because server authentication is a required step in the SSL handshake process.



To override the behavior of any of the functions of the SSLCallBack object, create a standard class user object that descends from SSLCallBack and customize this object as necessary. To let EAServer know which object to use when a callback is required, specify the name of the object in the callbackImpl SSL property. You can set this property value by calling the SetGlobalProperty function.



If you do not provide an implementation of TrustVerify, EAServer receives the CORBA::NO_IMPLEMENT exception and the connection is rejected.



To obtain a useful return value, provide the user with information about the reason for failure and ask the user to determine whether the server certificate chain can be trusted so that the session can continue. If the user specifies TRUST_FAIL or TRUST_ONCE, the function may be called again during the current session.



You can enable the user to cancel the attempt to connect by throwing an exception in this callback function. You need to catch the exception by wrapping the ConnectToServer function in a try-catch block.
