# See also

InsertFile InsertObject PasteLink PasteSpecial



- 10.382 LoadDockingState Description Loads two arrays of equal size: type names of persisted sheets and the corresponding IDs. Applies to Window objects Syntax LoadDockingState ( regkey, windowtypes, sheetnames )

- Table 10.462:




|Argument|Description|
|---|---|
|regkey|The registry key where the information was stored using the LoadDockingState function.|
|windowtypes|A string array of window types for all the child windows that were persisted.|
|sheetnames|A string array of the unique IDs for the persisted child windows corresponding to the types in the sheetnames array.|



Return value Integer.



- Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, LoadDockingState returns null. Usage




To retrieve the MDI states that were saved using the SaveDockingState function, uses LoadDockingState to get the window information from the registry. Next, use OpenSheetFromDockingState or OpenSheetWithParmFromDockingState to open each of the persisted sheets. Finally, use CommitDocking to do the final arrangement and make the sheets visible.



- 10.383 LoadFile Description Loads a JSON file. Required JSON format


- • For JSONParser object: The file content that can be loaded by the JSONParser object must be JSON-formatted.


- • For JSONPackage object: The file content that can be loaded by the JSONPackage object must be an object which contains a set of key/value pairs where key is the name of a JSONObjectItem-type object (corresponding to the data being added into the package, such as "d_department" and "d_employee_syntax") and the value for the key can be a string, object, or array in the following formats: plain JSON, DataWindow JSON, or ModelStore JSON. Here is the structure of this JSON format: { "KEY1":VALUE1, "KEY2":VALUE2, "KEY3":VALUE3… } Here is an example of this JSON format:




