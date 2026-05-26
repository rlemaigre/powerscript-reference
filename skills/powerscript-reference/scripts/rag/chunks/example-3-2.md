# Example 3

This example gets the data type of the child items according to the specified index and then gets the key value according to the type:



// JsonItemType GetItemType ( string Key ) String ls_KeyValue String ls_KeyName JsonPackage ljpk_Dept ljpk_Dept = Create JsonPackage



// Loads the JSON string to the JSONPackage object ljpk_Dept.loadstring( '{"dept_id":100, "dept_name":"R & D8",



"Status":true, "array":[{"dept_name":"R & D8"}, {"dept_name":"Sales"}, {"dept_name":"Finance"}]}')



ls_KeyName = ljpk_Dept.GetKey( 4 ) //The index of the key in the JSON string Choose Case ljpk_Dept.GetItemType(ls_KeyName)



Case JsonStringItem!



ls_KeyValue = ljpk_Dept.getvalueString( ls_KeyName ) Case JsonNumberItem!



ls_KeyValue = String (ljpk_Dept.getvalueNumber( ls_KeyName )) Case JsonBooleanItem!



ls_KeyValue = String (ljpk_Dept.GetValueBoolean( ls_KeyName )) Case JsonNullItem!



SetNull(ls_KeyValue) Case JsonObjectItem!,JsonArrayItem!



ls_KeyValue = ljpk_Dept.GetValue( ls_KeyName ) Case Else // Prints message for unknown item type



End Choose // Prints key value index 4 output: [{"dept_name":"R & D8"},{"dept_name":"Sales"}, {"dept_name":"Finance"}]
