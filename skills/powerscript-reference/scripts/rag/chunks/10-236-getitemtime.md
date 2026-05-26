# 10.236 GetItemTime

- 10.236.1 Syntax 1 Description Gets the value of the item whose type is time. Applies to JSONParser objects Syntax objectname.GetItemTime ( ItemHandle )


- Table 10.293:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser object whose item value you want to obtain.|
|ItemHandle|A long whose value is the item handle of JsonStringItem type.|



Return value Time. Returns the time value of the item if it succeeds; if any argument's value is null, returns null; if an error occurs, the SystemError event will be triggered. Usage



If the item value is null, this function will throw an error, therefore, it is recommended that before executing this function, call GetItemType to check if the item value is null. See example 2 [591] in GetItemArray.



Examples This example gets the value of the third item:



JsonParser lnv_JsonParser String ls_Json Time lt_time Long ll_RootObject, ll_item lnv_JsonParser = Create JsonParser



ls_Json = '{"datetime":7234930293, "date": "2017-09-21", "time": "12:00:00"}' lnv_JsonParser.LoadString(ls_Json) ll_RootObject = lnv_JsonParser.GetRootItem()



- ll_item = lnv_JsonParser.GetChildItem(ll_RootObject, 3) lt_time = lnv_JsonParser.GetItemTime(ll_item) See also GetItemArray GetItemBlob GetItemBoolean GetItemDate GetItemDateTime GetItemNumber GetItemObject GetItemString GetItemType


- 10.236.2 Syntax 2 Description Gets the value of the item whose type is time. Applies to JSONParser objects Syntax objectname.GetItemTime ( ParentItemHandle, Key )


- Table 10.294:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser object whose child item value you want to obtain.|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonObjectItem type.|
|Key|A string whose value is the key of the child item of JsonStringItem type.|
