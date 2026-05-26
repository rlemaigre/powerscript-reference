# Example 1

This example gets the total number of child items and then gets the values of child items in a loop:



JsonParser lnv_JsonParser Long ll_RootObject, ll_ChildCount, ll_Index String ls_Json, ls_key lnv_JsonParser = Create JsonParser



ls_Json = '{"id":1001, "name":"evan", "active":true}' // Loads a JSON string lnv_JsonParser.LoadString(ls_Json) ll_RootObject = lnv_JsonParser.GetRootItem() ll_ChildCount = lnv_JsonParser.GetChildCount(ll_RootObject) // Obtains the values of child items for ll_Index = 1 to ll_ChildCount



ls_key = lnv_JsonParser.GetChildKey(ll_RootObject, ll_Index) next
