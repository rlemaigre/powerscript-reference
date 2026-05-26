# Return value

Boolean. Returns the key value if it succeeds. If any argument's value is null, the method returns null. If an error occurs, throw the exception.



Examples This example gets the boolean value of the Status key from the JSON string.



// Boolean GetValueBoolean ( string Key ) Boolean lbl_Status JsonPackage ljpk_Dept ljpk_Dept = Create JsonPackage



// Loads the JSON string to the JSONPackage object ljpk_Dept.loadstring( '{"dept_id":100, "dept_name":"R & D8", "Status":true}') // Checks if the type of the key value is boolean If ljpk_Dept.GetItemType("Status") = JsonBooleanItem! Then



lbl_Status = ljpk_Dept.GetValueBoolean( "Status" ) // Gets the key value If Not(lbl_Status) Then // If the return value is not true



// Prints the error message End If



End If



See also SetValueBoolean GetValueBlob GetValueDate GetValueDateTime GetValueNumber GetValueString GetValueTime GetValueToDataWindow



- 10.293 GetValueDate Description Gets the date value of the key.




If more than one key with the same name exists, then get the value of the first key. Notice that the IgnoreCase property (true by default) determines whether the key name will be matched in a case-sensitive manner.



Applies to JSONPackage object Syntax



objectname.GetValueDate ( Key )
