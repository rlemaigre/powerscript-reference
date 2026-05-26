# Obsolete function

GetCertificateLabel is obsolete, because EAServer is no longer supported since PowerBuilder 2017.



Applies to SSLCallBack objects Syntax



sslcallback.GetCertificateLabel ( thesessioninfo, labels )



- Table 10.221:




|Argument|Description|
|---|---|
|sslcallback|An instance of a customized SSLCallBack object.|
|thesessioninfo|A CORBAObject that contains information about the SSL session. This information can optionally be displayed to the user to provide details about the session.|
|labels|An array of string values that contains the available certificate labels. The user must select one of these labels.|



Return value String. Returns one of the labels passed to the function. Usage



A PowerBuilder application does not usually call the GetCertificateLabel function directly. GetCertificateLabel is called by EAServer when an EAServer client has not specified a certificate label for an SSL connection that requires it.



To override the behavior of any of the functions of the SSLCallBack object, create a standard class user object that descends from SSLCallBack and customize this object as necessary. To let EAServer know which object to use when a callback is required, specify the name of the object in the callbackImpl SSL property. You can set this property value by calling the SetGlobalProperty function.



If you do not provide an implementation of GetCertificateLabel, EAServer receives the CORBA::NO_IMPLEMENT exception and the default implementation of this callback is used. The default implementation always returns the first certificate in the list of labels. If no labels are supplied, the CtsSecurity::NoCertificateException is raised. Any exceptions that may be raised by the function should be added to its prototype.



If your implementation of the callback returns an empty string, the default implementation described above is used and the first certificate label in the list is returned. If the server requires mutual authentication and that certificate is acceptable to the server, the connection proceeds. If the certificate is not acceptable, the connection is refused.



To obtain a useful return value, provide the user with available certificate labels from the labels array passed to the function and ask the user to select one of them. You can also supply additional information obtained from the passed thesessioninfo object.



You can enable the user to cancel the attempt to connect by throwing an exception in this callback function. All exceptions thrown in SSLCallback functions return a CTSSecurity::UserAbortedException to the server. You need to catch the exception by wrapping the ConnectToServer function in a try-catch block.



Examples This example checks whether any certificate labels are available. To give the user more context, it displays host and port information obtained from the SSL session information object in the message box that informs the user that no certificates are available. If certificates are available, it opens a response window that displays available certificate labels. The response window returns the text of the selected item using CloseWithReturn:



int idx, numLabels long rc String ls_rc, sText, sLocation w_response w_ssl_response CTSSecurity_sslSessionInfo mySessionInfo



rc = thesessioninfo._narrow(mySessionInfo, & "SessionInfo" ) sLocation = mySessionInfo.getProperty( "host" ) + &



":" + mySessionInfo.getProperty( "port" ) numLabels = upperbound(labels) IF numLabels <= 0 THEN



MessageBox ("Personal certificate required", & "A certificate is required for connection to " &



+ sLocation + "~nNo certificates are available") ls_rc = ""



ELSE sText = "Available certificates: " FOR idx=1 to numLabels



sText += "~nCertificate[" + & string(idx) + "]: " + labels[idx]



NEXT OpenWithParm( w_ssl_response, SText ) ls_rc = Message.StringParm IF ls_rc = "cancel" then



userabortedexception uae uae = create userabortedexception uae.setmessage("User cancelled connection" &



+ " when asked for certificate") throw uae



END IF END IF RETURN ls_rc



See also ConnectToServer (obsolete) GetCredentialAttribute (obsolete) GetPin (obsolete) TrustVerify (obsolete)



- 10.185 GetChildCount Description Gets the child item count in a JSON parser object. Applies to JSONParser objects Syntax objectname.GetChildCount ( ParentItemHandle )


- Table 10.222:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser object whose item count you want to obtain.|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonObjectItem or JsonArrayItem type.|



Return value Long. Returns the child item count if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null.
