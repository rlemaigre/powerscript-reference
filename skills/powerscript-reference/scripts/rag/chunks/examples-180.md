# Examples

If the insertion point is positioned anywhere in line 5 of mle_Contact and line 5 contains the text Select All, il_linelength is set to 10 (the length of line 5):



integer li_linelength li_linelength = mle_Contact.LineLength()



See also Position SelectedLine



SelectedStart TextLine



- 10.380 LineList Description Provides a list of the lines in a routine included in a performance analysis model. Applies to ProfileRoutine object Syntax iinstancename.LineList ( list )


- Table 10.460:




|Argument|Description|
|---|---|
|instancename|Instance name of the ProfileRoutine object.|
|list|An unbounded array variable of datatype ProfileLine in which LineList stores a ProfileLine object for each line in the routine. This argument is passed by reference.|



Return value ErrorReturn. Returns one of the following values:



- • Success! -- The function succeeded
- • ModelNotExistsError! -- The model does not exist Usage




Use this function to extract a list of the lines in a routine included in the performance analysis model. You must have previously created the performance analysis model from a trace file using the BuildModel function. Each line is defined as a ProfileLine object and provides the number of times the line was hit, any calls made from the line, and the time spent on the line and in any called functions. The lines are listed in numeric order.



Lines are not returned for database statements and objects. If line information was not logged in the trace file, lines are not returned.
