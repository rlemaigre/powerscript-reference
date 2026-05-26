# Example 2

This example creates an object root item and adds a blob child item. The result is {"Blob":"dABoAGkAcwAgAGkAcwAgAGIAbABvAGIA"}.



Long ll_RootObject JsonGenerator lnv_JsonGenerator lnv_JsonGenerator = Create JsonGenerator



// Create an object root item ll_RootObject = lnv_JsonGenerator.CreateJsonObject ()



// Add a blob child item lnv_JsonGenerator.AddItemBlob(ll_RootObject, "blob", Blob("this is blob"))



See also AddItemArray AddItemBoolean AddItemDate AddItemDateTime AddItemNull AddItemNumber AddItemObject AddItemString AddItemTime



- 10.11 AddItemBoolean Description Adds the child item of JsonBooleanItem type in the JSON generator object. Applies to




JSONGenerator objects Syntax



objectname.AddItemBoolean ( ParentItemHandle, Value ) objectname.AddItemBoolean ( ParentItemHandle, Key, Value )



- Table 10.18:




|Argument|Description|
|---|---|
|objectname|The name of the JSONGenerator object in which you want to add an item|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonArrayItem or JsonObjectItem type|
|Key|A string whose value is the key of the child item|
|Value|A boolean whose value is the value of the child item|



Return value Long. Returns the handle of the new child item if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null.



- Example 1 This example creates an array root item and adds a boolean child item.



JsonGenerator lnv_JsonGenerator Long ll_RootArray lnv_JsonGenerator = Create JsonGenerator



// Create an array root item ll_RootArray = lnv_JsonGenerator.CreateJsonArray()



// Add a boolean child item lnv_JsonGenerator.AddItemBoolean(ll_RootArray, true)



- Example 2 This example creates an object root item and adds a boolean child item.




JsonGenerator lnv_JsonGenerator Long ll_RootObject lnv_JsonGenerator = Create JsonGenerator



// Create an object root item ll_RootObject = lnv_JsonGenerator.CreateJsonObject ()



// Add a boolean child item lnv_JsonGenerator.AddItemBoolean(ll_RootObject, "boolean", true)



See also AddItemArray AddItemBlob AddItemDate AddItemDateTime



AddItemNull AddItemNumber AddItemObject AddItemString AddItemTime



- 10.12 AddItemDate Description Adds the child item of JsonStringItem type in the JSON generator object. Applies to JSONGenerator objects Syntax objectname.AddItemDate ( ParentItemHandle, Value ) objectname.AddItemDate ( ParentItemHandle, Key, Value )


- Table 10.19:




|Argument|Description|
|---|---|
|objectname|The name of the JSONGenerator object in which you want to add an item|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonArrayItem or JsonObjectItem type|
|Key|A string whose value is the key of the child item|
|Value|A date whose value is the value of the child item.|



Return value Long. Returns the handle of the new child item if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null.



- Example 1 This example creates an array root item and adds a date child item.



Long ll_RootArray JsonGenerator lnv_JsonGenerator lnv_JsonGenerator = Create JsonGenerator



// Create an array root item ll_RootArray = lnv_JsonGenerator.CreateJsonArray()



// Add a date child item lnv_JsonGenerator.AddItemDate(ll_RootArray, date("2017-12-09"))



- Example 2 This example creates an object root item and adds a date child item.




Long ll_RootObject JsonGenerator lnv_JsonGenerator lnv_JsonGenerator = Create JsonGenerator



// Create an object root item ll_RootObject = lnv_JsonGenerator.CreateJsonObject ()



// Add a date child item lnv_JsonGenerator.AddItemDate(ll_RootObject, "date", date("2017-12-09"))



See also AddItemArray AddItemBlob AddItemBoolean AddItemDateTime AddItemNull AddItemNumber AddItemObject AddItemString AddItemTime



- 10.13 AddItemDateTime Description Adds the child item of JsonStringItem or JsonNumberItem type in the JSON generator object. Applies to JSONGenerator objects Syntax objectname.AddItemDateTime ( ParentItemHandle, Value ) objectname.AddItemDateTime ( ParentItemHandle, Value, Flag ) objectname.AddItemDateTime ( ParentItemHandle, Key, Value ) objectname.AddItemDateTime ( ParentItemHandle, Key, Value, Flag )
