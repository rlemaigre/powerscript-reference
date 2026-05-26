# Return value

DateTime. Returns the key value if it succeeds. If any argument's value is null, the method returns null. If an error occurs, throw the exception.



Examples This example obtains the datetime value of the birthday key from the JSON string. GetValueDateTime can also get the long-type value or the string-type value. The developer is recommended to check if the type of a string-type value is datetime, otherwise, the program may throw an exception.



// DateTime GetValueDateTime (string Key) DateTime ldt_CreateDate,ldt_Birthday JsonPackage ljpk_User ljpk_User = Create JsonPackage



// Loads the JSON string to the JSONPackage object ljpk_User.loadstring( '{"id":100,"name":"Henry.Ken","birthday":"1998-12-01



08:02:30","CreateDate":1543900359 }') // GetValueDateTime can also get a long value such as CreateDate ldt_CreateDate = ljpk_User.GetValueDateTime("CreateDate") ldt_Birthday = ljpk_User.GetValueDateTime("birthday")



See also SetValueDateTime GetValueBlob GetValueBoolean GetValueDate GetValueNumber



- 10.295 GetValueNumber Description Gets the number value of the key.




If more than one key with the same name exists, then get the value of the first key. Notice that the IgnoreCase property (true by default) determines whether the key name will be matched in a case-sensitive manner.



Applies to JSONPackage object Syntax



objectname.GetValueNumber ( Key )



- Table 10.364:




|Argument|Description|
|---|---|
|objectname|The name of the JSONPackage object|
|Key|A string specifying the key of the item of JsonNumberItem type. If more than one key with the same name already exists, the value of the first key will be obtained.|
