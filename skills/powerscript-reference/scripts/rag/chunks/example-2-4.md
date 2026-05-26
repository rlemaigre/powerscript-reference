# Example 2

This example creates an object root item and adds an object child item. The result is {"object":{"year":2017,"date":"2017-09-21","time":"12:00:00"}}.



Long ll_RootObject, ll_ChildObject JsonGenerator lnv_JsonGenerator lnv_JsonGenerator = Create JsonGenerator



// Create an object root item ll_RootObject = lnv_JsonGenerator.CreateJsonObject ()



// Add an object child item ll_ChildObject = lnv_JsonGenerator.AddItemObject(ll_RootObject, "object") lnv_JsonGenerator.AddItemNumber(ll_ChildObject, "year", 2017) lnv_JsonGenerator.AddItemDate(ll_ChildObject, "date", 2017-09-21) lnv_JsonGenerator.AddItemTime(ll_ChildObject, "time", 12:00:00)



See also AddItemArray AddItemBlob AddItemBoolean AddItemDate AddItemDateTime AddItemNull AddItemNumber AddItemString AddItemTime



- 10.17 AddItemString Description Adds the child item of JsonStringItem type. Applies to JSONGenerator objects Syntax objectname.AddItemString ( ParentItemHandle, Value ) objectname.AddItemString ( ParentItemHandle, Key, Value )
