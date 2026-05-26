# 10.665 SetValueTime Description

Sets the time value for a key. If the key does not exist, then create the key and set its value. If the key already exists, then overwrite the value of this key. If more than one key with the same name already exists, then overwrite the value of the first key. Notice that the IgnoreCase property (true by default) determines whether the key name will be matched in a case-sensitive manner.



Applies to JSONPackage object Syntax



objectname.SetValueTime ( Key, Value )



- Table 10.828:




|Argument|Description|
|---|---|
|objectname|The name of the JSONPackage object.|
|Key|A string specifying the key name.|
|Value|A time specifying the key value.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null. Examples



This example modifies the value of the endtime key in the JSON string, from 21:02:30 to 23:59:59.



// Integer SetValueTime ( string Key, time Value ) Time lt_EndTime Integer li_Return JsonPackage ljpk_User ljpk_User = Create JsonPackage



// Loads the JSON string to the JSONPackage object ljpk_User.loadstring ( '{"id":100, "name":"Henry.Ken", "starttime":"08:02:30",



"endtime":"21:02:30" }')



li_Return = ljpk_User.SetValueTime ("endtime", 23:59:59.325) If li_Return = 1 Then



lt_EndTime = ljpk_User.GetValueTime ("endtime") // Gets the value of endtime: lt_EndTime=23:59:59



Else



// Prints the error message End If



See also GetValueTime



SetValueBlob SetValueBoolean SetValueByDataWindow SetValueDate SetValueDateTime SetValueNumber SetValueString



- 10.666 SHA Description Calculates the SHA value of a blob. Applies to CrypterObject objects Syntax crypter.SHA ( algorithm, variable)


- Table 10.829:




|Argument|Description|
|---|---|
|crypter|The name of the CrypterObject object|
|algorithm|A value of the SHAAlgorithm enumerated type that specifies the type of SHA algorithm.<br><br>Values are:<br><br>• SHA1! – SHA1<br>• SHA224! – SHA224<br>• SHA256! – SHA256<br>• SHA384! – SHA384<br>• SHA512! – SHA512<br>• SHA3_224! – SHA3-224<br>• SHA3_256! – SHA3-256<br>• SHA3_384! – SHA3-384<br>• SHA3_512! – SHA3-512<br>|
|variable|A blob whose value is the data you want to process with SHA.<br><br>When using the system blob function to convert a string to a blob, it is recommended to specify its encoding argument to be EncodingANSI!|



|Argument|Description|
|---|---|
| |(for English characters only) or EncodingUTF8!, otherwise, the default EncodingUTF16LE! will be used.|
