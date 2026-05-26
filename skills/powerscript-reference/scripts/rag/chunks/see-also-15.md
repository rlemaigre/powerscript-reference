# See also

DeleteLargePictures



- 10.112 DeleteLargePictures Description Deletes all large pictures from a ListView control. Applies to ListView controls Syntax listviewname.DeleteLargePictures ( )

- Table 10.141:



|Argument|Description|
|---|---|
|listviewname|The name of the ListView control from which you want to delete all pictures from the large picture image list|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Examples This example deletes all large pictures from a ListView control:



lv_list.DeleteLargePictures()



See also DeleteLargePicture



10.113 DeletePicture



Description Deletes a picture from the image list. Applies to PictureListBox, DropDownPictureListBox, and TreeView controls Syntax



controlname.DeletePicture ( index )



- Table 10.142:






|Argument|Description|
|---|---|
|controlname|The control from which you want to delete a picture|
|index|The index number of the picture you want to delete from the TreeView control's image list|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage



When you delete a picture from the image list for a control, all subsequent pictures in the list are renumbered to fill the gap. Because the picture index for an item does not change, the pictures for items that use the affected index numbers will change.



Examples This example deletes the sixth image from the image list:



tv_list.DeletePicture(6)



See also AddPicture DeletePictures



- 10.114 DeletePictures Description Deletes all pictures from an image list. Applies to PictureListBox, DropDownPictureListBox, and TreeView controls Syntax controlname.DeletePictures ( )

- Table 10.143:




|Argument|Description|
|---|---|
|controlname|The control in which you want to delete all pictures from the image list|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Examples This example deletes all images from a TreeView control image list:



tv_list.DeletePictures()



See also AddPicture DeletePicture



- 10.115 DeleteSeries Description




Deletes a series and its data values from a graph. Applies to



Graph controls in windows and user objects. Does not apply to graphs within DataWindow objects (because their data comes directly from the DataWindow).
