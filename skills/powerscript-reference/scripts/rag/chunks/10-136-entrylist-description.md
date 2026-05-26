# 10.136 EntryList Description

Provides a list of the top-level entries included in a trace tree model. Applies to TraceTree objects Syntax



instancename.EntryList ( list )



- Table 10.166:




|Argument|Description|
|---|---|
|instancename|Instance name of the TraceTree object.|
|list|An unbounded array variable of datatype TraceTreeNode in which EntryList stores a TraceTreeNode object for each top-level entry in the trace tree model. This argument is passed by reference.|



Return value ErrorReturn. Returns the following values:



- • Success! -- The function succeeded
- • ModelNotExistsError! -- The function failed because no model exists Usage




You use the EntryList function to extract a list of the top-level entries or nodes included in a trace tree model. Each top-level entry listed is defined as a TraceTreeNode object and provides the type of activity represented by that node.



You must have previously created the trace tree model from a trace file using the BuildModel function.
