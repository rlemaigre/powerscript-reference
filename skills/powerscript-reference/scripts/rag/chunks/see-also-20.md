# See also

GetChildItem GetChildKey



- 10.186 GetChildItem Description Gets the handle of the child item in a JSON parser object. Applies to JSONParser objects Syntax objectname.GetChildItem ( ParentItemHandle, Index )


- Table 10.223:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser object whose item handle you want to obtain.|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonObjectItem and JsonArrayItem type.|
|Index|A long whose value is the index of the child item.|



Return value Long. Returns the handle of the child item if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null. Examples



This example gets the child item of department_array:



JsonParser lnv_JsonParser lnv_JsonParser = create JsonParser String ls_Json, ls_name, ls_deptname Long ll_id, ll_number Long ll_RootObject, ll_department_array, ll_number_item, ll_object_item Boolean lb_active



ls_Json = '{"id":1001, "name":"evan", "active":true, "department_array":[999999, {"name":"Website"}, {"name":"PowerBuilder"}, {"name":"IT"}]}'



// Loads a JSON string lnv_JsonParser.LoadString(ls_Json) ll_RootObject = lnv_JsonParser.GetRootItem()



// Gets the root item ll_id = lnv_JsonParser.GetItemNumber(ll_RootObject, "id") ls_name = lnv_JsonParser.GetItemString(ll_RootObject, "name") lb_active = lnv_JsonParser.GetItemBoolean(ll_RootObject, "active")



// Get the child item of department_array ll_department_array = lnv_JsonParser.GetItemArray(ll_RootObject,



"department_array") ll_number_item = lnv_JsonParser.GetChildItem(ll_department_array, 1) ll_number = lnv_JsonParser.GetItemNumber(ll_number_item) ll_object_item = lnv_JsonParser.GetChildItem(ll_department_array, 2) ls_deptname = lnv_JsonParser.GetItemString(ll_object_item, "name") …



See also GetChildCount GetChildKey



- 10.187 GetChildKey Description Gets the key name of the child item in a JSON parser object. Applies to JSONParser objects Syntax objectname.GetChildKey ( ParentItemHandle, Index )


- Table 10.224:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser object whose key name you want to obtain.|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonObjectItem type.|
|Index|A long whose value is the index of the child item.|
