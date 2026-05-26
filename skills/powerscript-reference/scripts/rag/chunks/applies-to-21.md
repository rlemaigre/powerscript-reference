# Applies to

JSONPackage object Syntax



objectname.SetValueNumber ( Key, Value )



- Table 10.826:




|Argument|Description|
|---|---|
|objectname|The name of the JSONPackage object.|
|Key|A string specifying the key name.|
|Value|A double specifying the key value.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null. Examples This example modifies the value of the dept_id key in the JSON string, from 100 to 999.99.



// Integer SetValueNumber ( string Key, double Value ) Double ldb_DeptID JsonPackage ljp_Dept ljp_Dept = Create JsonPackage



// Loads the JSON string to the JSONPackage object ljp_Dept.loadstring ( '{"dept_id":100, "dept_name":"R & D8", "dept_head_id":105}') ljp_Dept.SetValueNumber("dept_id", 999.99) // Sets the value of dept_id to 999.99 ldb_DeptID = ljp_Dept.GetValueNumber("dept_id") // Checks if the value is 999.99 If ldb_DeptID <> 999.99 Then



// Prints the error message if SetValueNumber failed End If



See also GetValueNumber SetValueBlob SetValueBoolean SetValueByDataWindow SetValueDate SetValueDateTime SetValueString SetValueTime
