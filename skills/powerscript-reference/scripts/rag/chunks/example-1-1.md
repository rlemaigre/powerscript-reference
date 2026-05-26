# Example 1

This example creates an array root item and adds a blob child item. The result is ["dABoAGkAcwAgAGkAcwAgAGIAbABvAGIA"].



Long ll_RootArray JsonGenerator lnv_JsonGenerator lnv_JsonGenerator = Create JsonGenerator



// Create an array root item ll_RootArray = lnv_JsonGenerator.CreateJsonArray()



// Add a blob child item lnv_JsonGenerator.AddItemBlob(ll_RootArray, Blob("this is blob"))
