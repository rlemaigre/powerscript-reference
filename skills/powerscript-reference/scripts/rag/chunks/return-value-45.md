# Return value

Number. Returns the key value if it succeeds. If any argument's value is null, the method returns null. If an error occurs, throw the exception.



Examples This example gets the value of the dept_id key in the JSON string.



// Double GetValueNumber ( string Key ) Double ldb_DeptID JsonPackage ljp_Dept ljp_Dept = Create JsonPackage



// Loads the JSON string to the JSONPackage object ljp_Dept.loadstring( '{"dept_id":100,"dept_name":"R & D8","dept_head_id":105}') // Gets the key value: ldb_DeptID = 100 ldb_DeptID = ljp_Dept.GetValueNumber( "dept_id" )



See also SetValueNumber GetValueBlob GetValueBoolean GetValueDate GetValueDateTime



- 10.296 GetValueString Description Gets the string value of the key.




If more than one key with the same name exists, then get the value of the first key. Notice that the IgnoreCase property (true by default) determines whether the key name will be matched in a case-sensitive manner.



Applies to JSONPackage object Syntax



objectname.GetValueString ( Key )



- Table 10.365:




|Argument|Description|
|---|---|
|objectname|The name of the JSONPackage object|
|Key|A string specifying the key of the item of JsonStringItem type. If more than one key with the same name already exists, the value of the first key will be obtained.|
