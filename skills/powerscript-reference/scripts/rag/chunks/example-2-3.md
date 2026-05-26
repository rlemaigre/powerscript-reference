# Example 2

This example creates an object root item and adds a null child item. The result is {"null":null}.



Long ll_RootObject JsonGenerator lnv_JsonGenerator lnv_JsonGenerator = Create JsonGenerator



// Create an object root item ll_RootObject = lnv_JsonGenerator.CreateJsonObject ()



// Add a null child item lnv_JsonGenerator.AddItemNull(ll_RootObject, "null")



See also AddItemArray AddItemBlob AddItemBoolean AddItemDate AddItemDateTime AddItemNumber AddItemObject AddItemString AddItemTime
