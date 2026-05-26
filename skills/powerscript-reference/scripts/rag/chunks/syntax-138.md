# Syntax

TraceEnableActivity ( activity )



- Table 10.891:




|Argument|Description|
|---|---|
|activity|A value of the enumerated datatype TraceActivity that identifies the activity to be logged. Values are:<br><br>• ActError! -- Occurrences of system errors and warnings<br>• ActESQL! -- Embedded SQL statement entry and exit<br>• ActGarbageCollect! -- Start and finish of garbage collection<br>• ActLine! -- Routine line hits (if this value is enabled, ActRoutine! is automatically enabled)<br>• ActObjectCreate! -- Object creation entry and exit<br>• ActObjectDestroy! -- Object destruction entry and exit<br>• ActProfile! -- Abbreviation for the ActRoutine!, ActESQL!, ActObjectCreate!, ActObjectDestroy, and ActGarbageCollect! values<br>• ActRoutine! -- Routine entry and exit<br>• ActTrace! -- Abbreviation for all activities except ActLine!<br>|



Return value ErrorReturn. Returns one of the following values:



- • Success! -- The function succeeded
- • FileNotOpenError! -- TraceOpen has not been called yet
- • TraceStartedError! -- You have called TraceEnableActivity after TraceBegin and before




TraceEnd Usage



Call the TraceEnableActivity function following the TraceOpen function. TraceEnableActivity allows you to specify the types of activities you want logged in the trace file. The default activity type logged is a user-defined activity type identified by the value ActUser!. This activity is enabled by the TraceOpen call. You must call TraceEnableActivity to specify the activities to be logged before you call TraceBegin.



Each call to TraceOpen resets the activity types to be logged to the default (that is, only ActUser! activities are logged).



Since the ActError! and ActUser! values require the passing of strings to the trace file, you must call the TraceError and TraceUser functions to log this information.



Unless specifically disabled with a call to the TraceDisableActivity function, activities that are enabled with TraceEnableActivity remain enabled throughout the entire application run.
