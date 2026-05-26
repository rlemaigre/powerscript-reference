# Examples

This example checks the activity type of a node included in the trace tree model. If the activity type is an occurrence of a routine, it determines the name of the class that contains the routine and provides a list of the classes and routines called by that routine:



TraceTree ltct_node TraceTreeNode ltctn_list



... CHOOSE CASE node.ActivityType



CASE ActRoutine! TraceTreeRoutine ltctrt_rout ltctrt_rout = ltct_node



result += "Enter " + ltctrt_rout.ClassName &



+ "." + ltctrt_rout.name + " " &

+ String(ltctrt_rout.ObjectID) + " " &

+ String(ltctrt_rout.EnterTimerValue) &

+ "~r~n" ltctrt_rout.GetChildrenList(ltctn_list)



...



See also BuildModel



- 10.189 GetColumn Description Retrieves column information for a DataWindow, child DataWindow, or ListView control.




For syntax for a DataWindow or a child DataWindow, see the GetColumn method for DataWindows in Section 9.53, “GetColumn” in DataWindow Reference.



Applies to ListView controls Syntax



listviewname.GetColumn ( index, label, alignment, width )
