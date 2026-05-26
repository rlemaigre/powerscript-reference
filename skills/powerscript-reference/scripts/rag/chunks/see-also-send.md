# See also Send

- 10.301 HexDecode Description Decodes a string value using Hex decoder. Applies to CoderObject object Syntax coder.HexDecode ( variable )

- Table 10.370:




|Argument|Description|
|---|---|
|coder|The name of the CoderObject object.|
|variable|A string whose value is the data you want to decode with Hex decoder.|



Return value



Blob. Returns the result of the decoding if it succeeds. If any argument's value is null, the method returns null. If an error occurs, throw the exception.



Examples This statement decodes the data that is encoded using Hex.



Blob lblb_data String ls_HexStr



CoderObject lnv_CoderObject lnv_CoderObject = Create CoderObject



// ls_HexStr = lnv_CoderObject.HexEncode(Blob("Test Hex", EncodingANSI!)) ls_HexStr = "5465737420486578"



lblb_data = lnv_CoderObject.HexDecode(ls_HexStr) messagebox("HexDecode", string(lblb_data, EncodingANSI!))



See also HexEncode Base64Encode Base64Decode UrlEncode UrlDecode



- 10.302 HexEncode




Encodes a blob value using Hex encoder. Applies to CoderObject object Syntax



coder.HexEncode ( variable )



- Table 10.371:




|Argument|Description|
|---|---|
|coder|The name of the CoderObject object.|
|variable|A blob whose value is the data you want to encode with Hex encoder. When using the system blob function to convert a string to a blob, it is recommended to specify its encoding argument to be EncodingANSI! (for English characters only) or EncodingUTF8!, otherwise, the default EncodingUTF16LE! will be used.|
