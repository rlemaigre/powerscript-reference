# Return value

String. Returns the result of the encoding if it succeeds. If any argument's value is null, the method returns null. If an error occurs, throw the exception.



Examples This statement encodes the data using Base64 and returns the encoded data.



Blob lblb_data String ls_Base64Str



lblb_data = Blob("Test Base64", EncodingANSI!) CoderObject lnv_CoderObject lnv_CoderObject = Create CoderObject ls_Base64Str = lnv_CoderObject.Base64Encode(lblb_data)



See also HexDecode HexEncode Base64Decode UrlEncode UrlDecode



- 10.40 Beep Description Causes the computer to beep up to 10 times. Syntax Beep ( n )

- Table 10.47:




|Argument|Description|
|---|---|
|n|The number of times you want the computer to beep. If n is greater than 10, the computer beeps 10 times.|



Return value Integer. Returns 1 if it succeeds and -1 if it fails. If n is null, Beep returns null. The return value usually is not used. Examples This statement causes the computer to beep five times:



Beep(5)



- 10.41 BeginTransaction (obsolete) Description Creates an EAServer transaction and associates it with the calling thread.
