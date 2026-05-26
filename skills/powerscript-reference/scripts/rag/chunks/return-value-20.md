# Return value

Integer. Returns 1 if it succeeds and -1 if an error occurs. Examples This example deletes all state pictures from a ListView control:



lv_list.DeleteStatePictures()



See also DeleteStatePicture



- 10.120 DestroyModel Description Destroys the current performance analysis or trace tree model. Applies to Profiling and TraceTree objects Syntax instancename.DestroyModel ( )


- Table 10.149:




|Argument|Description|
|---|---|
|instancename|Instance name of the Profiling or TraceTree object|



Return value ErrorReturn. Returns one of the following values:



- • Success! -- The function succeeded
- • ModelNotExistsError! -- The function failed because no model exists
