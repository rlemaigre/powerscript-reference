# Return value

Blob. Returns the key value if it succeeds. If any argument's value is null, the method returns null. If an error occurs, throw the exception.



Examples This example obtains the picture path (a blob value) from the JSON string.



// Blob GetValueBlob (string Key) String ls_PicturePath JsonPackage ljpk_User ljpk_User = Create JsonPackage



// Loads the JSON string to the JSONPackage object ljpk_User.loadstring ( '{"id":100, "name":"Henry.Ken", "birthday":"1998-01-01",



"picturepath":"QTpcV29ya0RvY3VtZW50XFVwZ3JhZGVc5Zu+54mHXGF1dG9ydW4uQk1Q" }') // Gets the key value: A:\WorkDocument\Upgrade\images\autorun.BMP ls_PicturePath = String(ljpk_User.GetValueBlob("picturepath"),EncodingUTF8!)



See also SetValueBlob GetValueBoolean GetValueDate GetValueDateTime GetValueNumber GetValueString GetValueTime GetValueToDataWindow



- 10.292 GetValueBoolean Description Gets the boolean value of the key.




If more than one key with the same name exists, then get the value of the first key. Notice that the IgnoreCase property (true by default) determines whether the key name will be matched in a case-sensitive manner.



Applies to JSONPackage object Syntax



objectname.GetValueBoolean ( Key )



- Table 10.361:




|Argument|Description|
|---|---|
|objectname|The name of the JSONPackage object|
|Key|A string specifying the key of the item of JsonBooleanItem type. If more than one key with the same name already exists, the value of the first key will be obtained.|
