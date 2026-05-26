# Return value

- Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null. Examples This example removes the "d_employess" key:




boolean lb_exist datastore lds_employee datawindowchild ldwc_active JsonPackage lnv_package



lnv_package = create JsonPackage



...//Initialize data for lds_employee, ldwc_active



// Package the data lnv_package.SetValue("d_department", dw_department, false) lnv_package.SetValue("d_employee", lds_employee) lnv_package.SetValue("dddw_active", ldwc_active, false) …



lnv_package.Remove("d_employee") // lb_exist will return false lb_exist = lnv_package.ContainsKey("d_employee")



See also KeyCount GetKey ContainsKey



- 10.518 RemoveDirectory Description Removes a directory. Syntax RemoveDirectory ( directoryname )


- Table 10.642:




|Argument|Description|
|---|---|
|directoryname|String for the name of the directory you want to remove. If you do not specify an absolute path, this function deletes relative to the current working directory.|
