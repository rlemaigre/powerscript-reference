# Return value

String. Returns the result of the encoding if it succeeds. If any argument's value is null, the method returns null. If an error occurs, throw the exception.



Examples This statement encodes the data using Hex and returns the encoded data.



Blob lblb_data String ls_HexStr



lblb_data = Blob("Test Hex", EncodingANSI!) CoderObject lnv_CoderObject lnv_CoderObject = Create CoderObject ls_HexStr = lnv_CoderObject.HexEncode(lblb_data)



See also HexDecode Base64Encode Base64Decode UrlEncode UrlDecode
