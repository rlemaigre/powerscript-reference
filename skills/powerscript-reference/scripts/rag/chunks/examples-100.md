# Examples

This example searches the libraries for the running application to find the function definition for f_myfunction:



ScriptDefinition sd_myfunc sd_myfunc = FindFunctionDefinition("f_myfunction")



This example searches the libraries in the array ls_libraries to find the class definition for w_genapp_frame:



ScriptDefinition sd_myfunc string ls_libraries[ ]



- ls_libraries[1] = "c:\pwrs\bizapp\windows.pbl"
- ls_libraries[2] = "c:\pwrs\framewk\windows.pbl"


- ls_libraries[3] = "c:\pwrs\framewk\ancestor.pbl"




sd_myfunc = FindFunctionDefinition( & "f_myfunction", ls_libraries)



See also FindClassDefinition FindMatchingFunction FindTypeDefinition



- 10.165 FindItem Finds the next item in a list.


- Table 10.197:



|To find the next item|Use|
|---|---|
|In a ListBox, DropDownListBox, PictureListBox, or DropDownPictureListBox<br><br>|Syntax 1|
|In a ListView control based upon its label|Syntax 2|
|By relative position in a ListView control|Syntax 3|
|By relative position in a TreeView control|Syntax 4<br><br>|



- 10.165.1 Syntax 1: For ListBox and DropDownListBox controls Description Finds the next item in a ListBox that begins with the specified search text. Applies to ListBox, DropDownListBox, PictureListBox, and DropDownPictureListBox controls Syntax listboxname.FindItem ( text, index )


- Table 10.198:




|Argument|Description|
|---|---|
|listboxname|The name of the ListBox control in which you want to find an item.|
|text|A string whose value is the starting text of the item you want to find.|
|index|The number of the item just before the first item to be searched. To search the whole list, specify 0.|



Return value Integer. Returns the index of the first matching item. To match, the item must start with the specified text; however, the text in the item can be longer than the specified text. If no match is found or if an error occurs, FindItem returns -1. If any argument's value is null, FindItem returns null.
