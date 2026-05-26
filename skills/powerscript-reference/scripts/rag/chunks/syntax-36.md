# Syntax

listviewname.DeleteSmallPicture ( index )



- Table 10.145:



|Argument|Description|
|---|---|
|listviewname|The name of the ListView control from which you want to delete a small picture from the image list|
|index|The index number of the small picture you want to delete|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Examples This example deletes a small picture from a ListView control:



lv_list.DeleteSmallPicture(1)



See also DeleteSmallPictures



10.117 DeleteSmallPictures



Description Deletes all small pictures from a ListView control. Applies to ListView controls Syntax



listviewname.DeleteSmallPictures ( )



- Table 10.146:




|Argument|Description|
|---|---|
|listviewname|The name of the ListView control from which you want to delete all small pictures|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Examples This example deletes all small pictures from a ListView control:



lv_list.DeleteSmallPictures()
