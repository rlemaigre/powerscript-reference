# Examples

This example obtains the value of the birthday key from the JSON string, and converts the value from a string to a date.



The developer is recommended to check if the type of the key value is date before executing GetValueDate. If it is not a valid date-type value or it is a datetime-type value, the program will throw an exception.



// Date GetValueDate ( string Key ) Date ld_Birthday JsonPackage ljpk_User ljpk_User = Create JsonPackage



// Loads the JSON string to the JSONPackage object ljpk_User.loadstring( '{"id":100,"name":"Henry.Ken","birthday":"1998-12-01



","CreateDate":1543900359 }') // Gets the value of the birthday key ld_Birthday = ljpk_User.GetValueDate("birthday")



See also SetValueDate GetValueBlob GetValueBoolean GetValueDateTime GetValueNumber GetValueString GetValueTime GetValueToDataWindow



- 10.294 GetValueDateTime Description Gets the datetime value of the key.




If more than one key with the same name exists, then get the value of the first key. Notice that the IgnoreCase property (true by default) determines whether the key name will be matched in a case-sensitive manner.



Applies to JSONPackage object
