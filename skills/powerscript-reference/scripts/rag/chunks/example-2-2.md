# Example 2

This example creates an array root item and adds a DateTime child item without timezone conversion. The result is ["2017-12-09 12:15:00"].



Long ll_RootArray JsonGenerator lnv_JsonGenerator lnv_JsonGenerator = Create JsonGenerator



// Create an array root item ll_RootArray = lnv_JsonGenerator.CreateJsonArray()



// Add a DateTime child item lnv_JsonGenerator.AddItemDateTime(ll_RootArray, datetime("2017-12-09 12:15:00"),



false) //Result is ["2017-12-09 12:15:00"] //lnv_JsonGenerator.AddItemDateTime(ll_RootArray, datetime("2017-12-09 12:15:00"),



true) //Result is [1512821700]
