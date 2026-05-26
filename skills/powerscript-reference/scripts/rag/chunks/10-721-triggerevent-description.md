# 10.721 TriggerEvent Description

Triggers an event associated with the specified object, which executes the script for that event immediately.



Applies to Any object Syntax



objectname.TriggerEvent ( event {, word, long } )



- Table 10.895:




|Argument|Description|
|---|---|
|objectname|The name of any PowerBuilder object or control that has events associated with it.|
|event|A value of the TrigEvent enumerated datatype that identifies a PowerBuilder event (for example, Clicked!, Modified!, or DoubleClicked!) or a string whose value is the name of an event. The event must be a valid event for objectname and a script must exist for the event in objectname.|
|word (optional)|A long value to be stored in the WordParm property of the system's Message object. If you want to specify a value for long, but not word, enter 0. (For cross-platform compatibility, WordParm and LongParm are both longs.)|
|long (optional)|A long value or a string that you want to store in the LongParm property of the system's Message object. When you specify a string, a pointer to the string is stored in the LongParm property, which you can access with the String function (see Usage).|



Return value Integer. Returns 1 if it is successful and the event script runs and -1 if the event is not a valid event for objectname, or no script exists for the event in objectname. If any argument's value is null, TriggerEvent returns null. Usage



If you specify the name of an event instead of a value of the TrigEvent enumerated datatype, enclose the name in double quotation marks.
