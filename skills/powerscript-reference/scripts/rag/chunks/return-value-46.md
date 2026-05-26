# Return value

Time. Returns the key value if it succeeds. If any argument's value is null, the method returns null. If an error occurs, throw the exception.



Examples This example obtains the time value of the starttime key from the JSON string.



// Time GetValueTime ( string Key ) Time lt_Start JsonPackage ljpk_User ljpk_User = Create JsonPackage



// Loads the JSON string to the JSONPackage object ljpk_User.loadstring( '{"id":100,"name":"Henry.Ken","starttime":"08:02:30","endtime":1543900359 }') // Gets the value of the starttime key: lt_Start = 08:02:30 lt_Start = ljpk_User.GetValueTime("starttime")



See also SetValueTime GetValueBlob GetValueBoolean GetValueDate GetValueDateTime GetValueNumber



GetValueString GetValueToDataWindow
