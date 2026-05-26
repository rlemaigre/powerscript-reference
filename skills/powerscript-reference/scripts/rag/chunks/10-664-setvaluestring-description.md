# 10.664 SetValueString Description

Sets the string value for a key. If the key does not exist, then create the key and set its value. If the key already exists, then overwrite the value of this key. If more than one key with



the same name already exists, then overwrite the value of the first key. Notice that the IgnoreCase property (true by default) determines whether the key name will be matched in a case-sensitive manner.



Applies to JSONPackage object Syntax



objectname.SetValueString ( Key, Value )



- Table 10.827:




|Argument|Description|
|---|---|
|objectname|The name of the JSONPackage object.|
|Key|A string specifying the key name.|
|Value|A string specifying the key value.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null. Examples



This example modifies the value of the dept_name key in the JSON string, from "R & D8" to "D & R".



// Integer SetValueString ( string Key, string Value ) String ls_DeptName Integer li_Return JsonPackage ljp_Dept ljp_Dept = Create JsonPackage



// Loads the JSON string to the JSONPackage object ljp_Dept.loadstring( '{"dept_id":100, "dept_name":"R & D8", "dept_head_id":105}') li_Return = ljp_Dept.SetValueString( "dept_name", "D & R" ) // Sets the value for



dept_name



If li_Return = 1 Then ls_DeptName = ljp_Dept.GetValueString( "dept_name" ) // Gets the value of dept_name



Else



// Prints the error message End If



See also GetValueString SetValueBlob SetValueBoolean SetValueByDataWindow SetValueDate SetValueDateTime SetValueNumber



SetValueTime
