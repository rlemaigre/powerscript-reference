# Return value

Blob. Returns the result of the SHA if it succeeds. If any argument's value is null, the method returns null. If an error occurs, throw the exception.



Examples This statement encrypts the data using SHA1.



Blob lblb_data Blob lblb_sha1



lblb_data = Blob("Test SHA1", EncodingANSI!) CrypterObject lnv_CrypterObject lnv_CrypterObject = Create CrypterObject // Encrypt with SHA lblb_sha1= lnv_CrypterObject.SHA(SHA1!, lblb_data)



See also SymmetricEncrypt SymmetricDecrypt AsymmetricEncrypt AsymmetricDecrypt AsymmetricSign AsymmetricVerifySign AsymmetricGenerateKey MD5 HMAC



- 10.667 SharedObjectDirectory Description Retrieves the list of objects that have been registered for sharing. Syntax SharedObjectDirectory ( instancenames {, classnames } )


- Table 10.830:




|Argument|Description|
|---|---|
|instancenames|An unbounded array of type string in which you want to store the names of objects that have been registered for sharing|
|classnames (option|Anal) unbounded array of type string in which you want to store the class names of objects registered for sharing|



Return value ErrorReturn. Returns one of the following values:



- • Success! -- The function succeeded
- • FeatureNotSupportedError! -- This function is not supported on this platform Usage Use this function to obtain a list of objects that have been registered for sharing. Examples In this example, the application retrieves the list of shared objects and their class names:




errorreturn status string InstanceNames[] string ClassNames[]



status = SharedObjectDirectory(InstanceNames, & ClassNames)



See also SharedObjectGet SharedObjectRegister



- 10.668 SharedObjectGet Description Gets a reference to a shared object instance. Syntax SharedObjectGet ( instancename , objectinstance )


- Table 10.831:




|Argument|Description|
|---|---|
|instancename|The name of a shared object instance to which you want to obtain references. The name you specify must match the name given to the object instance when it was first registered with the SharedObjectRegister function.|
|objectinstance|An object variable of type PowerObject in which you want to store an instance of a shared object.|



Return value ErrorReturn. Returns one of the following values:



- • Success! -- The function succeeded
- • SharedObjectCreateInstanceError! -- The local reference to the shared object could not be created


- • SharedObjectNotExistsError! -- The instance name has not been registered
