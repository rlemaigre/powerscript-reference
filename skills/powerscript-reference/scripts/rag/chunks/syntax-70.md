# Syntax

objectname.GetValueDateTime ( Key )



- Table 10.363:




|Argument|Description|
|---|---|
|objectname|The name of the JSONPackage object|
|Key|A string specifying the key of the item of JsonStringItem or JsonNumberItem type. For the JsonStringItem type, formats such as "yyyy-mm-dd hh:mm:ss" are supported. If the item value is a number (UTC timestamp), the returned datetime value will be the local datetime converted using the local timezone. If the item value is a string, the returned datetime value will not be converted using a timezone.<br><br>If more than one key with the same name already exists, the value of the first key will be obtained.|
