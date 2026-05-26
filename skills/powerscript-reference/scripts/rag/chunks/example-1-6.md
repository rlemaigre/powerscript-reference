# Example 1

This example gets the JSON string data: The result is {"object": {"year":2017,"date":"2017-09-21","time":"12:00:00"},"array":[101,102,103]}.



Long ll_RootObject, ll_ChildObject, ll_ChildArray JsonGenerator lnv_JsonGenerator string ls_Json lnv_JsonGenerator = create JsonGenerator



// Create an object root item ll_RootObject = lnv_JsonGenerator.CreateJsonObject ()



// Add an Object child item ll_ChildObject = lnv_JsonGenerator.AddItemObject(ll_RootObject, "object") lnv_JsonGenerator.AddItemNumber(ll_ChildObject, "year", 2017) lnv_JsonGenerator.AddItemDate(ll_ChildObject, "date", 2017-09-21) lnv_JsonGenerator.AddItemTime(ll_ChildObject, "time", 12:00:00)



// Add an array child item ll_ChildArray = lnv_JsonGenerator.AddItemArray(ll_RootObject, "array") lnv_JsonGenerator.AddItemNumber(ll_ChildArray, 101) lnv_JsonGenerator.AddItemNumber(ll_ChildArray, 102) lnv_JsonGenerator.AddItemNumber(ll_ChildArray, 103)



// Gets the JSON string ls_Json = lnv_JsonGenerator.GetJsonString()
