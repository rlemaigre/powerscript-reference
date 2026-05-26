# Examples

This example designates overlay images in a ListView control. The same picture is used for large and small images:



// Set up the overlay images integer index index = lv_1.AddLargePicture("shortcut.ico") index = lv_1.AddSmallPicture("shortcut.ico") lv_1.SetOverlayPicture(1, index) index = lv_1.AddLargePicture("not.ico") index = lv_1.AddSmallPicture("not.ico") lv_1.SetOverlayPicture(2, index) // Assign the second overlay image to the first item listviewitem lvi integer i i = lv_1.GetItem(1, lvi) lvi.OverlayPictureIndex = 2 i = lv_1.SetItem(1, lvi)



This example designates the first picture in the TreeView's main image list as the first overlay picture. The picture was added to the main image list on the TreeView's property sheet:



tv_list.SetOverlayPicture(1, 1)



This code in the TreeView's Clicked event assigns the overlay image to the clicked item:



treeviewitem tvi tv_list.GetItem(handle, tvi) tvi.OverlayPictureIndex = 1 tv_list.SetItem(handle, tvi)
