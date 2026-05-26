# Examples

These statements copy the data from the string ls_Text starting with row 2 column 3 and ending with row 30 column 5 to the graph gr_employee:



string ls_Text ls_Text = . . . gr_employee.ImportString(ls_Text, 2, 30, 3)



The following script stores data for two series in the string ls_gr and imports the data into the graph gr_custbalance. The categories in the data are A, B, and C:



string ls_gr ls_gr = "series1~tA~t12~r~n" ls_gr = ls_gr + "series1~tB~t13~r~n" ls_gr = ls_gr + "series1~tC~t14~r~n"



ls_gr = ls_gr + "series2~tA~t15~r~n" ls_gr = ls_gr + "series2~tB~t14~r~n" ls_gr = ls_gr + "series2~tC~t12.5~r~n"



gr_custbalance.ImportString(ls_gr, 1)



See also ImportClipboard ImportFile



- 10.312 IncomingCallList Description Provides a list of the callers of a routine included in a performance analysis model. Applies to ProfileRoutine object Syntax iinstancename.IncomingCallList ( list, aggregrateduplicateroutinecalls )


- Table 10.382:




|Argument|Description|
|---|---|
|instancename|Instance name of the ProfileRoutine object.|
|list|An unbounded array variable of datatype ProfileCall in which IncomingCallList stores a ProfileCall object for each caller of the routine. This argument is passed by reference.|
|aggregateduplicate|Aroutinecallsboolean indicating whether duplicate routine calls will result in the creation of a single or of multiple ProfileCall objects.|



Return value ErrorReturn. Returns one of the following values:



- • Success! -- The function succeeded
- • ModelNotExistsError! -- The model does not exist Usage




Use this function to extract a list of the callers of a routine included in a performance analysis model. Each caller is defined as a ProfileCall object and provides the called routine and the calling routine, the number of times the call was made, and the elapsed time. The callers are listed in no particular order.



You must have previously created the performance analysis model from a trace file using the BuildModel function.



The aggregateduplicateroutinecalls argument indicates whether duplicate routine calls will result in the creation of a single or of multiple ProfileCall objects. This argument has no effect unless line tracing is enabled and a calling routine calls the current routine from more than one line. If aggregateduplicateroutinecalls is true, a new ProfileCall



object is created that aggregates all calls from the calling routine to the current routine. If aggregateduplicateroutinecalls is false, multiple ProfileCall objects are returned, one for each line from which the calling routine called the called routine.
