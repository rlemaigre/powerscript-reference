# Caution

If the trace file runs out of disk space, no error is generated, but logging is stopped, and the trace file cannot be used for analysis.



By default, the time at which each activity begins and ends is recorded using the clock timer, which measures an absolute time with reference to an external activity, such as the machine's startup time. The clock timer measures time in microseconds. Depending on the speed of your machine's central processing unit, the clock timer can offer a resolution of less than one microsecond. A timer's resolution is the smallest unit of time the timer can measure.



You can also use process or thread timers, which measure time in microseconds with reference to when the process or thread being executed started. Use the thread timer for distributed applications. Both process and thread timers give you a more accurate measurement of how long the process or thread is taking to execute, but both have a lower resolution than the clock timer.



If your analysis does not require timing information, you can omit timing information from the trace file.



Collection time The timestamps in the trace file exclude the time taken to collect the trace data. Examples



This example opens a trace file with the name you entered in a single line edit box and a timer kind selected from a drop-down list. Then it begins logging the enabled activities for the first block of code to be traced:



TimerKind ltk_kind CHOOSE CASE ddlb_timestamp.text CASE "None"



ltk_kind = TimerNone!



CASE "Clock"



ltk_kind = Clock! CASE "Process"



ltk_kind = Process! CASE "Thread"



ltk_kind = Thread! END CHOOSE TraceOpen(sle_filename.text,ltk_kind)



See also TraceBegin TraceClose TraceEnableActivity TraceEnd



- 10.720 TraceUser Description Logs the activity type value you specify to the trace file. Syntax TraceUser (info, message )


- Table 10.894:




|Argument|Description|
|---|---|
|info|A long whose value is a reference number you want to associate with the logged activity|
|message|A string whose value is the activity type value you want to add to the trace file|



Return value ErrorReturn. This function always returns Success!. If info or message is null, TraceUser returns null and no entry is made in the log file. Usage



TraceUser logs an activity type value of ActUser! to the trace file. This is the default activity type and is enabled when the TraceOpen function is called. You use the TraceUser function to record your own message identifying a specific occurrence during an application run. For example, you may want to log the occurrences of a specific return value or the beginning and end of a body of code. TraceUser works just like the TraceError function except that you use TraceError to identify more severe problems. The info and message values are passed without modification to the trace file.
