# Examples

This example gets the top-level entries or nodes in a trace tree model and then loops through the list extracting information about each node. The of_dumpnode function takes a TraceTreeNode object and a level as arguments and returns a string containing information about the node:



TraceTree ltct_model TraceTreeNode ltctn_list[], ltctn_node Long ll_index,ll_limit String ls_line



ltct_model = CREATE TraceTree ltct_model.BuildModel() ltct_model.EntryList(ltctn_list) ll_limit = UpperBound(ltctn_list) FOR ll_index = 1 TO ll_limit



ltctn_node = ltctn_list[ll_index] ls_line += of_dumpnode(ltctn_node,0)



NEXT



...
