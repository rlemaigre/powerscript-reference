# Usage

If the item value is null, this function will throw an error, therefore, it is recommended that before executing this function, call GetItemType to check if the item value is null. See example 2 [591] in GetItemArray.



Examples This example gets the value of the second item:



JsonParser lnv_JsonParser String ls_Json Date ldate_date Long ll_RootObject, ll_item lnv_JsonParser = Create JsonParser



ls_Json = '{"datetime":7234930293, "date": "2017-09-21", "time": "12:00:00"}' lnv_JsonParser.LoadString(ls_Json) ll_RootObject = lnv_JsonParser.GetRootItem() ll_item = lnv_JsonParser.GetChildItem(ll_RootObject, 2) ldate_date = lnv_JsonParser.GetItemDate(ll_item)



See also GetItemArray GetItemBlob GetItemBoolean GetItemDateTime GetItemNumber GetItemObject GetItemString GetItemTime GetItemType



- 10.231.2 Syntax 2 Description Gets the value of the item whose type is date. Applies to JSONParser objects Syntax objectname.GetItemDate ( ParentItemHandle, Key )


- Table 10.285:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser object whose child item value you want to obtain.|



|Argument|Description|
|---|---|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonObjectItem type.|
|Key|A string whose value is the key of the child item of JsonStringItem type.|



Return value Date. Returns the date value of the child item if it succeeds; if any argument's value is null, returns null; if an error occurs, the SystemError event will be triggered. Usage



If the item value is null, this function will throw an error, therefore, it is recommended that before executing this function, call GetItemType to check if the item value is null. See example 2 [591] in GetItemArray.



Examples This example gets the value of the "date" item:



JsonParser lnv_JsonParser String ls_Json Date ldate_date Long ll_RootObject lnv_JsonParser = Create JsonParser



ls_Json = '{"datetime":7234930293, "date": "2017-09-21", "time": "12:00:00"}' lnv_JsonParser.LoadString(ls_Json) ll_RootObject = lnv_JsonParser.GetRootItem() ldate_date = lnv_JsonParser.GetItemDate(ll_RootObject, "date")



See also GetItemArray GetItemBlob GetItemBoolean GetItemDateTime GetItemNumber GetItemObject GetItemString GetItemTime GetItemType
