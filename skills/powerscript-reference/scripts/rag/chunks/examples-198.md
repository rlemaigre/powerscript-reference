# Examples

This example opens a trace file and then uses a user-defined function called of_dumpactivitynode to report the appropriate information for each activity depending on its activity type:



String ls_filename, ls_line TraceFile ltf_file TraceActivityNode ltan_node ls_filename = sle_filename.text ltf_file = CREATE TraceFile ltf_file.Open(ls_filename) ls_line = "CollectionTime = " + &



String(ltf_file.CollectionTime) + "~r~n" + & "Num Activities = " + & String(ltf_file.NumberOfActivities) + "~r~n



mle_output.text = ls_line ltan_node = ltf_file.NextActivity() DO WHILE IsValid(ltan_node)



ls_line = of_dumpactivitynode(ltan_node) ltan_node = ltf_file.NextActivity() mle_output.text = ls_line



LOOP
