# Return value

Blob. Returns the result of the encryption if it succeeds. If any argument's value is null, the method returns null. If an error occurs, throw the exception.



Examples This statement encrypts the data using RSA and then returns the encrypted data.



Blob lblb_data Blob lblb_privKey Blob lblb_pubKey Blob lblb_encrypt



lblb_data = Blob("Test Rsa", EncodingANSI!) CrypterObject lnv_CrypterObject lnv_CrypterObject = Create CrypterObject // Generate the private key lnv_CrypterObject.AsymmetricGenerateKey(RSA!, 1024, lblb_privKey, lblb_pubKey) // Encrypt data using RSA lblb_encrypt = lnv_CrypterObject.AsymmetricEncrypt(RSA!, lblb_data, lblb_pubKey)



See also SymmetricEncrypt SymmetricDecrypt AsymmetricDecrypt AsymmetricSign AsymmetricVerifySign AsymmetricGenerateKey MD5 SHA HMAC



- 10.34 AsymmetricGenerateKey Description Generates the secret key for asymmetric algorithm. Applies to CrypterObject objects Syntax crypter.AsymmetricGenerateKey ( algorithm, len, privKey, pubKey)


- Table 10.41:




|Argument|Description|
|---|---|
|crypter|The name of the CrypterObject object|
|algorithm|A value of the AsymmetricAlgorithm enumerated type that specifies the type of asymmetric algorithm.<br><br>Values are:<br><br>• RSA! – The Rivest-Shamir-Adleman cryptopsystem<br>• DSA! – The Digital Signature Algorithm. It is designed to be used in signature, not in encryption and decryption.<br>• Rabin! – The Rabin Algorithm<br>|



|Argument|Description|
|---|---|
|len|An integer specifying the key length. Recommended key length: 512/1024/2048.|
|privKey|A blob receiving the private key.|
|pubKey|A blob receiving the public key.|
