# 10.661 SetValueDate Description

Sets the date value for a key. If the key does not exist, then create the key and set its value. If the key already exists, then overwrite the value of this key. If more than one key with the same name already exists, then overwrite the value of the first key. Notice that the IgnoreCase property (true by default) determines whether the key name will be matched in a case-sensitive manner.



Applies to JSONPackage object Syntax



objectname.SetValueDate ( Key, Value )



- Table 10.824:




|Argument|Description|
|---|---|
|objectname|The name of the JSONPackage object.|
|Key|A string specifying the key name.|
|Value|A date specifying the key value.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null. Examples



This example modifies the value of the birthday key in the JSON string, from 1998-12-01 to 2001-01-01.



// Integer SetValueDate ( string Key, date Value ) Date ld_Birthday Integer li_Return JsonPackage ljpk_User



ljpk_User = Create JsonPackage // Loads the JSON string to the JSONPackage object ljpk_User.loadstring( '{"id":100, "name":"Henry.Ken", "birthday":"1998-12-01",



"CreateDate":1543900359 }') li_Return = ljpk_User.SetValueDate("birthday", 2001-01-01) If li_Return = 1 Then



// Gets the value of the birthday key: ld_Birthday = 2001-01-01 ld_Birthday = ljpk_User.GetValueDate("birthday")



Else



// Prints the error message if SetValueDate failed End If



See also GetValueDate SetValueBlob SetValueBoolean SetValueByDataWindow SetValueDateTime SetValueNumber SetValueString SetValueTime
