# See also

DeleteLargePicture



- 10.20 AddPicture Description Adds a bitmap, icon, or cursor to the main image list. Applies to PictureListBox, DropDownPictureListBox, and TreeView controls Syntax controlname.AddPicture ( picturename )


- Table 10.27:




|Argument|Description|
|---|---|
|controlname|The name of the control to which you want to add an icon, cursor, or bitmap to the main image list|
|picturename|The name of the icon, cursor, or bitmap you want to add to the main image list|



Return value Integer. Returns the picture index number if it succeeds and -1 if an error occurs. Usage The picture is assigned an index in the order in which it is added to the control. Adding pictures at runtime does not update the PictureName property array. Because the picture is added at the end of the list, the return value from AddPicture is the number of pictures associated with the control. Before you add pictures, you can specify scaling for the pictures by setting the PictureWidth and PictureHeight properties. The dimensions in effect when you add the first picture determine the scaling for all pictures. Changing the property values after you add pictures has no effect. If you do not specify values for PictureWidth and PictureHeight before you add pictures, the dimensions of the first image determine the scaling for all pictures you add. When a you add a bitmap, specify the color in the bitmap that will be transparent by setting the PictureMaskColor property before calling AddPicture. You can change the PictureMaskColor property between calls. Examples



This example adds a picture to a TreeView control and associates it with a new TreeView item:



long ll_tvi integer li_picture li_picture = & tv_list.AddPicture("c:\apps_pb\staff.ico")



ll_tvi = tv_list.FindItem(RootTreeItem!, 0) tv_list.InsertItemFirst(ll_tvi, "Dept.", li_picture)



See also DeletePicture
