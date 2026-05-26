# See also

DeleteStatePicture



- 10.118 DeleteStatePicture Description Deletes a state picture from a control. Applies to ListView and TreeView controls Syntax controlname.DeleteStatePicture ( index )

- Table 10.147:



|Argument|Description|
|---|---|
|controlname|The name of the ListView or TreeView control from which you want to delete a picture from the state image list|
|index|The index number of the state picture you want to delete|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Examples This example deletes a state picture from a ListView control:



lv_list.DeleteStatePicture(1)



See also DeleteStatePictures



10.119 DeleteStatePictures



Description Deletes all state pictures from a control. Applies to ListView and TreeView controls Syntax



controlname.DeleteStatePictures ( )



- Table 10.148:






|Argument|Description|
|---|---|
|controlname|The name of the ListView or TreeView control from which you want to delete all state pictures|
