# Return value

Blob. Returns the result of the decoding if it succeeds. If any argument's value is null, the method returns null. If an error occurs, throw the exception.



Examples This statement decodes the data that is encoded using URL.



Blob lblb_data String ls_UrlStr



CoderObject lnv_CoderObject lnv_CoderObject = Create CoderObject



//ls_UrlStr = lnv_CoderObject.UrlEncode(Blob("https://www.appeon.com",



EncodingANSI!)) ls_UrlStr = "https%3A%2F%2Fwww.appeon.com" lblb_data = lnv_CoderObject.UrlDecode(ls_UrlStr) messagebox("UrlDecode", string(lblb_data, EncodingANSI!))



See also HexDecode HexEncode Base64Encode Base64Decode UrlEncode



- 10.735 UrlEncode Description Encodes a blob value using URL encoder. Applies to CoderObject object Syntax coder.UrlEncode ( variable )


- Table 10.908:




|Argument|Description|
|---|---|
|coder|The name of the CoderObject object.|
|variable|A blob whose value is the data you want to encode with URL encoder. When using the system blob function to convert a string to a blob, it is recommended to specify its encoding argument to be EncodingANSI! (for English characters only) or EncodingUTF8!, otherwise, the default EncodingUTF16LE! will be used.|
