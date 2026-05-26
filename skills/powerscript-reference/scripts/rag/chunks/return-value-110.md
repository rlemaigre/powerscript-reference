# Return value

Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, Reset returns null. The return value is usually not used.



Usage Use Reset to clear the data in a graph before you add new data. Examples



This statement deletes the series and data, but leaves the categories, in the graph gr_product_data:



gr_product_data.Reset(Series!)



See also AddData AddSeries



- 10.525.3 Syntax 3: For trace files Description Goes back to the beginning of the trace file so you can begin rereading the file contents. Applies to TraceFile objects Syntax instancename.Reset ( )


- Table 10.651:




|Argument|Description|
|---|---|
|instancename|Instance name of the TraceFile object|



Return value ErrorReturn. Returns one of the following values:



- • Success! -- The function succeeded
- • FileNotOpenError! -- The specified trace file has not been opened Usage




Use this function to return to the start of the open trace file and begin rereading the contents of the file. To use the Reset function, you must have previously opened the trace file with



the Open function. You use the Reset and Open functions as well as the other properties and functions provided by the TraceFile object to access the contents of a trace file directly. You use these functions if you want to perform your own analysis of the tracing data instead of using the available modeling objects.
