# Return value

Blob. Returns the result of the decrypt if it succeeds. If any argument's value is null, the method returns null. If an error occurs, throw the exception.



Examples This statement encrypts the data using RSA and then returns the encrypted data.



Blob lblb_data Blob lblb_privKey Blob lblb_pubKey Blob lblb_encrypt Blob lblb_decrypt



lblb_data = Blob("Test Rsa", EncodingANSI!) CrypterObject lnv_CrypterObject lnv_CrypterObject = Create CrypterObject // Generate the private key lnv_CrypterObject.AsymmetricGenerateKey(RSA!, 1024, lblb_privKey, lblb_pubKey) // Encrypt data using RSA lblb_encrypt = lnv_CrypterObject.AsymmetricEncrypt(RSA!, lblb_data, lblb_pubKey) // Decrypt data using RSA lblb_decrypt = lnv_CrypterObject.AsymmetricDecrypt(RSA!, lblb_encrypt,



lblb_privKey) messagebox("AsymmetricDecrypt", string(lblb_decrypt, EncodingANSI!))



See also SymmetricEncrypt SymmetricDecrypt AsymmetricEncrypt AsymmetricSign AsymmetricVerifySign AsymmetricGenerateKey MD5



SHA HMAC



- 10.33 AsymmetricEncrypt Description Encrypts a blob value with asymmetric algorithm. Applies to CrypterObject objects Syntax crypter.AsymmetricEncrypt ( algorithm, variable, pubKey)


- Table 10.40:




|Argument|Description|
|---|---|
|crypter|The name of the CrypterObject object|
|algorithm|A value of the AsymmetricAlgorithm enumerated type that specifies the type of asymmetric algorithm.<br><br>Values are:<br><br>• RSA! – The Rivest-Shamir-Adleman cryptopsystem<br>• Rabin! – The Rabin Algorithm<br><br><br>Note: DSA! is designed to be used in signature, not in encryption and decryption.|
|variable|A blob whose value is the data you want to encrypt with Public-Key cipher.<br><br>When using the system blob function to convert a string to a blob, it is recommended to specify its encoding argument to be EncodingANSI! (for English characters only) or EncodingUTF8!, otherwise, the default EncodingUTF16LE! will be used.|
|pubKey|A blob specifying the public key. Note: A 512-bit pubKey can encrypt a variable of up to 22 bytes; a 1024-bit pubKey can encrypt a variable of up to 86 bytes; A 2048-bit pubKey can encrypt a variable of up to 214 bytes.|
