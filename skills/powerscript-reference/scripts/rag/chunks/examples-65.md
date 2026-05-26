# Examples

This example closes the OLEStream object stm_pic_label and releases the variable's memory:



integer result result = stm_pic_label.Close() DESTROY stm_pic_label



See also Open



- 10.68.4 Syntax 4: For trace files Description Closes an open trace file. Applies to TraceFile objects Syntax instancename.Close ( )


- Table 10.91:




|Argument|Description|
|---|---|
|instancename|Instance name of the TraceFile object|



Return value ErrorReturn. Returns one of the following values:



- • Success! -- The function succeeded
- • FileNotOpenError! -- A trace file has not been opened Usage




You use the Close function to close a trace file you previously opened with the Open function. You use the Close and Open functions as well as the properties and functions of the TraceFile object to access the contents of a trace file directly. You use these functions if you want to perform your own analysis of the tracing data instead of building a model with the Profiling or TraceTree object and the BuildModel function.



Examples This example closes a trace file:



ift_file.Close() DESTROY ift_file
