# Example 2

This example obtains the data in rows 2 through 4 from the JSON string and sets the data to DataWindow.



// long GetValueToDataWindow ( string key, dwcontrol DWControl, boolean resetflag,



DWBuffer dwbuffer, long startrow, long endrow ) Integer li_Return JsonPackage ljpk_Dept ljpk_Dept = Create JsonPackage



// The DataWindow column name and type must match with that in the JSON string dw_Dept.DataObject = "d_example_dept"



ljpk_Dept.LoadString('{"dept":[{"dept_id":100, "dept_name":"R & D8", "dept_head_id":105}, {"dept_id":200, "dept_name":"Sales", "dept_head_id":129}, {"dept_id":300, "dept_name":"Finance", "dept_head_id":102}, {"dept_id":400, "dept_name":"Marketing", "dept_head_id":1576}, {"dept_id":500, "dept_name":"Shipping", "dept_head_id":703}]}')



// Loads the data from the JSON string to DataWindow: startrow:2, endrow:4. // GetValueToDataWindow returns 3, indicating 3 rows have been imported. li_Return = ljpk_Dept.GetValueToDataWindow("dept", dw_Dept, False, Filter!, 2, 4 )



dw_Dept.SetFilter("") // Displays the data imported to the Filter buffer dw_Dept.Filter()
