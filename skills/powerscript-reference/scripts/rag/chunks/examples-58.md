# Examples

This example uses AddItem in a CommandButton Clicked event to add a ListView item for each click:



count = count + 1 listviewitem l_lvi l_lvi.PictureIndex = 2 l_lvi.Label = "Item "+ string(count) lv_1.AddItem(l_lvi)



See also DeleteItem FindItem InsertItem



Reset TotalItems



- 10.9 AddItemArray Description Adds the child item of JsonArrayItem type in the JSON generator object. Applies to JSONGenerator objects Syntax objectname.AddItemArray ( ParentItemHandle ) objectname.AddItemArray ( ParentItemHandle, Key )


- Table 10.15:



|Argument|Description|
|---|---|
|objectname|The name of the JSONGenerator object in which you want to add an item|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonArrayItem type|



- Table 10.16:




|Argument|Description|
|---|---|
|objectname|The name of the JSONGenerator object in which you want to add an item|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonArrayItem type|
|Key|A string whose value is the key of the child item|



Return value Long. Returns the handle of the new child item if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null.
