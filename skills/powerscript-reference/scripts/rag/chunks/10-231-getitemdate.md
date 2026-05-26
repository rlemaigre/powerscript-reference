# 10.231 GetItemDate

- 10.231.1 Syntax 1 Description Gets the value of the item whose type is date. Applies to JSONParser objects Syntax objectname.GetItemDate ( ItemHandle )


- Table 10.284:




|Argument|Description|
|---|---|
|objectname|The name of the JSONParser object whose item value you want to obtain.|
|ItemHandle|A long whose value is the item handle of JsonStringItem type.|



Return value Date. Returns the date value of the item if it succeeds; if any argument's value is null, returns null; if an error occurs, the SystemError event will be triggered.
