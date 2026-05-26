# Examples

These statements add the series named Costs to the graph gr_product_data:



integer series_nbr series_nbr = gr_product_data.AddSeries("Costs")



These statements add an unnamed series to the graph gr_product_data:



integer series_nbr series_nbr = gr_product_data.AddSeries("")



See also AddCategory AddData DeleteData DeleteSeries FindSeries InsertCategory InsertSeries SeriesCount SeriesName



- 10.22 AddSmallPicture Description Adds a bitmap, icon, or cursor to the small image list. Applies to ListView controls Syntax listviewname.AddSmallPicture ( picturename )


- Table 10.29:




|Argument|Description|
|---|---|
|listviewname|The name of the ListView control to which you are adding a small image|
|picturename|The name of the bitmap, icon, or cursor you are adding to the ListView control small image list|



Return value Integer. Returns the picture index if it succeeds and -1 if an error occurs. Usage



When you add a small picture to a ListView control, it is given the next available picture index in the ListView. For example, if your ListView has two pictures, the next picture you add will have index number 3.



Before you add small pictures, you can specify scaling for the pictures by setting the SmallPictureWidth and SmallPictureHeight properties. The dimensions in effect when you add the first picture determine the scaling for all pictures. Changing the property values after you add pictures has no effect.



If you do not specify values for SmallPictureWidth and SmallPictureHeight before you add pictures, the dimensions of the first image determine the scaling for all pictures you add.



Before you call AddSmallPicture, specify the color in the bitmap that will be transparent by setting the SmallPictureMaskColor property. You can change the SmallPictureMaskColor property between calls.



Examples This example adds the file "shortcut.ico" to the small picture index of the ListView lv_files:



//Add small picture integer index index = lv_files.AddSmallPicture("shortcut.ico")



See also DeleteSmallPicture



- 10.23 AddStatePicture Description Adds a bitmap, icon, or cursor to the state image list. Applies to ListView and TreeView controls Syntax controlname.AddStatePicture ( picturename )


- Table 10.30:




|Argument|Description|
|---|---|
|controlname|The name of the ListView or TreeView control to which you are adding a bitmap, cursor, or icon|
|picturename|The name of the bitmap, icon, or cursor you are adding|



Return value Integer. Returns the picture index if it succeeds and -1 if an error occurs. Usage



For ListViews in large icon view, the state picture is a picture displayed to the left of the large picture, by default in a smaller size. For TreeViews, the state picture is displayed to the left of the regular picture and the item is moved to the right to make room for it.



If you specify either StatePictureWidth or StatePictureHeight, the picture is scaled to the size specified by that property.



When a you add a bitmap, specify the color in the bitmap that will be transparent by setting the StatePictureMaskColor property before calling AddPicture. You can change the StatePictureMaskColor property between calls.



Examples This example adds the file star.ico to the state picture index of the ListView lv_files:



//Add state picture integer index index = lv_files.AddStatePicture("star.ico")



See also DeleteStatePicture



- 10.24 AddToLibraryList Description Adds new files to the library search path of an application or component at runtime. Syntax AddToLibraryList ( filelist )


- Table 10.31:




|Argument|Description|
|---|---|
|filelist|A comma-separated list of file names. Specify the full file name with its extension. If you do not specify a path, PowerBuilder uses the system's search path to find the file.|



Return value Integer. Returns 1 if it succeeds. If an error occurs, it returns:



- -1 -- The application or component is being run in the PowerBuilder development environment, rather than from a standalone executable or server.
- -2 -- The new library list or existing library list is empty, or another internal error has occurred.
