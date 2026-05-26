# Syntax

instancename.OutgoingCallList ( list, aggregate )



- Table 10.566:




|Argument|Description|
|---|---|
|instancename|Instance name of the ProfileLine or ProfileRoutine object.|
|list|An unbounded array variable of datatype ProfileCall in which OutgoingCallList stores a ProfileCall object for each call to other routines from within this routine. This argument is passed by reference.|
|aggregate (ProfileR only)|Aoutineboolean indicating whether duplicate routine calls will result in the creation of a single or of multiple ProfileCall objects.|



Return value ErrorReturn. Returns one of the following values:



- • Success! -- The function succeeded
- • ModelNotExistsError! -- The model does not exist Usage




You use the OutgoingCallList function to extract a list of the calls from a line and/or routine to other routines in a performance analysis model. You must have previously created the performance analysis model from a trace file using the BuildModel function. Each caller is defined as a ProfileCall object and provides the called routine and the calling routine, the number of times the call was made, and the elapsed time. The routines are listed in no particular order.



The aggregate argument indicates whether duplicate routine calls result in the creation of a single or of multiple ProfileCall objects. This argument has no effect unless line tracing is enabled and a calling routine calls the current routine from more than one line. If aggregate is true, a new ProfileCall object is created that aggregates all calls from the calling routine to the current routine. If aggregate is false, multiple ProfileCall objects are returned, one for each line from which the calling routine called the called routine.
