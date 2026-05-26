# 10.229 GetItemBlob

- 10.229.1 Syntax 1 Description Gets the value of the item whose type is blob. Applies to




JSONParser objects Syntax



objectname.GetItemBlob ( ItemHandle )



- Table 10.280:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser object whose item value you want to obtain.|
|ItemHandle|A long whose value is the item handle of JsonStringItem type.|



Return value Blob. Returns the blob value of the item if it succeeds; if any argument's value is null, returns null; if an error occurs, the SystemError event will be triggered. Usage



If the item value is null, this function will throw an error, therefore, it is recommended that before executing this function, call GetItemType to check if the item value is null. See example 2 [591] in GetItemArray.



Examples This example gets the value of the third item:



JsonParser lnv_JsonParser String ls_Json Blob lblb_image Long ll_RootObject, ll_item lnv_JsonParser = Create JsonParser



ls_Json = '{"id":1001, "name": "evan", "Blob":"dABoAGkAcwAgAGkAcwAgAGIAbABvAGIA"}' lnv_JsonParser.LoadString(ls_Json) ll_RootObject = lnv_JsonParser.GetRootItem() ll_item = lnv_JsonParser.GetChildItem(ll_RootObject, 3) lblb_image = lnv_JsonParser.GetItemBlob(ll_item)



See also GetItemArray GetItemBoolean GetItemDate GetItemDateTime GetItemNumber GetItemObject GetItemString GetItemTime GetItemType



- 10.229.2 Syntax 2 Description Gets the value of the item whose type is blob. Applies to JSONParser objects Syntax objectname.GetItemBlob ( ParentItemHandle, Key )


- Table 10.281:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser object whose child item value you want to obtain.|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonObjectItem type.|
|Key|A string whose value is the key of the child item of JsonStringItem type.|



Return value Blob. Returns the blob value of the child item if it succeeds; if any argument's value is null, returns null; if an error occurs, the SystemError event will be triggered. Usage



If the item value is null, this function will throw an error, therefore, it is recommended that before executing this function, call GetItemType to check if the item value is null. See example 2 [591] in GetItemArray.



Examples This example gets the value of the "image" item:



JsonParser lnv_JsonParser String ls_Json Blob lblb_image Long ll_RootObject, ll_item lnv_JsonParser = Create JsonParser



ls_Json = '{"id":1001, "name": "evan", "image": "=F923LDF%$2KS0238D8G……BASE64"}' lnv_JsonParser.LoadString(ls_Json) ll_RootObject = lnv_JsonParser.GetRootItem() lblb_image = lnv_JsonParser.GetItemBlob(ll_item, "image")



See also GetItemArray GetItemBoolean GetItemDate GetItemDateTime



GetItemNumber GetItemObject GetItemString GetItemTime GetItemType
