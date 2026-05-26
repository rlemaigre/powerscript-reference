# 10.110 DeleteItems Description Deletes all items from a ListView control. Applies to

ListView controls Syntax



listviewname.DeleteItems ( )



- Table 10.139:



|Argument|Description|
|---|---|
|listviewname|The name of the ListView control from which you want to delete all items|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Examples This example deletes all the items in a ListView control:



lv_list.DeleteItems()



See also DeleteItem



10.111 DeleteLargePicture



Description Deletes a picture from the large image list. Applies to ListView controls Syntax



listviewname.DeleteLargePicture ( index )



- Table 10.140:




|Argument|Description|
|---|---|
|listviewname|The name of the ListView control to which you want to delete a large picture from the image list|
|index|The index entry for the large picture you want to delete|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Examples This example deletes a large picture from a ListView control:



lv_list.DeleteLargePicture(1)
