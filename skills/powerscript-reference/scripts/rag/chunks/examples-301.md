# Examples

This example sets the Value property of a DatePicker control using separate date and time values:



date d time t d=date("2007/12/27") t=time("12:00:00") dp_1.SetValue(d, t)



This example sets the Value property using a DateTime value:



date d time t datetime dt dt = DateTime(d, t) dp_1.SetValue(dt)



See also GetText GetValue



- 10.657.2 Syntax 2: for JSONPackage object Description




Sets the value for a key. If the key does not exist, then create the key and set its value. If the key already exists, then overwrite the value of this key. If more than one key with the same name already exists, then overwrite the value of the first key. Notice that the IgnoreCase property (true by default) determines whether the key name will be matched in a casesensitive manner.



Applies to JSONPackage object Syntax



objectname.SetValue ( Key, Value {, Flag} ) objectname.SetValue ( Key, DWControl {, ChangedOnly} )



- Table 10.820:




|Argument|Description|
|---|---|
|objectname|The name of the JSONPackage object.|
|Key|A string specifying the key.|
|Value|A string specifying the value.|
|Flag (optional)|A boolean specifying the flag: true indicates the value is in JSON format, false indicates the value is a string. The default value is true.|
|DWControl|The name of the DataWindow, DataStore or DataWindowChild control.|
|ChangedOnly (optional)|A boolean specifying the changing flag: true indicates including changed data only (in DataWindow JSON format) for all DataWindow buffers, false indicates including data (in plain JSON format) of primary buffer. The default value is true.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null. Examples This example packages the JSON data and a string and then sends the package to the server:



int li_rc string ls_json, ls_EmployeeJson, ls_ReturnJson HttpClient lnv_HttpClient JsonPackage lnv_package



lnv_HttpClient = create HttpClient lnv_package = create JsonPackage



ls_EmployeeJson = dw_employee.ExportJson(false) // Package the data lnv_package.SetValue("d_employee ", ls_EmployeeJson) lnv_package.SetValue("MyString", "Test String", false) ls_json = lnv_package.GetJsonString() // Construct a POST request lnv_HttpClient.SetRequestHeader("Content-Type", "application/json;charset=UTF-8") // Send the package to the server li_rc = lnv_HttpClient.SendRequest("POST", "http://demo.appeon.com/PB/ webapi_client/postJsonpackage/employee", ls_json) // Get the data if li_rc = 1 and lnv_HttpClient.GetResponseStatusCode() = 200 then



lnv_HttpClient.GetResponseBody(ls_ReturnJson, EncodingUTF8!) else



MessageBox("Error", "Failed to call service.") end if



This example packages the data of the DataWindow, DataStore and DataWindowChild controls and then sends the package to the server:



int li_rc string ls_json, ls_ReturnJson



datastore lds_employee datawindowchild ldwc_active HttpClient lnv_HttpClient JsonPackage lnv_package



lnv_HttpClient = create HttpClient lnv_package = create JsonPackage



...//Initialize data for lds_employee, ldwc_active // Package the data lnv_package.SetValue("d_department", dw_department, false) lnv_package.SetValue("d_employee", lds_employee) //includes the changed data lnv_package.SetValue("dddw_active", ldwc_active, false) ls_json = lnv_package.GetJsonString() // Construct a POST request lnv_HttpClient.SetRequestHeader("Content-Type", "application/json;charset=UTF-8") // Send the package to the server li_rc = lnv_HttpClient.SendRequest("POST", "http://demo.appeon.com/PB/ webapi_client/postJsonpackage/employee", ls_json) // Get the data if li_rc = 1 and lnv_HttpClient.GetResponseStatusCode() = 200 then



lnv_HttpClient.GetResponseBody(ls_ReturnJson, EncodingUTF8!) else



MessageBox("Error", "Failed to call service.") end if



See also GetValue
