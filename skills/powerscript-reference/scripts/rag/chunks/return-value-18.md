# Return value

Boolean. Returns true if the key exists and false if the key does not exist. If any argument's value is null, the method returns null.



- Example 1 This example sets the value for key and then checks if the specified key exists:



boolean lb_emp, lb_depart JsonPackage lnv_package lnv_package = create JsonPackage



// Packages the data lnv_package.SetValue("d_employee", dw_employee)



// lb_emp returns true and lb_depart returns false lb_emp = lnv_package.ContainsKey("d_employee") lb_depart = lnv_package.ContainsKey("d_department")



- Example 2




This example loads a JSON string into a JSONParser object and checks if the specified key exists:



String ls_Return Long ll_RootHandle Boolean lb_Contains Long ll_ItemHandle Long ll_Object JSONItemType ljit_Dept



JsonParser ljp_ContainsKey ljp_ContainsKey = Create JsonParser



// Loads JSON string to JSONParser object ls_Return = ljp_ContainsKey.LoadString ( '{"Boolean":false, "Name":"A&DName",



"object":{"1":"1"}, "dept":[{"dept_id":100, "dept_name":"R & D8", "dept_head_id":105}, {"dept_id":200, "dept_name":"Sales", "dept_head_id":129}]}'



)



If Trim(ls_Return)<>"" Then // Prints the error message Return



End If ll_RootHandle = ljp_ContainsKey.GetRootitem( ) // Checks if Jsonparser parent node contains a Boolean key // This script returns TRUE lb_Contains = ljp_ContainsKey.Containskey( ll_RootHandle, "Boolean")



lb_Contains = ljp_ContainsKey.Containskey( ll_RootHandle, "dept") If lb_Contains Then



ljit_Dept = ljp_ContainsKey.getitemtype( ll_RootHandle, "dept")



If ljit_Dept = JsonArrayItem! Then // Gets the handle of array object in the JSON string ll_ItemHandle = ljp_ContainsKey.GetItemarray( ll_RootHandle, "dept") // Gets the handle of the first element of the array object ll_Object = ljp_ContainsKey.GetChildItem( ll_ItemHandle, 1) // Checks if the first element contains dept_name key // This script returns TRUE lb_Contains = ljp_ContainsKey.Containskey( ll_Object, "dept_name") // Checks if the first element contains a Boolean key. // This script returns FALSE lb_Contains = ljp_ContainsKey.Containskey( ll_Object, "Boolean")



Else // Prints error message: the dept key is JsonArrayItem



End If Else



// Prints the error message End If



See also SetValue
