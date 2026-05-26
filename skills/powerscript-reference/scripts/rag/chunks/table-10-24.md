# Table 10.24:

|Argument|Description|
|---|---|
|objectname|The name of the JSONGenerator object in which you want to add an item|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonArrayItem or JsonObjectItem type|
|Key|A string whose value is the key of the child item|



|Argument|Description|
|---|---|
|Value|A string whose value is the value of the child item|



Return value Long. Returns the handle of the new child item if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null.



- Example 1 This example creates an array item and then adds a string child item:



JsonGenerator lnv_JsonGenerator Long ll_RootArray lnv_JsonGenerator = Create JsonGenerator



ll_RootArray = lnv_JsonGenerator.CreateJsonArray() lnv_JsonGenerator.AddItemString(ll_RootArray, "string")



- Example 2 This example creates an object item and then adds a string child item:




JsonGenerator lnv_JsonGenerator Long ll_RootObject lnv_JsonGenerator = Create JsonGenerator



ll_RootObject = lnv_JsonGenerator.CreateJsonObject () lnv_JsonGenerator.AddItemString(ll_RootObject, "string", "value")



See also AddItemArray AddItemBlob AddItemBoolean AddItemDate AddItemDateTime AddItemNull AddItemNumber AddItemObject AddItemTime



- 10.18 AddItemTime Description Adds the child item of JsonStringItem type. Applies to JSONGenerator objects Syntax




objectname.AddItemTime ( ParentItemHandle, Value ) objectname.AddItemTime ( ParentItemHandle, Key, Value )



- Table 10.25:




|Argument|Description|
|---|---|
|objectname|The name of the JSONGenerator object in which you want to add an item|
|ParentItemHandle|A long whose value is the handle of the parent item of JsonArrayItem or JsonObjectItem type|
|Key|A string whose value is the key of the child item|
|Value|A time whose value is the value of the child item|



Return value Long. Returns the handle of the new child item if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null.



- Example 1 This example creates an array root item and adds a time child item:



Long ll_RootArray JsonGenerator lnv_JsonGenerator lnv_JsonGenerator = Create JsonGenerator



// Create an array root item ll_RootArray = lnv_JsonGenerator.CreateJsonArray()



// Add a time child item lnv_JsonGenerator.AddItemTime(ll_RootArray, time("12:15:00"))



- Example 2 This example creates an object root item and adds a time child item:




Long ll_RootObject JsonGenerator lnv_JsonGenerator lnv_JsonGenerator = Create JsonGenerator



// Create an object root item ll_RootObject = lnv_JsonGenerator.CreateJsonObject ()



// Add a time child item lnv_JsonGenerator.AddItemTime(ll_RootObject, "time", time("12:15:00"))



See also AddItemArray AddItemBlob AddItemBoolean AddItemDate AddItemDateTime AddItemNull AddItemNumber



AddItemObject AddItemString



- 10.19 AddLargePicture Description Adds a bitmap, icon, or cursor to the large image list. Applies to ListView controls Syntax listviewname.AddLargePicture ( picturename )


- Table 10.26:




|Argument|Description|
|---|---|
|listviewname|The name of the ListView control to which you are adding a bitmap, icon, or cursor|
|picturename|The name of the bitmap, icon, or cursor you are adding to the large image list|



Return value Integer. Returns the picture index if it succeeds and -1 if an error occurs. Usage



When you add a large picture to a ListView, it is given the next available picture index in the ListView. For example, if your ListView has two pictures, the next picture you add will be assigned picture index number 3.



Before you add large pictures, you can specify scaling for the pictures by setting the LargePictureWidth and LargePictureHeight properties. The dimensions in effect when you add the first picture determine the scaling for all pictures. Changing the property values after you add pictures has no effect.



If you do not specify values for LargePictureWidth and LargePictureHeight before you add pictures, the dimensions of the first image determine the scaling for all pictures you add.



When you add a bitmap, specify the color in the bitmap that will be transparent by setting the LargePictureMaskColor property before calling AddLargePicture. You can change the LargePictureMaskColor property between calls.



Examples This example adds the file "folder.ico" to the large picture index of the ListView lv_files:



// Add large picture integer index index = lv_files.AddLargePicture("folder.ico")
