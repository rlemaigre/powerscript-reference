# Table 10.20:

|Argument|Description|
|---|---|
|objectname|The name of the JSONGenerator object in which you want to add an item.|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonArrayItem or JsonObjectItem type.|
|Key|A string whose value is the key of the child item.|
|Value|A datetime whose value is the value of the child item.|
|Flag|A boolean whose value is the type of the child item.|



|Argument|Description|
|---|---|
| |True -- JsonNumberItem type. A JsonNumberItem type value is a UTC timestamp converted from the local time using the local timezone.<br><br>False -- JsonStringItem type. A JsonStringItem type value is a string converted from the local time directly (no timezone conversion).|



Return value Long. Returns the handle of the new child item if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null.
