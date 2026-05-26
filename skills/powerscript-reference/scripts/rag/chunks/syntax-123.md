# Syntax

listboxname.SelectItem ( item, index )



- Table 10.707:




|Argument|Description|
|---|---|
|listboxname|The name of the ListBox control in which you want to select a line|
|item|A string whose value is the starting text of the item you want to select|
|index|The number of the item after which you want to begin the search|



Return value Integer. Returns the index number of the selected item. If no match is found, SelectItem returns 0; it returns -1 if an error occurs. If any argument's value is null, SelectItem returns null. Usage



SelectItem begins searching for the desired item after the item identified by index. To match, the item must start with the specified text; however, the text in the item can be longer than the specified text.



To find an item but not select it, use the FindItem function.
