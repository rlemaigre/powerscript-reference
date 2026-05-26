# Return value String.

Returns the key name of the child item if it succeeds and empty string ("") if an error occurs. If any argument's value is null, the method returns null.



Examples This example gets the key of the child item:



JsonParser lnv_JsonParser Long ll_RootObject, ll_id String ls_Json, ls_key, ls_name boolean lb_active lnv_JsonParser = Create JsonParser



ls_Json = '{"id":1001, "name":"evan", "active":true}' // Loads a JSON string lnv_JsonParser.LoadString(ls_Json) ll_RootObject = lnv_JsonParser.GetRootItem() // Gets the key of the child item



- ls_key = lnv_JsonParser.GetChildKey(ll_RootObject, 1) ll_id = lnv_JsonParser.GetItemNumber(ll_RootObject, ls_key)
- ls_key = lnv_JsonParser.GetChildKey(ll_RootObject, 2) ls_name = lnv_JsonParser.GetItemString(ll_RootObject, ls_key)
- ls_key = lnv_JsonParser.GetChildKey(ll_RootObject, 3) lb_active = lnv_JsonParser.GetItemBoolean(ll_RootObject, ls_key) See also GetChildCount GetChildItem


- 10.188 GetChildrenList Description Provides a list of the children of a routine included in a trace tree model. Applies to TraceTreeObject, TraceTreeRoutine, and TraceTreeGarbageCollect objects Syntax instancename.GetChildrenList ( list )


- Table 10.225:




|Argument|Description|
|---|---|
|instancename|Instance name of the TraceTreeObject, TraceTreeRoutine, or TraceTreeGarbageCollect object.|
|list|An unbounded array variable of datatype TraceTreeNode in which GetChildrenList stores a TraceTreeNode object for each child of a routine. This argument is passed by reference.|



Return value ErrorReturn. Returns the following values:



- • Success! -- The function succeeded


- • ModelNotExistsError! -- The model does not exist
