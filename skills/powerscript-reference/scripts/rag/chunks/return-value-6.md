# Return value

Blob. Returns the signature of the data if it succeeds.. If any argument's value is null, the method returns null. If an error occurs, throw the exception.



Examples This statement signs the data with RAS.



Blob lblb_data Blob lblb_privKey Blob lblb_pubKey Blob lblb_signature



lblb_data = Blob("Test Rsa", EncodingANSI!) CrypterObject lnv_CrypterObject lnv_CrypterObject = Create CrypterObject // Generate the private key lnv_CrypterObject.AsymmetricGenerateKey(RSA!, 1024, lblb_privKey, lblb_pubKey) // Sign with RSA lblb_signature = lnv_CrypterObject.AsymmetricSign(RSA!, lblb_data, lblb_privKey)



See also SymmetricEncrypt SymmetricDecrypt AsymmetricEncrypt AsymmetricDecrypt



AsymmetricVerifySign AsymmetricGenerateKey MD5 SHA HMAC



- 10.36 AsymmetricVerifySign Description Verifies the signature of the data with asymmetric algorithm. Applies to CrypterObject objects Syntax crypter.AsymmetricVerifySign ( algorithm, variable, pubKey, sign)


- Table 10.43:




|Argument|Description|
|---|---|
|crypter|The name of the CrypterObject object|
|algorithm|A value of the AsymmetricAlgorithm enumerated type that specifies the type of asymmetric algorithm.<br><br>Values are:<br><br>• RSA! – The Rivest-Shamir-Adleman cryptopsystem<br>• DSA! – The Digital Signature Algorithm. It is designed to be used in signature, not in encryption and decryption.<br>• Rabin! – The Rabin Algorithm<br>|
|variable|A blob whose value is the data you want to verify with Public-Key cipher.<br><br>When using the system blob function to convert a string to a blob, it is recommended to specify its encoding argument to be EncodingANSI! (for English characters only) or EncodingUTF8!, otherwise, the default EncodingUTF16LE! will be used.|
|pubKey|A blob specifying the public key.|
|sign|A blob specifying the signature.|
