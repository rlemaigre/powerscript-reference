# Examples

This example opens a trace file with the name you entered in a single line edit box and a timer kind selected from a drop-down list. It then begins logging the enabled activities for the first block of code to be traced:



TimerKind ltk_kind CHOOSE CASE ddlb_timestamp.text CASE "None"



ltk_kind = TimerNone! CASE "Clock"



ltk_kind = Clock! CASE "Process"



ltk_kind = Process! CASE "Thread"



ltk_kind = Thread! END CHOOSE TraceOpen(sle_filename.text,ltk_kind) TraceEnableActivity(ActESQL!) TraceEnableActivity(ActGarbageCollect!) TraceEnableActivity(ActObjectCreate!) TraceEnableActivity(ActObjectDestroy!) TraceBegin("Trace_block_1")



See also TraceOpen TraceEnableActivity TraceEnd



- 10.714 TraceClose Description Closes the trace file. Syntax TraceClose ( ) Return value ErrorReturn. Returns one of the following values:


- • Success! -- The function succeeded
- • FileNotOpenError! -- TraceOpen has not been called yet
- • FileCloseError! -- The log file is full




TraceClose closes the trace file. If you have not already called TraceEnd, TraceClose will call that function before proceeding with its processing.



You typically include the TraceClose function in your application's Close script. Examples This example stops logging of application trace activities and then closes the open trace file:



TraceEnd() TraceClose()



See also TraceBegin TraceEnd TraceOpen



- 10.715 TraceDisableActivity Description Disables logging of the specified trace activity. Syntax TraceDisableActivity ( activity )


- Table 10.890:




|Argument|Description|
|---|---|
|activity|A value of the enumerated datatype TraceActivity that identifies the activity for which logging should be disabled. Values are:<br><br>• ActError! -- Occurrences of system errors and warnings<br>• ActESQL! -- Embedded SQL statement entry and exit<br>• ActGarbageCollect! -- Start and finish of garbage collection<br>• ActLine! -- Routine line hits<br>• ActObjectCreate! -- Object creation entry and exit<br>• ActObjectDestroy! -- Object destruction entry and exit<br>• ActProfile! -- Abbreviation for the ActRoutine!, ActESQL!, ActObjectCreate!, ActObjectDestroy!, and ActGarbageCollect! values<br>• ActRoutine! -- Routine entry and exit (if this value is disabled, ActLine! is automatically disabled)<br>• ActTrace! -- Abbreviation for all activities except ActLine!<br>|



|Argument|Description|
|---|---|
| |• ActUser! -- Occurrences of an activity you selected|



Return value ErrorReturn. Returns one of the following values:



- • Success! -- The function succeeded
- • FileNotOpenError! -- TraceOpen has not been called yet
- • TraceStartedError! -- You have called TraceDisableActivity after TraceBegin and before




TraceEnd Usage



Use this function to disable the logging of the specified trace activities. You typically use this function if you are tracing only portions of an application run (and thus you are calling TraceBegin multiple times) and you want to log different activities during each portion of the application.



Unless specifically disabled with TraceDisableActivity, activities that were previously enabled with a call to the TraceEnableActivity function remain enabled throughout the entire application run.



You must always call the TraceEnd function before calling TraceDisableActivity. Examples



This example logs the enabled activities for the first block of code to be traced. Then it stops logging and disables two activity types for a second trace block. When logging is resumed for another portion of the application run, the activities that are not specifically disabled remain enabled until TraceClose is called:



TraceEnableActivity(ActESQL!) TraceEnableActivity(ActGarbageCollect) TraceEnableActivity(ActObjectCreate!) TraceEnableActivity(ActObjectDestroy!)



TraceBegin("Trace_block_1") TraceEnd() TraceDisableActivity(ActESQL!) TraceDisableActivity(ActGarbageCollect!) TraceBegin("Trace_block_2")



See also TraceEnd TraceEnableActivity
