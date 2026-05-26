# Examples

This example gets the value of the "active" item:



JsonParser lnv_JsonParser String ls_Json Long ll_RootObject Boolean lb_active lnv_JsonParser = Create JsonParser



ls_Json = '{"id":1001, "name":"svan", "active":true}' lnv_JsonParser.LoadString(ls_Json) ll_RootObject = lnv_JsonParser.GetRootItem() lb_active = lnv_JsonParser.GetItemBoolean(ll_RootObject, "active")



See also GetItemArray GetItemBlob GetItemDate GetItemDateTime GetItemNumber GetItemObject GetItemString GetItemTime GetItemType
