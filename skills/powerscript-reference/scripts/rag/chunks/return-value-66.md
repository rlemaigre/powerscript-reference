# Return value

Blob. Returns the result of the MD5 if it succeeds. If any argument's value is null, the method returns null. If an error occurs, throw the exception.



Examples This statement encrypts the data with MD5.



Blob lblb_data Blob lblb_md5



lblb_data = Blob("Test MD5", EncodingANSI!) CrypterObject lnv_CrypterObject lnv_CrypterObject = Create CrypterObject // Encrypt with MD5 lblb_md5 = lnv_CrypterObject.MD5(lblb_data)



See also SymmetricEncrypt SymmetricDecrypt AsymmetricEncrypt AsymmetricDecrypt AsymmetricSign AsymmetricVerifySign AsymmetricGenerateKey SHA



HMAC
