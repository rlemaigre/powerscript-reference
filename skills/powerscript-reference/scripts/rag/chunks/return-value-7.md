# Return value

Integer. Returns 1 if it succeeds and -1 if it failed. If any argument's value is null, the method returns null. If an error occurs, throw the exception.



Examples This statement signs the data with RAS and validates the signature.



Blob lblb_data Blob lblb_privKey Blob lblb_pubKey Blob lblb_signature Integer li_isPass



lblb_data = Blob("Test Rsa", EncodingANSI!) CrypterObject lnv_CrypterObject lnv_CrypterObject = Create CrypterObject // Generate the private key lnv_CrypterObject.AsymmetricGenerateKey(RSA!, 1024, lblb_privKey, lblb_pubKey) // Sign data with RSA lblb_signature = lnv_CrypterObject.AsymmetricSign(RSA!, lblb_data, lblb_privKey) // Validate the RSA signature li_isPass = lnv_CrypterObject.AsymmetricVerifySign(RSA!, lblb_data, lblb_pubKey,



lblb_signature) if li_isPass = 1 then



messagebox("Success", "Verification succeeded!") else



messagebox("Error", "Verification failed!") end if



See also SymmetricEncrypt SymmetricDecrypt AsymmetricEncrypt AsymmetricDecrypt AsymmetricSign AsymmetricGenerateKey MD5 SHA HMAC



- 10.37 ATan Description Calculates the arctangent of an angle. Syntax ATan ( n )


- Table 10.44:




|Argument|Description|
|---|---|
|n|The ratio of the lengths of two sides of a triangle for which you want a corresponding angle (in radians)|
