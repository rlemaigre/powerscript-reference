# 10.235 GetItemString

- 10.235.1 Syntax 1 Description Gets the value of the item whose type is string. Applies to JSONParser objects Syntax objectname.GetItemString ( ItemHandle )


- Table 10.291:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser object whose item value you want to obtain.|
|ItemHandle|A long whose value is the item handle of JsonStringItem type.|



Return value String. Returns the string value of the item if it succeeds; if any argument's value is null, returns null; if an error occurs, the SystemError event will be triggered. Usage



If the item value is null, this function will throw an error, therefore, it is recommended that before executing this function, call GetItemType to check if the item value is null. See example 2 [591] in GetItemArray.



Examples This example gets the value of the second child item:



JsonParser lnv_JsonParser String ls_Json, ls_name Long ll_RootObject, ll_item lnv_JsonParser = Create JsonParser



ls_Json = '{"id":1001, "name":"svan", "active":true}' lnv_JsonParser.LoadString(ls_Json) ll_RootObject = lnv_JsonParser.GetRootItem()



- ll_item = lnv_JsonParser.GetChildItem(ll_RootObject, 2) ls_name = lnv_JsonParser.GetItemString(ll_item) See also GetItemArray




GetItemBlob GetItemBoolean GetItemDate GetItemDateTime GetItemNumber GetItemObject GetItemTime GetItemType



- 10.235.2 Syntax 2 Description Gets the value of the item whose type is string. Applies to JSONParser objects Syntax objectname.GetItemString ( ParentItemHandle, Key )


- Table 10.292:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser object whose child item value you want to obtain.|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonObjectItem type.|
|Key|A string whose value is the key of the child item of JsonStringItem type.|



Return value String. Returns the string value of the child item if it succeeds; if any argument's value is null, returns null; if an error occurs, the SystemError event will be triggered. Usage



If the item value is null, this function will throw an error, therefore, it is recommended that before executing this function, call GetItemType to check if the item value is null. See example 2 [591] in GetItemArray.



Examples This example gets the value of the "name" child item:



JsonParser lnv_JsonParser String ls_Json, ls_name Long ll_RootObject lnv_JsonParser = Create JsonParser



ls_Json = '{"id":1001, "name":"svan", "active":true}' lnv_JsonParser.LoadString(ls_Json) ll_RootObject = lnv_JsonParser.GetRootItem() ls_name = lnv_JsonParser.GetItemString(ll_RootObject, "name")



See also GetItemArray GetItemBlob GetItemBoolean GetItemDate GetItemDateTime GetItemNumber GetItemObject GetItemTime GetItemType
