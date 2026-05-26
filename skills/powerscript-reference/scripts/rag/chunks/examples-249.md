# Examples

The following example saves the ink in an InkPicture control into an ISF file with default compression:



int li_return string ls_pathname, ls_filename



GetFileSaveName("Save As", ls_pathname, ls_filename, "ISF") li_return = ip_1.SaveInk(ls_pathname)



The following example saves the ink in an InkPicture control into a GIF file with maximum compression:



int li_return string ls_pathname, ls_filename



GetFileSaveName("Save As", ls_pathname, ls_filename, "GIF")



li_return = ip_1.SaveInk(ls_pathname, GIFFormat!, MaximumCompression!)



See also LoadInk LoadPicture ResetInk ResetPicture Save



- 10.554 SaveToFile Description Saves the JSON data to the local file. Applies to JSONGenerator and JSONPackage objects Syntax objectname.SaveToFile ( FileName {, Encoding e} )


- Table 10.685:




|Argument|Description|
|---|---|
|objectname|The name of the JSONGenerator or JSONPackage object whose data you want to save to the file.|
|FileName|A string whose value is the file full name.|
|e (optional)|Character encoding of the resulting blob. Values are: EncodingANSI!, EncodingUTF8!, EncodingUTF16LE! (default), and EncodingUTF16BE!.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null. Examples This example generates the following JSON string and saves to d:\test.json: { "string": "string", "long": 100, "boolean": true, "datetime": "2017-09-21 12:00:00", "blob": "dABoAGkAcwAgAGkAcwAgAGIAbABvAGIA", "remark": null }



Long ll_RootObject JsonGenerator lnv_JsonGenerator lnv_JsonGenerator = Create JsonGenerator



// Create an object root item ll_RootObject = lnv_JsonGenerator.CreateJsonObject()



// Add a value child item



lnv_JsonGenerator.AddItemString(ll_RootObject, "string", "string") lnv_JsonGenerator.AddItemNumber(ll_RootObject, "long", 100) lnv_JsonGenerator.AddItemBoolean(ll_RootObject, "boolean", true) lnv_JsonGenerator.AddItemDateTime(ll_RootObject, "datetime", datetime("2017-09-21



12:00:00")) lnv_JsonGenerator.AddItemBlob(ll_RootObject, "blob", blob("this is blob")) lnv_JsonGenerator.AddItemNull(ll_RootObject, "remark")



// Get the JSON data lnv_JsonGenerator.SaveToFile("d:\test.json")



This example packages the data of the DataWindow, DataStore, and DataWindowChild control and then saves the data to D:\temp\json.txt.



datastore lds_employee datawindowchild ldwc_active JsonPackage lnv_package lnv_package = create JsonPackage



...//Initialize data for lds_employee, ldwc_active // package the data lnv_package.SetValue("d_department", dw_department, false) lnv_package.SetValue("d_employee", lds_employee) lnv_package.SetValue("dddw_active", ldwc_active, false) lnv_package.SaveToFile("D:\temp\json.txt")
