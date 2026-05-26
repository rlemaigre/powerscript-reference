# 10.233 GetItemNumber

- 10.233.1 Syntax 1 Description Gets the value of the item whose type is number. Applies to JSONParser objects Syntax objectname.GetItemNumber ( ItemHandle )


- Table 10.288:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser object whose item value you want to obtain.|
|ItemHandle|A long whose value is the item handle of JsonNumberItem type.|



Return value Double. Returns the double value of the item if it succeeds; if any argument's value is null, returns null; if an error occurs, the SystemError event will be triggered. Usage



If the item value is null, this function will throw an error, therefore, it is recommended that before executing this function, call GetItemType to check if the item value is null. See example 2 [591] in GetItemArray.



Examples This example gets the value of the first child item:



JsonParser lnv_JsonParser String ls_Json Long ll_RootObject, ll_item, ll_id lnv_JsonParser = Create JsonParser



ls_Json = '{"id":1001, "name":"svan", "active":true}' lnv_JsonParser.LoadString(ls_Json) ll_RootObject = lnv_JsonParser.GetRootItem()



- ll_item = lnv_JsonParser.GetChildItem(ll_RootObject, 1) ll_id = lnv_JsonParser.GetItemNumber(ll_item) See also GetItemArray GetItemBlob GetItemBoolean GetItemDate GetItemDateTime GetItemObject GetItemString GetItemTime GetItemType


- 10.233.2 Syntax 2 Description Gets the value of the item whose type is number. Applies to JSONParser objects Syntax objectname.GetItemNumber ( ParentItemHandle, Key )


- Table 10.289:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser object whose child item value you want to obtain.|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonObjectItem type.|



|Argument|Description|
|---|---|
|Key|A string whose value is the key of the child item of JsonNumberItem type.|



Return value Double. Returns the double value of the child item if it succeeds; if any argument's value is null, returns null; if an error occurs, the SystemError event will be triggered. Usage



If the item value is null, this function will throw an error, therefore, it is recommended that before executing this function, call GetItemType to check if the item value is null. See example 2 [591] in GetItemArray.



Examples This example gets the value of the "id" child item:



JsonParser lnv_JsonParser String ls_Json Long ll_RootObject, ll_id lnv_JsonParser = Create JsonParser



ls_Json = '{"id":1001, "name":"svan", "active":true}' lnv_JsonParser.LoadString(ls_Json) ll_RootObject = lnv_JsonParser.GetRootItem() ll_id = lnv_JsonParser.GetItemNumber(ll_RootObject, "id")



See also GetItemArray GetItemBlob GetItemBoolean GetItemDate GetItemDateTime GetItemObject GetItemString GetItemTime GetItemType



- 10.234 GetItemObject Description Gets the handle value of the child item whose type is object. Applies to JSONParser objects Syntax




objectname.GetItemObject ( ParentItemHandle, Key )



- Table 10.290:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser object whose child object item you want to obtain.|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonObjectItem type.|
|Key|A string whose value is the key of the child item of JsonObjectItem type.|



Return value Long. Returns the handle value of the child item if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null. Usage



If the item value is null, this function will throw an error, therefore, it is recommended that before executing this function, call GetItemType to check if the item value is null. See example 2 [591] in GetItemArray.



Examples This example gets the value of the "date_object" item:



JsonParser lnv_JsonParser String ls_Json DateTime ldt_datetime Date ldate_date Time lt_time Long ll_RootObject, ll_date_object lnv_JsonParser = Create JsonParser



ls_Json = '{"id":1001, "name":"evan", "date_object":{"datetime":7234930293, "date": "2017-09-21", "time": "12:00:00"}}'



lnv_JsonParser.LoadString(ls_Json) ll_RootObject = lnv_JsonParser.GetRootItem()



ll_date_object = lnv_JsonParser.GetItemObject(ll_RootObject, "date_object") ldt_datetime = lnv_JsonParser.GetItemDateTime(ll_date_object , "datetime") ldate_date = lnv_JsonParser.GetItemDate(ll_date_object , "date") lt_time = lnv_JsonParser.GetItemTime(ll_date_object , "time")



See also GetItemArray GetItemBlob GetItemBoolean GetItemDate GetItemDateTime GetItemNumber



GetItemString GetItemTime GetItemType
