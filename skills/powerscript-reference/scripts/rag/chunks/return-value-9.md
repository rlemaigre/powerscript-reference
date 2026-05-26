# Return value

Blob. Returns the result of the decoding if it succeeds. If any argument's value is null, the method returns null. If an error occurs, throw the exception.



Examples This statement decodes the data that is encoded using Base64.



Blob lblb_data String ls_Base64Str



CoderObject lnv_CoderObject lnv_CoderObject = Create CoderObject



//ls_Base64Str = lnv_CoderObject.Base64Encode(Blob("Test Base64", EncodingANSI!)) ls_Base64Str = "VGVzdCBCYXNlNjQ="



lblb_data = lnv_CoderObject.Base64Decode(ls_Base64Str) messagebox("Base64Decode", string(lblb_data, EncodingANSI!))



See also HexDecode HexEncode Base64Encode UrlEncode UrlDecode



- 10.39 Base64Encode Description Encodes a blob value using Base64 encoder. Applies to CoderObject object Syntax coder.Base64Encode ( variable )


- Table 10.46:




|Argument|Description|
|---|---|
|coder|The name of the CoderObject object.|
|variable|A blob whose value is the data you want to encode with Base64 encoder.<br><br>When using the system blob function to convert a string to a blob, it is recommended to specify its encoding argument to be EncodingANSI! (for English characters only) or EncodingUTF8!, otherwise, the default EncodingUTF16LE! will be used.|
