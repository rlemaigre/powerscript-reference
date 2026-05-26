# Usage

The BuildModel function extracts raw data from a trace file and maps it to objects that can be acted upon by PowerScript functions. If you want to build a model of your trace file without recording the progress of the build, call BuildModel without any of its optional arguments. If you want to receive progress information while the model is being created or if you want to be able to interrupt a BuildModel that is taking too long to complete, call BuildModel with its optional arguments.



The event eventname on the passed progressobject is triggered when the number of activities indicated by the triggerpercent argument are processed. If the value of triggerpercent is 0, eventname is triggered for every activity. If the value of triggerpercent is greater than 100, eventname is never triggered. You define this event using this syntax:



eventname ( currentactivity, totalnumberofactivities )



- Table 10.55:




|Argument|Description|
|---|---|
|eventname|Name of the event|
|currentactivity|A long identifying the number of the current activity|
|totalnumberofactiv|Aitieslong identifying the total number of activities in the trace file|



Eventname returns a boolean value. If it returns false, the processing initiated by the BuildModel function is canceled and any temporary storage is cleaned up. If you need to stop BuildModel processing that is taking too long, you can return a false value from eventname. The script you write for eventname determines how progress is monitored. For example, you might display progress or simply check whether the processing must be canceled.



Examples This example creates a performance analysis model of a trace file:



Profiling lpro_model String ls_filename



lpro_model = CREATE Profiling



lpro_model.SetTraceFileName(ls_filename) lpro_model.BuildModel()



This example creates a trace tree model of a trace file:



TraceTree ltct_model String ls_filename



ltct_model = CREATE TraceTree ltct_model.SetTraceFileName(ls_filename) ltct_model.BuildModel()



This example creates a performance analysis model that provides progress information as the model is built. The eventname argument to BuildModel is called ue_progress and is triggered each time five percent of the activities have been processed. The progress of the build is shown in a window called w_progress that includes a Cancel button:



Profiling lpro_model String ls_filename Boolean lb_cancel



lpro_model = CREATE Profiling lb_cancel = false lpro_model.SetTraceFileName(ls_filename)



Open(w_progress) // Call the of_init window function to initialize // the w_progress window w_progress.of_init(lpro_model.NumberOfActivities, &



'Building Model', This, 'ue_cancel') lpro_model.BuildModel(This, 'ue_progress', 5) // Clicking the cancel button in w_progress // sets lb_cancel to true and returns // false to ue_progress IF lb_cancel THEN &



Close(w_progress) RETURN -1



END IF



See also SetTraceFileName DestroyModel



- 10.46 Byte Description Converts a number into a Byte datatype or obtains a Byte value stored in a blob. Syntax Byte ( stringorblob )


- Table 10.56:




|Argument|Description|
|---|---|
|stringorblob|A String or any numeric datatype that you want to return as a Byte, or a Blob datatype in which the initial value is the Byte value that you want to|



|Argument|Description|
|---|---|
| |return. The stringorblob variable can also have an Any datatype as long as it references a string, integer, uint, long, longlong, or blob.|



Return value Byte. Returns the value of the stringorblob variable as a Byte datatype if it succeeds; it returns 0 if the stringorblob variable is not a valid PowerScript number or if it has an incompatible datatype. If stringorblob is null, Byte returns null. Usage



If the number you convert exceeds the upper range of the Byte datatype (>255), the Byte method returns the difference between the number you pass in the stringorblob argument and the nearest multiple of 256 below that number.



If you pass a blob in the stringorblob argument, only the value of the initial character is converted to a byte value. (There is no "overflow" when you use a blob argument.) To get the byte value for a character at a different position in the blob, you can use the GetByte method.



Examples This example converts a string entered in a SingleLineEdit control to a byte value:



Byte ly_byte ly_byte = Byte(sle_1.text)



If the text entered in the SingleLineEdit is 4, the byte value of ly_byte is 4. If the text entered is 257, the value of ly_byte is 1. For 256 or text such as "ABC12", the value of ly_byte is 0.



This example returns the ASCII value of the initial character that you enter in a SingleLineEdit control:



Byte lb_byte Blob myBlob myBlob = Blob(sle_1.text) lb_byte = Byte(myBlob)



See also GetByte SetByte
