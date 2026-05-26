# Return value

Time. Returns the time value of the child item if it succeeds; if any argument's value is null, returns null; if an error occurs, the SystemError event will be triggered. Usage



If the item value is null, this function will throw an error, therefore, it is recommended that before executing this function, call GetItemType to check if the item value is null. See example 2 [591] in GetItemArray.



Examples This example gets the value of the "time" item:



JsonParser lnv_JsonParser String ls_Json Time lt_time Long ll_RootObject lnv_JsonParser = Create JsonParser



ls_Json = '{"datetime":7234930293, "date": "2017-09-21", "time": "12:00:00"}' lnv_JsonParser.LoadString(ls_Json) ll_RootObject = lnv_JsonParser.GetRootItem() lt_time = lnv_JsonParser.GetItemTime(ll_RootObject, "time")



See also GetItemArray GetItemBlob GetItemBoolean GetItemDate GetItemDateTime GetItemNumber GetItemObject GetItemString GetItemType



- 10.237 GetItemType Description Gets the type of the item. Applies to JSONParser and JSONPackage objects Syntax for JSONParser objectname.GetItemType ( ItemHandle ) objectname.GetItemType ( ParentItemHandle, Key ) Syntax for JSONPackage




objectname.GetItemType ( Key )



- Table 10.295:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser or JSONPackage object whose item type you want to obtain.|
|ItemHandle|A long whose value is the item handle.|
|ParentItemHandle|A long specifying the parent item handle which is JsonObjectItem type.|
|Key|A string specifying the key of the child item.|



Return value JsonItemType. Returns the JsonItemType enumerated value if it succeeds and null value if an error occurs. If any argument's value is null, the method returns null. The JsonItemType enumerated values are:



- • JsonStringItem! -- Type of the JSON node whose key value pair is a string, such as "name":"evan".
- • JsonNumberItem! -- Type of the JSON node whose key value pair is a number, such as "id":1001.
- • JsonBooleanItem! -- Type of the JSON node whose key value pair is a boolean, such as "active":true.
- • JsonNullItem! -- Type of the JSON node whose key value pair is null, such as "remark": null.
- • JsonObjectItem! -- Type of the JSON node whose key value pair is an object, such as "date_object":{"datetime":7234930293, "date": "2017-09-21", "time": "12:00:00"}.
- • JsonArrayItem! -- Type of the JSON node whose key value pair is an array, such as "department_array":[999999, {"name":"Website"}, {"name":"PowerBuilder"}, {"name":"IT"}].


- Example 1 This example gets the key value and type of the child items in a loop:




JsonParser lnv_JsonParser String ls_Json, ls_key, ls_value Long ll_RootObject, ll_item, ll_ChildCount, ll_index lnv_JsonParser = Create JsonParser



ls_Json = '{"id":1001, "name":"svan", "active":true}' // Loads a JSON string lnv_JsonParser.LoadString(ls_Json) ll_RootObject = lnv_JsonParser.GetRootItem() // Gets the key value and type of the child items



ll_ChildCount = lnv_JsonParser.GetChildCount(ll_RootObject) for ll_index = 1 to ll_ChildCount



ls_key = lnv_JsonParser.GetChildKey(ll_RootObject, ll_index) ll_item = lnv_JsonParser.GetChildItem(ll_RootObject, ll_index) choose case lnv_JsonParser.GetItemType(ll_item)



case JsonStringItem!



ls_value = lnv_JsonParser.GetItemString(ll_RootObject, ls_key) case JsonNumberItem!



ls_value = string(lnv_JsonParser.GetItemNumber(ll_RootObject, ls_key)) case JsonBooleanItem!



ls_value = string(lnv_JsonParser.GetItemBoolean(ll_RootObject, ls_key)) case JsonNullItem!



ls_value = 'Null' end choose MessageBox("Info", String(ll_index) + ': key = ' + ls_key + ', value = ' + ls_value)



next



- Example 2 This example gets the key value and type of the child items in a recursive traversal:




String ls_Json Long ll_RootItem JsonParser lnv_JsonParser lnv_JsonParser = Create JsonParser



ls_Json = '{"id":1001, "name":"evan", "active":true, "department_array":[999999, {"name":"Website"}, {"name":"PowerBuilder"}, {"name":"IT"}]}'



// Loads a string lnv_JsonParser.LoadString(ls_Json)



// Obtain root item (type is JsonObjectItem! or JsonArrayItem!) Long ll_RootItem = lnv_JsonParser.GetRootItem()



// Get each item recursively (this is a recursive function) of_ParseJson(lnv_JsonParser, ll_RootItem)



// *****************Traverse each item recursively***************************** public function integer of_parsejson (jsonparser anv_jsonparser, long alp_handle);



long ll_Index, ll_ChildCount long ll_Child string ls_Null, ls_value double ldb_value boolean lb_value



JsonItemType ljit_JsonItemType // Obtain item type ljit_JsonItemType = anv_JsonParser.GetItemType(alp_Handle) // Get item recursively or get value according to the type if ljit_JsonItemType = JsonObjectItem! or ljit_JsonItemType = JsonArrayItem! then



// Get item recursively ll_ChildCount = anv_JsonParser.GetChildCount(alp_Handle) for ll_Index = 1 to ll_ChildCount



ll_Child = anv_JsonParser.GetChildItem(alp_Handle, ll_Index) of_ParseJson(anv_JsonParser, ll_Child)



next else // Get value choose case ljit_JsonItemType case JsonStringItem! ls_value = anv_JsonParser.GetItemString(alp_Handle)



case JsonNumberItem!



ldb_value = anv_JsonParser.GetItemNumber(alp_Handle) case JsonBooleanItem!



lb_value = anv_JsonParser.GetItemBoolean(alp_Handle) case JsonNullItem! SetNull(ls_Null)



end choose end if return 1 end function
