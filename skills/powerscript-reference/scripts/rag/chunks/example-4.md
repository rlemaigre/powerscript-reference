# Example 4

This example creates an object root item and adds a DateTime child item using the local timezone conversion. The result is {"datetime":1512821700}.



Long ll_RootObject JsonGenerator lnv_JsonGenerator lnv_JsonGenerator = Create JsonGenerator



// Create an object root item ll_RootObject = lnv_JsonGenerator.CreateJsonObject ()



// Add a DateTime child item lnv_JsonGenerator.AddItemDateTime(ll_RootObject, "datetime", datetime("2017-12-09



12:15:00"), true)



See also AddItemArray AddItemBlob AddItemBoolean AddItemDate AddItemNull AddItemNumber AddItemObject AddItemString AddItemTime



- 10.14 AddItemNull Description Adds the child item of JsonNullItem type in the JSON generator object. Applies to JSONGenerator objects Syntax objectname.AddItemNull ( ParentItemHandle ) objectname.AddItemNull ( ParentItemHandle, Key )


- Table 10.21:




|Argument|Description|
|---|---|
|objectname|The name of the JSONGenerator object in which you want to add an item|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonArrayItem or JsonObjectItem type|



|Argument|Description|
|---|---|
|Key|A string whose value is the key of the child item|



Return value Long. Returns the handle of the new child item if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null. Example 1 This example creates an array root item and adds a null child item. The result is [null].



Long ll_RootArray JsonGenerator lnv_JsonGenerator lnv_JsonGenerator = Create JsonGenerator



// Create an array root item ll_RootArray = lnv_JsonGenerator.CreateJsonArray()



// Add a null child item lnv_JsonGenerator.AddItemNull(ll_RootArray)
