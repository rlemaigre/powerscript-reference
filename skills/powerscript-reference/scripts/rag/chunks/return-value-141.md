# Return value

Blob. Returns the result of the decrypt if it succeeds. If any argument's value is null, the method returns null. If an error occurs, throw the exception. Examples The following statements encrypt the data using AES and then decrypt the data using AES.



Blob lblb_data Blob lblb_key Blob lblb_iv Blob lblb_encrypt Blob lblb_decrypt



lblb_data = Blob("Test AES", EncodingANSI!) lblb_key = Blob("Test Key12345678", EncodingANSI!) lblb_iv = Blob("Test IV 12345678", EncodingANSI!)



CrypterObject lnv_CrypterObject lnv_CrypterObject = Create CrypterObject



// Encrypt data using AES lblb_encrypt = lnv_CrypterObject.SymmetricEncrypt(AES!, lblb_data, lblb_key, &



OperationModeCBC!, lblb_iv, PKCSPadding!)



// Decrypt data using AES lblb_decrypt = lnv_CrypterObject.SymmetricDecrypt(AES!, lblb_encrypt, lblb_key, &



OperationModeCBC!, lblb_iv, PKCSPadding!) messagebox("SymmetricDecrypt", string(lblb_decrypt, EncodingANSI!))



See also SymmetricEncrypt AsymmetricEncrypt AsymmetricDecrypt AsymmetricSign AsymmetricVerifySign AsymmetricGenerateKey MD5 SHA HMAC



- 10.695 SymmetricEncrypt Description Encrypts a blob value using symmetric algorithm. Applies to CrypterObject objects Syntax




crypter.SymmetricEncrypt ( algorithm, variable, key{, operationmode{, iv{, padding}}})
