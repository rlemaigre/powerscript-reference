# Usage

The TraceEnd call inserts an activity type value of ActBegin! in the trace file to indicate that logging has ended and then stops logging all application activities that you selected for tracing.



If you have not already called TraceEnd when you call TraceClose, TraceClose calls TraceEnd before proceeding.



If you want to generate a trace file for an entire application run, you would typically include the TraceEnd function in your application's Close script. If you want to generate a trace file for only a portion of the application run, you typically include the TraceEnd function in the script that terminates the functionality on which you're trying to collect data.



Examples This example stops logging of application trace activities and then closes the open trace file:



TraceEnd() TraceClose()



See also TraceOpen TraceBegin TraceClose TraceDisableActivity