{ "d_department": {"department_id":1, "name":"developer"}, "d_employee": [{"empoyee_id":1, "name":"my name1"}, {"empoyee_id":2, "name":"my



name2"}], "d_employee_syntax": "release 17;\r\n datawindow(units=0 timer_interval=0



color=1073741824..." }



Applies to JSONParser and JSONPackage objects Syntax



objectname.LoadFile ( FileName )



- Table 10.463:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser or JSONPackage object to which the JSON file will be loaded.|
|FileName|A string whose value is the file full name. Only the JSON or TXT file type is supported.<br><br>If the function is called by JSONParser, the file content must be JSON formatted.<br><br>If the function is called by JSONPackage, the file content must be JSON data of JsonObjectItem type.|



Return value String. Returns the empty string ("") if it succeeds and the error message if an error occurs. If any argument's value is null, the method returns null. Examples This example loads a JSON file into the JSONParser object:



String ls_Error JsonParser lnv_JsonParser lnv_JsonParser = Create JsonParser



ls_Error = lnv_JsonParser.LoadFile("c:\employee.json") if Len(ls_Error) > 0 then



MessageBox("Error", ls_Error) end if



This example loads data from the employees.txt file and then loads the "d_employee" data into the DataWindow:



string ls_EmployeeJson, ls_Error JsonPackage lnv_package



lnv_package = create JsonPackage ls_Error = lnv_package.LoadFile ("d:\temp\employees.txt") if Len(ls_Error) = 0 then



ls_EmployeeJson = lnv_package.GetValue("d_employee") dw_1.ImportJson(ls_EmployeeJson)



else



Messagebox("Error", ls_Error) end if



See also LoadString



- 10.384 LoadString Description Loads a JSON string. Required JSON format


- • For JSONParser object: The string that can be loaded by the JSONParser object must be JSON-formatted.
- • For JSONPackage object: The file content that can be loaded by the JSONPackage object must be an object which contains a set of key/value pairs where key is the name of a JSONObjectItem-type object (corresponding to the data being added into the package, such as "d_department" and "d_employee_syntax") and the value for the key can be a string, object, or array in the following formats: plain JSON, DataWindow JSON, or ModelStore JSON.




Here is the structure of this JSON format:



{ "KEY1":VALUE1, "KEY2":VALUE2, "KEY3":VALUE3… }



Here is an example of this JSON format:



{ "d_department": {"department_id":1, "name":"developer"}, "d_employee": [{"empoyee_id":1, "name":"my name1"}, {"empoyee_id":2, "name":"my



name2"}], "d_employee_syntax": "release 17;\r\n datawindow(units=0 timer_interval=0



color=1073741824..." }



Applies to JSONParser and JSONPackage objects Syntax



objectname.LoadString ( JsonData )



- Table 10.464:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser or JSONPackage object to which the JSON string will be loaded.|
|JsonData|(For JSONParser object) A JSON-formatted string. (For JSONPackage object) The JSON data of JsonObjectItem type.|



Return value String. Returns the empty string ("") if it succeeds and the error message if an error occurs. If any argument's value is null, the method returns null. Examples This example loads a JSON string into the JSONParser object:



String ls_Error JsonParser lnv_JsonParser lnv_JsonParser = Create JsonParser



String ls_Json = '{"id":1, "name":"evan1", "birthday":2340323884}' ls_Error = lnv_JsonParser.LoadString(ls_Json) if Len(ls_Error) > 0 then



MessageBox("Error", ls_Error) end if



This example gets the data from the server and then loads the "d_employee" data to the DataWindow:



int li_rc string ls_JsonPackage, ls_Error, ls_EmployeeJson HttpClient lnv_HttpClient JsonPackage lnv_package



lnv_HttpClient = create HttpClient lnv_package = create JsonPackage



// Request the JSON data package from server li_rc = lnv_HttpClient.SendRequest("GET", "http://demo.appeon.com/PB/webapi_client/ getjsonpackage/employee/102")



// Get the data if li_rc = 1 and lnv_HttpClient.GetResponseStatusCode() = 200 then



lnv_HttpClient.GetResponseBody(ls_JsonPackage) // Extract the JSON data package ls_Error = lnv_package.LoadString(ls_JsonPackage) if Len(ls_Error) = 0 then



ls_EmployeeJson = lnv_package.GetValue("d_employee") dw_1.ImportJson(ls_EmployeeJson)



else



Messagebox("Error", ls_Error) end if



end if



LoadFile



- 10.385 LoadInk Description Loads ink from a file or blob into an InkPicture control. Applies to InkPicture controls Syntax inkpicname.LoadInk ( t | b )


- Table 10.465:




|Argument|Description|
|---|---|
|inkpicname|The name of the InkPicture control into which you want to load ink.|
|t|A string containing the name and location of a file that contains the ink you want to load into the control.|
|b|The name of a blob passed by reference that contains the ink you want to load into the control.|



Return value Integer. Returns 1 for success and -1 for failure. Usage Use the LoadInk function to load ink that has been saved to a file or a blob into the control. Examples



The following example loads ink from a file. Since the user will select a single file, the second argument to GetFileOpenName contains the file's path and its name, so the third argument can be ignored:



string ls_inkpath, ls_inkname GetFileOpenName("Select Ink File", ls_inkpath, &



ls_inkname) ip_1.LoadInk(ls_inkpath)



The following example loads ink from a blob:



string ls_inkpath, ls_inkname integer li_filenum blob lblb_ink



GetFileOpenName("Select Ink File", ls_inkpath, &



ls_inkname) li_filenum = FileOpen(ls_inkpath, StreamMode!) If li_filenum <> 1 Then FileRead(li_filenum, lblb_ink)



FileClose(li_filenum) ip_1.LoadInk(lblb_ink)



End If



LoadPicture ResetInk ResetPicture SaveInk Save



- 10.386 LoadPicture Description Loads a picture from a file or blob into an InkPicture control. Applies to InkPicture controls Syntax inkpicname.LoadPicture ( t | b )


- Table 10.466:




|Argument|Description|
|---|---|
|inkpicname|The name of the InkPicture control into which you want to load a picture.|
|t|A string containing the name and location of a file that contains the picture you want to load into the control.|
|b|The name of a blob passed by reference that contains the picture you want to load into the control.|



Return value Integer. Returns 1 for success and -1 for failure. Usage Use the LoadPicture function to load an image into an InkPicture control. Examples



The following example loads an image from a file. Since the user will select a single file, the second argument to GetFileOpenName contains the file's path and its name, so the third argument can be ignored:



string ls_path, ls_name GetFileOpenName("Select Image", ls_path, ls_name) ip_1.LoadPicture(ls_path)



The following example loads an image from a blob:



string ls_path, ls_name integer li_filenum blob lblb_ink



GetFileOpenName("Select Ink File", ls_path, ls_name) li_filenum = FileOpen(ls_path, StreamMode!)



If li_filenum <> 1 Then FileRead(li_filenum, lblb_ink) FileClose(li_filenum) ip_1.LoadInk(lblb_ink)



End If



See also LoadInk ResetInk ResetPicture SaveInk Save
