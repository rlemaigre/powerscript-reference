# Usage

You use this syntax to access the contents of a specified trace file created from a running PowerBuilder application. You can then use the properties and functions provided by the TraceFile object to perform your own analysis of tracing data instead of using the available modeling objects.



Examples This example opens a trace file:



TraceFile ltf_file String ls_filename



ltf_file = CREATE TraceFile ltf_file.Open(ls_filename)



...
