# 10.232 GetItemDateTime

- 10.232.1 Syntax 1 Description




Gets the value of the item whose type is datetime. Applies to JSONParser objects Syntax



objectname.GetItemDateTime ( ItemHandle )



- Table 10.286:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser object whose item value you want to obtain.|
|ItemHandle|A long whose value is the handle of the item of JsonStringItem and JsonNumberItem type.<br><br>If the item value is a number (UTC timestamp), the returned datetime value will be the local datetime converted by using the local timezone. If the item value is a string, the returned datetime value will be the datetime without timezone conversion.|



Return value DateTime. Returns the datetime value of the item if it succeeds; if any argument's value is null, returns null; if an error occurs, the SystemError event will be triggered. Usage



If the item value is null, this function will throw an error, therefore, it is recommended that before executing this function, call GetItemType to check if the item value is null. See example 2 [591] in GetItemArray.



Examples This example gets the value of the first item:



JsonParser lnv_JsonParser String ls_Json DateTime ldt_datetime Long ll_RootObject, ll_item lnv_JsonParser = Create JsonParser



ls_Json = '{"datetime":7234930293, "date": "2017-09-21", "time": "12:00:00"}' lnv_JsonParser.LoadString(ls_Json) ll_RootObject = lnv_JsonParser.GetRootItem() ll_item = lnv_JsonParser.GetChildItem(ll_RootObject, 1) ldt_datetime = lnv_JsonParser.GetItemDateTime(ll_item)



See also GetItemArray GetItemBlob GetItemBoolean GetItemDate



GetItemNumber GetItemObject GetItemString GetItemTime GetItemType



- 10.232.2 Syntax 2 Description Gets the value of the item whose type is datetime. Applies to JSONParser objects Syntax objectname.GetItemDateTime ( ParentItemHandle, Key )


- Table 10.287:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser object whose child item value you want to obtain.|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonObjectItem type.|
|Key|A string whose value is the key of the child item of JsonStringItem and JsonNumberItem type. For the JsonStringItem type, formats such as "yyyy-mm-dd hh:mm:ss" are supported.<br><br>If the item value is a number (UTC timestamp), the returned datetime value will be the local datetime converted by using the local timezone. If the item value is a string, the returned datetime value will be the datetime without timezone conversion.|



Return value DateTime. Returns the datetime value of the child item if it succeeds; if any argument's value is null, returns null; if an error occurs, the SystemError event will be triggered. Usage



If the item value is null, this function will throw an error, therefore, it is recommended that before executing this function, call GetItemType to check if the item value is null. See example 2 [591] in GetItemArray.



Examples This example gets the value of the "datetime" item:



JsonParser lnv_JsonParser



String ls_Json DateTime ldt_datetime Long ll_RootObject lnv_JsonParser = Create JsonParser



ls_Json = '{"datetime":7234930293, "date": "2017-09-21", "time": "12:00:00"}' lnv_JsonParser.LoadString(ls_Json) ll_RootObject = lnv_JsonParser.GetRootItem() ldt_datetime = lnv_JsonParser.GetItemDateTime(ll_RootObject, "datetime")



See also GetItemArray GetItemBlob GetItemBoolean GetItemDate GetItemNumber GetItemObject GetItemString GetItemTime GetItemType
