# Example 2

This example gets the JSON string data: The result is [{"year":2017,"date":"2017-09-21","time":"12:00:00"},[101,102,103]].



Long ll_RootArray, ll_ChildObject, ll_ChildArray JsonGenerator lnv_JsonGenerator string ls_Json lnv_JsonGenerator = create JsonGenerator



// Create an array root item ll_RootArray = lnv_JsonGenerator.CreateJsonArray()



// Add an Object child item ll_ChildObject = lnv_JsonGenerator.AddItemObject(ll_RootArray) lnv_JsonGenerator.AddItemNumber(ll_ChildObject, "year", 2017)



lnv_JsonGenerator.AddItemDate(ll_ChildObject, "date", 2017-09-21) lnv_JsonGenerator.AddItemTime(ll_ChildObject, "time", 12:00:00)



// Add an array child item ll_ChildArray = lnv_JsonGenerator.AddItemArray(ll_RootArray) lnv_JsonGenerator.AddItemNumber(ll_ChildArray, 101) lnv_JsonGenerator.AddItemNumber(ll_ChildArray, 102) lnv_JsonGenerator.AddItemNumber(ll_ChildArray, 103)



// Gets the JSON string ls_Json = lnv_JsonGenerator.GetJsonString()
