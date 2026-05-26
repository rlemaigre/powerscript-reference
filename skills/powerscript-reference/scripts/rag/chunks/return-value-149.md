# Return value

String. Returns the result of the encoding if it succeeds. If any argument's value is null, the method returns null. If an error occurs, throw the exception.



Examples This statement encodes the data using URL and returns the encoded data.



Blob lblb_data String ls_UrlStr



lblb_data = Blob("https://www.appeon.com", EncodingANSI!) CoderObject lnv_CoderObject lnv_CoderObject = Create CoderObject ls_UrlStr = lnv_CoderObject.UrlEncode(lblb_data)



See also HexDecode HexEncode Base64Encode Base64Decode UrlDecode



- 10.736 Which Description Allows a component to find out whether it is running on a transaction server. Applies to TransactionServer objects Syntax transactionserver.Which ( )


- Table 10.909:




|Argument|Description|
|---|---|
|transactionserver|Reference to the TransactionServer service instance|



Return value Integer. Returns 0 if the object is not running on a transaction server, 1 if it is running on EAServer (obsolete), or 2 if it is running on COM+. Usage



The Which function allows a custom class user object to perform different processing depending on its runtime context.
