# Example 1

This example creates an array root item and adds an object child item. The result is [{"year":2017,"date":"2017-09-21","time":"12:00:00"}].



Long ll_RootArray, ll_ChildObject JsonGenerator lnv_JsonGenerator lnv_JsonGenerator = Create JsonGenerator



// Create an array root item ll_RootArray = lnv_JsonGenerator.CreateJsonArray()



// Add an object child item ll_ChildObject = lnv_JsonGenerator.AddItemObject(ll_RootArray) lnv_JsonGenerator.AddItemNumber(ll_ChildObject, "year", 2017) lnv_JsonGenerator.AddItemDate(ll_ChildObject, "date", 2017-09-21) lnv_JsonGenerator.AddItemTime(ll_ChildObject, "time", 12:00:00)
