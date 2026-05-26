# 10.658 SetValueBlob Description

Sets the blob value for a key. If the key does not exist, then create the key and set its value. If the key already exists, then overwrite the value of this key. If more than one key with the same name already exists, then overwrite the value of the first key. Notice that the IgnoreCase property (true by default) determines whether the key name will be matched in a case-sensitive manner.



Applies to JSONPackage object Syntax



objectname.SetValueBlob ( Key, Value )



- Table 10.821:




|Argument|Description|
|---|---|
|objectname|The name of the JSONPackage object.|
|Key|A string specifying the key name.|
|Value|A blob specifying the key value.|
