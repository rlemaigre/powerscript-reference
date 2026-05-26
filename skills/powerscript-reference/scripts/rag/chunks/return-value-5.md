# Return value

Integer. Returns 1 if it succeeds and -1 if it failed. If any argument's value is null, the method returns null. If an error occurs, throw the exception.



Examples This statement generates a public key and a private key.



Integer li_return Blob lblb_privKey Blob lblb_pubKey



CrypterObject lnv_CrypterObject lnv_CrypterObject = Create CrypterObject



// Generate the key li_return = lnv_CrypterObject.AsymmetricGenerateKey(RSA!, 1024, lblb_privKey,



lblb_pubKey) if li_return = 1 then



messagebox("Success", "Key is generated successfully!") else



messagebox("Error", "Failed to generate the key!") end if



See also SymmetricEncrypt SymmetricDecrypt AsymmetricEncrypt AsymmetricDecrypt AsymmetricSign AsymmetricVerifySign MD5 SHA HMAC



- 10.35 AsymmetricSign Description Calculates the signature of the data with asymmetric algorithm. Applies to CrypterObject objects Syntax




crypter.AsymmetricSign ( algorithm, variable, privKey)



- Table 10.42:




|Argument|Description|
|---|---|
|crypter|The name of the CrypterObject object|
|algorithm|A value of the AsymmetricAlgorithm enumerated type that specifies the type of asymmetric algorithm.<br><br>Values are:<br><br>• RSA! – The Rivest-Shamir-Adleman cryptopsystem<br>• DSA! – The Digital Signature Algorithm. It is designed to be used in signature, not in encryption and decryption.<br>• Rabin! – The Rabin Algorithm<br>|
|variable|A blob whose value is the data you want to sign with Public-Key cipher.<br><br>When using the system blob function to convert a string to a blob, it is recommended to specify its encoding argument to be EncodingANSI! (for English characters only) or EncodingUTF8!, otherwise, the default EncodingUTF16LE! will be used.|
|privKey|A blob specifying the private key.|
