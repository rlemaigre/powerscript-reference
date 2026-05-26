# Examples

This example opens a trace file with the name you entered in a single line edit box and a timer kind selected from a drop-down list. Then it begins logging the enabled activities for the first block of code to be traced:



TimerKind ltk_kind CHOOSE CASE ddlb_timestamp.text CASE "None"



ltk_kind = TimerNone! CASE "Clock"



ltk_kind = Clock! CASE "Process"



ltk_kind = Process! CASE "Thread"



ltk_kind = Thread! END CHOOSE TraceOpen(sle_filename.text,ltk_kind) TraceEnableActivity(ActRoutine!) TraceEnableActivity(ActESQL!) TraceEnableActivity(ActGarbageCollect!) TraceEnableActivity(ActError!) TraceEnableActivity(ActCreateObject!) TraceEnableActivity(ActDestroyObject!) TraceBegin("Trace_block_1")



See also TraceOpen TraceBegin TraceDisableActivity
