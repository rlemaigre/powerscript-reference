# Usage

A PowerBuilder application does not usually call the GetCredentialAttribute function directly. GetCredentialAttribute is called by EAServer if the useEntrustID property has been set and the EAServer client has not specified the path name of an Entrust INI file or profile.



To override the behavior of any of the functions of the SSLCallBack object, create a standard class user object that descends from SSLCallBack and customize this object as necessary. To let EAServer know which object to use when a callback is required, specify the name of the object in the callbackImpl SSL property. You can set this property value by calling the SetGlobalProperty function.



If you do not provide an implementation of GetCredentialAttribute, EAServer receives the CORBA::NO_IMPLEMENT exception and the default implementation of this callback is used. The default implementation always returns the first value in the list of values supplied. If there are no values supplied, it raises CtsSecurity::NoValueException. Any exceptions that may be raised by the function should be added to its prototype.



If your implementation of the callback returns an empty string, the default implementation described above is used and the first value in the list is returned. If that value is acceptable to the server, the connection proceeds. If the value is not acceptable, the connection is refused.



To obtain a useful return value, provide the user with available attribute values from the attrvalues array passed to the function and ask the user to select one of them. You can also supply additional information, such as the server certificate, obtained from the passed thesessioninfo object.



You can enable the user to cancel the attempt to connect by throwing an exception in this callback function. All exceptions thrown in SSLCallback functions return a CTSSecurity::UserAbortedException to the server. You need to catch the exception by wrapping the ConnectToServer function in a try-catch block.
