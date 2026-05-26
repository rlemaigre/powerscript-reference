# Example 2

This example creates an object root item and adds an array child item. The result is {"id": [101,102,103]}.



Long ll_RootObject, ll_ChildArray JsonGenerator lnv_JsonGenerator lnv_JsonGenerator = Create JsonGenerator



// Create an object root item ll_RootObject = lnv_JsonGenerator.CreateJsonObject()



// Add an array child item ll_ChildArray = lnv_JsonGenerator.AddItemArray(ll_RootObject, "id")



- lnv_JsonGenerator.AddItemNumber(ll_ChildArray, 101)
- lnv_JsonGenerator.AddItemNumber(ll_ChildArray, 102)
- lnv_JsonGenerator.AddItemNumber(ll_ChildArray, 103) See also AddItemBlob AddItemBoolean AddItemDate AddItemDateTime AddItemNull AddItemNumber AddItemObject AddItemString AddItemTime


- 10.10 AddItemBlob Description Adds the child item of JsonStringItem type in the JSON generator object. Applies to JSONGenerator objects Syntax objectname.AddItemBlob ( ParentItemHandle, Value ) objectname.AddItemBlob ( ParentItemHandle, Key, Value )


- Table 10.17:




|Argument|Description|
|---|---|
|objectname|The name of the JSONGenerator object in which you want to add an item|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonArrayItem or JsonObjectItem type|
|Key|A string whose value is the key of the child item|
|Value|A blob whose value is the value of the child item.|



Return value Long. Returns the handle of the new child item if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null.
