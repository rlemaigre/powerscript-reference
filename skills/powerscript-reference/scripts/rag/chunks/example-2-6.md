# Example 2

This example gets the total number of child items and then gets the value of every array item in a loop:



String ls_Json, ls_Name Long ll_ChildCount, ll_Index, ll_Id Datetime ldt_Birthday JsonParser lnv_JsonParser



lnv_JsonParser = Create JsonParser



ls_Json = '[{"id":1, "name":"evan1", "birthday":2340323884}, {"id":2, "name":"evan2", "birthday":5340324801}]'



// Loads a JSON string lnv_JsonParser.LoadString(ls_Json) Long ll_ArrayItem = lnv_JsonParser.GetRootItem() // Root item is JsonArrayItem! ll_ChildCount = lnv_JsonParser.GetChildCount(ll_ArrayItem)



// Get array item in a loop for ll_Index = 1 to ll_ChildCount



// Get array item Long ll_ObjectItem = lnv_JsonParser.GetChildItem(ll_ArrayItem, ll_Index)



// Array item is JsonObjectItem! if lnv_JsonParser.GetItemType(ll_ObjectItem) = JsonObjectItem! then



ll_Id = lnv_JsonParser.GetItemNumber(ll_ObjectItem, "id") ls_Name = lnv_JsonParser.GetItemString(ll_ObjectItem, "name") ldt_Birthday = lnv_JsonParser.GetItemDateTime(ll_ObjectItem, "birthday")



end if



... next
