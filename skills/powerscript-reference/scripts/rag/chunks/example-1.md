# Example 1

This example creates an array root item and adds an array child item. The result is [[101,102,103]].



Long ll_RootArray, ll_ChildArray JsonGenerator lnv_JsonGenerator lnv_JsonGenerator = Create JsonGenerator



// Create an array root item ll_RootArray = lnv_JsonGenerator.CreateJsonArray()



// Add an array child item ll_ChildArray = lnv_JsonGenerator.AddItemArray(ll_RootArray)



- lnv_JsonGenerator.AddItemNumber(ll_ChildArray, 101)
- lnv_JsonGenerator.AddItemNumber(ll_ChildArray, 102)
- lnv_JsonGenerator.AddItemNumber(ll_ChildArray, 103)
