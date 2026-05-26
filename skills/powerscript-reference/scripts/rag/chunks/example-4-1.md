# Example 4

This example loads a JSON string to a JSONParser object and gets and processes the value according to the type.



Integer i Long ll_RootHandle Long ll_Objectc double ldb_Value Boolean lb_Value Long ll_Object String ls_Return String ls_Value String ls_Key JSONItemType ljit_Information



JsonParser ljp_Dept



ljp_Dept = Create JsonParser // Loads the JSON string to the JSONParser object ls_Return = ljp_Dept.LoadString ( '{"Name":"Ann.Mo", "Boolean":false,



"address":{"city":"shezhen"}, "dept":[{"dept_id":100, "dept_name":"R & D8", "dept_head_id":105}, {"dept_id":200, "dept_name":"Sales", "dept_head_id":129}]}' )



If Trim(ls_Return)<>"" Then // Prints error message Return



End If ll_RootHandle = ljp_Dept.GetRootItem( ) For i = 1 To ljp_Dept.GetChildCount( ll_RootHandle ) ls_Key = ljp_Dept.GetChildKey( ll_RootHandle, i ) // Gets and processes the value according to the type Choose Case ljp_Dept.GetItemType( ll_RootHandle, ls_Key )



Case JsonStringItem!



ls_Value = ljp_Dept.GetItemString(ll_RootHandle, ls_Key ) Case JsonNumberItem!



ldb_Value = ljp_Dept.GetItemNumber( ll_RootHandle, ls_Key ) Case JsonBooleanItem!



lb_Value = ljp_Dept.GetItemBoolean( ll_RootHandle, ls_Key ) Case JsonNullItem!



ls_Value = "Null" Case JsonObjectItem!



ll_Object = ljp_Dept.GetItemObject( ll_RootHandle, ljp_Dept.GetChildKey( ll_RootHandle, i ) )



Case JsonArrayItem!



ll_Object = ljp_Dept.GetItemArray( ll_RootHandle, ljp_Dept.GetChildKey( ll_RootHandle, i ) )



Case Else



// Prints error message End Choose



Next



See also GetItemArray GetItemBlob GetItemBoolean GetItemDate GetItemDateTime GetItemNumber GetItemObject GetItemString GetItemTime



- 10.238 GetItemAtPointer Description Gets the handle or the index of the item under the cursor. Applies to ListView controls, TreeView controls
