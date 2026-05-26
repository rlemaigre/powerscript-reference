# Examples

This example obtains the string value ("R & D8") of the dept_name key from the JSON string.



// String GetValueString ( string Key ) String ls_DeptName JsonPackage ljp_Dept ljp_Dept = Create JsonPackage



// Loads the JSON string to the JSONPackage object. ljp_Dept.loadstring( '{"dept_id":100,"dept_name":"R & D8","dept_head_id":105}') // Gets the key value: ls_DeptName = R & D8 ls_DeptName = ljp_Dept.GetValueString ( "dept_name" )



See also SetValueString GetValueBlob GetValueBoolean GetValueDate GetValueDateTime GetValueNumber GetValueTime



GetValueToDataWindow



- 10.297 GetValueTime Description Gets the time value of the key.




If more than one key with the same name exists, then get the value of the first key. Notice that the IgnoreCase property (true by default) determines whether the key name will be matched in a case-sensitive manner.



Applies to JSONPackage object Syntax



objectname.GetValueTime ( Key )



- Table 10.366:




|Argument|Description|
|---|---|
|objectname|The name of the JSONPackage object|
|Key|A string specifying the key of the item of JsonStringItem type. If more than one key with the same name already exists, the value of the first key will be obtained.|
