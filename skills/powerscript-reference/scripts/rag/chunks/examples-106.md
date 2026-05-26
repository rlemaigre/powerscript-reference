# Examples

This example converts the text in a SingleLineEdit to a blob before obtaining the byte value of the character at the third position:



Int li_rtn Byte lb_byte Blob myBlob myBlob = Blob (sle_1.text, EncodingUTF8!) li_rtn = GetByte(myBlob, 3, lb_byte) messagebox("getbyte", string(lb_byte))



See also Byte SetByte



- 10.183 GetByteArray Description Obtains an array of Byte values stored in a blob. Syntax GetByteArray ( input )

- Table 10.220:




|Argument|Description|
|---|---|
|input|A Blob datatype that you want to return as an array of bytes.|



Return value Any. Returns the value of the input variable as an array of Byte datatypes if it succeeds; it returns 0 if the input variable is not a valid blob. Usage The returned value can be assigned directly to a byte array. Examples This example converts a blob passed in an argument to an array of bytes:



Byte ly_byte[] ly_byte[] = GetByteArray(blobarg)



See also Blob GetByte



- 10.184 GetCertificateLabel (obsolete) Description




Called by EAServer to allow the user to select one of the available SSL certificate labels for authentication. This function is used by PowerBuilder clients connecting to EAServer.
