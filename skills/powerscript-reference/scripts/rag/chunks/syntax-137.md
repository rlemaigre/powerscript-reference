# Syntax

TraceBegin ( identifier )



- Table 10.889:




|Argument|Description|
|---|---|
|identifier|A read-only string, logged to the trace file, used to identify a tracing block. If identifier is null, an empty string is placed in the trace file.|



Return value ErrorReturn. Returns one of the following values:



- • Success! -- The function succeeded
- • FileNotOpenError! -- TraceOpen has not been called yet
- • TraceStartedError! -- TraceBegin has already been called Usage




The TraceBegin call inserts an activity type value of ActBegin! in the trace file to indicate that logging has begun and then begins logging all the application activities you have selected for tracing.



TraceBegin can only be called following a TraceOpen call. And all activities to be logged must be enabled using the TraceEnableActivity function before calling TraceBegin.



If you want to generate a trace file for an entire application run, you typically include the TraceBegin function in your application's open script. If you want to generate a trace file for



only a portion of the application run, you typically include the TraceBegin function in the script that initiates the functionality on which you're trying to collect data.



You can use the identifier argument to identify the tracing blocks within a trace file. A tracing block represents the data logged between calls to TraceBegin and TraceEnd. There may be multiple tracing blocks within a single trace file if you are tracing more than one portion of the application run.
