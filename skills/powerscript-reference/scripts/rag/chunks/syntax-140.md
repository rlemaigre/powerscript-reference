# Syntax

TraceError ( severity, message )



- Table 10.892:




|Argument|Description|
|---|---|
|severity|A long whose value is a number you want to indicate the severity of the error|
|message|A string whose value is the error message you want to add to the trace file|



Return value ErrorReturn. This function always returns Success!. If severity or message is null, TraceError returns null and no entry is made in the trace file. Usage



TraceError logs an activity type value of ActError! to the trace file if you enabled the tracing of this type with the TraceEnableActivity function and then called the TraceBegin function.



You use the TraceError function to record your own error message. It works just like the TraceUser function except that you use it to identify more severe problems. The severity and message values are passed without modification to the trace file.



Examples This example logs an error message to the trace file when a database retrieval fails:



dw_1.SetTransObject(SQLCA) TraceUser(100, "Starting database retrieval") IF dw_1.Retrieve() = -1 THEN



TraceError(999, "Retrieve for dw_1 failed") ELSE



TraceUser(200, "Database retrieval complete") END IF



See also TraceEnableActivity TraceUser



- 10.719 TraceOpen Description Opens a trace file with the specified name and enables logging of application trace activities. Syntax TraceOpen ( filename, timer )


- Table 10.893:




|Argument|Description|
|---|---|
|filename|A read-only string used to identify the trace file|
|timer|A value of the enumerated datatype TimerKind that identifies the timer. Values are:<br><br>• Clock! -- Use the clock timer<br>• Process! -- Use the process timer<br>• Thread! -- Use the thread timer<br>• TimerNone! -- Do not log timer values<br>|



Return value ErrorReturn. Returns one of the following values:



- • Success! -- The function succeeded
- • FileAlreadyOpenError! -- TraceOpen has been called again without an intervening TraceClose
- • FileOpenError! -- The file could not be opened for writing


- • EnterpriseOnlyFeature! -- (Obsolete) This function is only supported in the Enterprise edition of PowerBuilder 12.6 and earlier versions.




If filename is null, TraceOpen returns null. Usage



TraceOpen opens the specified trace file and enables logging of application trace activities. When it opens the trace file, TraceOpen logs the current application and library list to the trace file. It also enables logging of the default activity type, a user-defined activity type identified by the value ActUser!.



After calling TraceOpen, you can select any additional activities to be logged in the trace file using the TraceEnableActivity function. Once you have called TraceOpen and TraceEnableActivity, you must then call TraceBegin for logging to begin.



To stop logging of application trace activity, you must call the TraceEnd function followed by TraceClose to close the trace file. Each call to TraceOpen resets the logging of activity types to the default ActUser!



You typically include the TraceOpen function in your application's Open script.
