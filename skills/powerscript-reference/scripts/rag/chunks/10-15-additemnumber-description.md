# 10.15 AddItemNumber Description

Adds the child item of JsonNumberItem type in the JSON generator object. Applies to JSONGenerator objects Syntax



objectname.AddItemNumber ( ParentItemHandle, Value ) objectname.AddItemNumber ( ParentItemHandle, Key, Value )



- Table 10.22:




|Argument|Description|
|---|---|
|objectname|The name of the JSONGenerator object in which you want to add an item|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonArrayItem or JsonObjectItem type|
|Key|A string whose value is the key of the child item|
|Value|A double whose value is the value of the child item|



Return value Long. Returns the handle of the new child item if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null.



- Example 1 This example creates an array root item and adds a child item of number type:



JsonGenerator lnv_JsonGenerator Long ll_RootArray lnv_JsonGenerator = Create JsonGenerator



// Create an array root item ll_RootArray = lnv_JsonGenerator.CreateJsonArray()



// Add a number child item lnv_JsonGenerator.AddItemNumber(ll_RootArray, 100)



- Example 2 This example create an object root item and adds a child item of number type:




JsonGenerator lnv_JsonGenerator Long ll_RootObject lnv_JsonGenerator = Create JsonGenerator



// Create an object root item ll_RootObject = lnv_JsonGenerator.CreateJsonObject ()



// Add a number child item lnv_JsonGenerator.AddItemNumber(ll_RootObject, "year", 2017)



See also AddItemArray AddItemBlob



AddItemBoolean AddItemDate AddItemDateTime AddItemNull AddItemObject AddItemString AddItemTime



- 10.16 AddItemObject Description Adds the child item of JsonObjectItem type in the JSON generator object. Applies to JSONGenerator objects Syntax objectname.AddItemObject ( ParentItemHandle ) objectname.AddItemObject ( ParentItemHandle, Key )


- Table 10.23:




|Argument|Description|
|---|---|
|objectname|The name of the JSONGenerator object in which you want to add an item|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonArrayItem or JsonObjectItem type|
|Key|A string whose value is the key of the child item|



Return value Long. Returns the handle of the new child item if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null.
