# Examples

This code for the Clicked event gets the clicked item and changes it overlay picture. The SetItem function copies the change back to the TreeView:



treeviewitem tvi This.SetItem(handle, tvi) tvi.OverlayPictureIndex = 1 This.SetItem(handle, tvi)



This example tracks items in the SelectionChanged event. If there is no prior selection, the value of l_tviold is zero:



treeviewitem l_tvinew, l_tviold // Get the treeview item that was the old selection tv_list.GetItem(oldhandle, l_tviold) // Get the treeview item that is currently selected tv_list.GetItem(newhandle, l_tvinew) // Print the labels for the two items in the // SingleLineEdit sle_get.Text = "Selection changed from " &



+ String(l_tviold.Label) + " to " &

+ String(l_tvinew.Label)



See also InsertItem



- 10.228 GetItemArray Description Gets the value of the item whose type is array. Applies to JSONParser objects Syntax objectname.GetItemArray ( ParentItemHandle, Key )


- Table 10.279:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser object whose array item you want to obtain.|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonObjectItem type.|
|Key|A string whose value is the key of the child item of JsonArrayItem type.|



Return value Long. Returns the value of the child item of an array if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null. Usage



If the item value is null, this function will throw an error, therefore, it is recommended that before executing this function, call GetItemType to check if the item value is null. See example 2 [591].



- Example 1 The following code handles a regular JSON string.



JsonParser lnv_JsonParser String ls_Json, ls_name Long ll_number_item, ll_number, ll_object_item Long ll_RootObject, ll_department_array lnv_JsonParser = Create JsonParser



ls_Json = '{"id":1001, "name":"evan", "department_array":[999999, {"name":"Website"}, {"name":"PowerBuilder"}, {"name":"IT"}] }'



lnv_JsonParser.LoadString(ls_Json) ll_RootObject = lnv_JsonParser.GetRootItem()



ll_department_array = lnv_JsonParser.GetItemArray(ll_RootObject, "department_array")



ll_number_item = lnv_JsonParser.GetChildItem(ll_department_array, 1) ll_number = lnv_JsonParser.GetItemNumber(ll_number_item) ll_object_item = lnv_JsonParser.GetChildItem(ll_department_array, 2) ls_name = lnv_JsonParser.GetItemString(ll_object_item, "name")



- Example 2 The following code handles an irregular JSON string which contains a null value.




long ll_loop,i long ll_row long ll_root,ll_object,ll_item //receiving the handle of JSON item string ls_json,ls_error string ls_return string ls_key jsonparser lnv_jsonparser



lnv_jsonparser = create jsonparser ls_json = "[{~"ID~":101,~"FirstName~":~"Li~"},{~"ID~":102,~"FirstName~":null}]" //



JSON data contains a null value //Loads the JSON data ls_error= lnv_jsonparser.loadstring(ls_json) if len(trim(ls_error)) > 0 then



messagebox("Failed","load json failed:"+ls_error) return



end if //Obtains the handle of root item ll_root = lnv_jsonparser.getrootitem() //Obtains the data of each row for ll_loop = 1 to lnv_jsonparser.getchildcount(ll_root)



//Obtains the handle of each row ll_object = lnv_jsonparser.getchilditem(ll_root,ll_loop)



//Inserts a row into datawindow ll_row = dw_1.insertrow(0) //Parses the item value one by one in a row in a loop for i = 1 to lnv_jsonparser.getchildcount(ll_object)



//Obtains the handle and key of each item ll_item = lnv_jsonparser.getchilditem(ll_object,i) ls_key = lnv_jsonparser.getchildkey(ll_object,i) //Checks the data type of each item choose case lnv_jsonparser.getitemtype(ll_item)



case jsonarrayitem!,jsonobjectitem!



messagebox("Error","Not standard datatype") // Item value cannot be inserted to datawindow



case jsonnumberitem! //Obtains number data



dw_1.setitem(ll_row,i,lnv_jsonparser.getitemnumber(ll_item)) // dw_1.setitem(ll_row,ls_key,lnv_jsonparser.getitemnumber(ll_object,ls_key)) or set data by column name



case jsonstringitem! //Obtains string data



dw_1.setitem(ll_row,i,lnv_jsonparser.getitemstring(ll_item)) case jsonbooleanitem! //Obtains boolean data. boolean converted to



string and inserted to datawindow dw_1.setitem(ll_row,i,string(lnv_jsonparser.getitemboolean(ll_item)))



case jsonnullitem!



//null value. Not inserted to datawindow. end choose next //Finish parsing one row next//Start parsing next row



See also GetItemBlob GetItemBoolean GetItemDate GetItemDateTime GetItemNumber GetItemObject GetItemString GetItemTime GetItemType
