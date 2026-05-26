# Examples

- This statement returns 9.62:

- Round(9.624, 2)



This statement returns 9.63:



- Round(9.625, 2) This statement returns 9.600: Round(9.6, 3) This statement returns -9.63: Round(-9.625, 2) This statement returns null: Round(-9.625, -1) See also






Ceiling Init (obsolete) Truncate Round method for DataWindows in Section 2.4.109, “Round” in DataWindow Reference.



- 10.547 RoutineList Description Provides a list of the routines included in a performance analysis model. Applies to ProfileClass and Profiling objects Syntax instancename.RoutineList ( list )


- Table 10.671:




|Argument|Description|
|---|---|
|instancename|Instance name of the ProfileClass or Profiling object.|
|list|An unbounded array variable of datatype ProfileRoutine in which RoutineList stores a ProfileRoutine object for each routine that exists in the model within a class. This argument is passed by reference.|



Return value ErrorReturn. Returns one of the following values:



- • Success! -- The function succeeded
- • ModelNotExistsError! -- No model exists Usage




Use this function to extract a list of the routines included in the performance analysis model in a particular class. You must have previously created the performance analysis model from a trace file using the BuildModel function. Each routine is defined as a ProfileRoutine object and provides the time spent in the routine, any called routines, the number of times each routine was called, and the class to which the routine belongs. The routines are listed in no particular order.



Object creation and destruction for a class are each indicated by a routine in this list as well as by embedded SQL statements.



Examples This example lists the routines included in each class found in a performance analysis model:



Long ll_cnt ProfileCall lproc_call[]



lpro_model.BuildModel()



lpro_model.RoutineList(iprort_list)



...



See also ClassList



- 10.548 Run Description Runs the specified application program. Syntax Run ( string {, windowstate } )


- Table 10.672:




|Argument|Description|
|---|---|
|string|A string whose value is the file name of the program you want to execute. Optionally, string can contain one or more parameters for the program.|
|windowstate (optio|Anal)value of the WindowState enumerated datatype indicating the state in which you want to run the program:<br><br>• Maximized! -- Maximized; enlarge the program window to its maximum size when it starts<br>• Minimized! -- Minimized; shrink the program window to an icon when it starts<br>• Normal! -- (Default) Run the program window in its normal size<br>|
