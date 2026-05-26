# Example 3

This example creates an object root item and adds a DateTime child item. The result is {"datetime":"2017-12-09 12:15:00"}.



Long ll_RootObject JsonGenerator lnv_JsonGenerator lnv_JsonGenerator = Create JsonGenerator



// Create an object root item ll_RootObject = lnv_JsonGenerator.CreateJsonObject ()



// Add a DateTime child item lnv_JsonGenerator.AddItemDateTime(ll_RootObject, "datetime", datetime("2017-12-09



12:15:00"))
