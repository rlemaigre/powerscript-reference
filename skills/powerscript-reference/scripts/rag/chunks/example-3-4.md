# Example 3

This example obtains the key value from the JSON string and imports the value to the specified DataWindow buffer.



// long GetValueToDataWindow ( string key, dwcontrol DWControl, string error,



DWBuffer dwbuffer ) Integer li_Return String ls_Error JsonPackage ljpk_Dept ljpk_Dept = Create JsonPackage



// The DataWindow column name and type must match with that in the JSON string dw_Dept.DataObject = "d_example_dept"



ljpk_Dept.LoadString('{"dept1": [{"dept_id":500,"dept_name":"Shipping","dept_head_id":703}],"dept2": [{"dept_id":"100","dept_name":"R & D8","dept_head_id":"test"}]}') // 105



- // Loads the data of dept1 from the JSON string to DataWindow

- li_Return = ljpk_Dept.GetValueToDataWindow("dept1", dw_Dept, ls_Error, Primary! ) // Prints ls_error. It is an empty string.



// Loads the data of dept2 from the JSON string. // The value type in the JSON string does not match with that in the DataWindow.



Error is saved to ls_Error.



- li_Return = ljpk_Dept.GetValueToDataWindow("dept2", dw_Dept, ls_Error, Primary! ) // Prints ls_Error.






// Total errors: 2 // Row 1, node "dept_id" in the JSON object has a different data type from column 1



in the Primary buffer. // Row 1, node "dept_head_id" in the JSON object has a different data type from column 3 in the Primary buffer.



See also SetValueByDataWindow GetValueBlob GetValueBoolean GetValueDate GetValueDateTime GetValueNumber GetValueString GetValueTime
