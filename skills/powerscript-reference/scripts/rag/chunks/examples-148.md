# Examples

This example gets data from the server and then imports the data to the DataWindow, DataStore and DataWindowChild controls:



int li_rc string ls_JsonPackage, ls_DepartmentJson, ls_EmployeeJson, ls_DeptJson datastore lds_employee datawindowchild ldwc_dept HttpClient lnv_HttpClient JsonPackage lnv_package



lds_employee = create datastore lds_employee.dataobject = "d_employee"



dw_employee.getchild("dept_id", ldwc_dept) lnv_HttpClient = create HttpClient lnv_package = create JsonPackage // Request JSON data package from the server li_rc = lnv_HttpClient.SendRequest("GET", "http://demo.appeon.com/PB/webapi_client/ getjsonpackage/employee/102") // Get the data if li_rc = 1 and lnv_HttpClient.GetResponseStatusCode() = 200 then



lnv_HttpClient.GetResponseBody(ls_JsonPackage) // Extract the JSON data package lnv_package.LoadString(ls_JsonPackage) ls_DepartmentJson = lnv_package.GetValue("d_department") ls_EmployeeJson = lnv_package.GetValue("d_employee") ls_DeptJson = lnv_package.GetValue("dddw_dept") // Import data to DataWindow, DataStore and DataWindowChild dw_department.ImportJson(ls_DepartmentJson) lds_employee.ImportJson(ls_EmployeeJson) ldwc_dept.ImportJson(ls_DeptJson)



end if



See also SetValue



- 10.291 GetValueBlob Description Gets the blob value of the key.




If more than one key with the same name exists, then get the value of the first key. Notice that the IgnoreCase property (true by default) determines whether the key name will be matched in a case-sensitive manner.



Applies to JSONPackage object Syntax



objectname.GetValueBlob ( Key )



- Table 10.360:




|Argument|Description|
|---|---|
|objectname|The name of the JSONPackage object|
|Key|A string specifying the key of the item of JsonStringItem type. If more than one key with the same name already exists, the value of the first key will be obtained.|
