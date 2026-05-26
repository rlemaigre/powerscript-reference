# Examples

This example provides the name of the trace file for which a performance analysis model is to be built:



Profiling lpro_model String ls_line



lpro_model = CREATE Profiling lpro_model.SetTraceFileName (filename) ls_line = "CollectionTime = " + &



String(lpro_model.CollectionTime ) + "~r~n" &



+ "Num Activities = " &

+ String(lpro_model.NumberOfActivities) + "~r~n" lpro_model.BuildModel()



...



See also BuildModel
