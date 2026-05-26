# Examples

This example sets the value of the picturepath key to A:\Document4D\PowerBuilder Picture \images\startup.BMP



// Integer SetValueBlob (string Key, blob Value) String ls_PicturePath JsonPackage ljpk_User ljpk_User = Create JsonPackage



// Loads the JSON string to the JSONPackage object ljpk_User.loadstring( '{"id":100,"name":"Henry.Ken","birthday":"1998-01-01","picturepath":"QTpcV29ya0RvY3VtZW50XFVwZ3JhZGVc5Zu



+54mHXGF1dG9ydW4uQk1Q" }') // Sets the key value and uses the UTF8 encoding. ljpk_User.SetValueBlob( "picturepath", Blob("A:\Document4D\PowerBuilder Picture \images\startup.BMP",EncodingUTF8!)) // Gets the key value: A:\Document4D\PowerBuilder Picture\images\startup.BMP ls_PicturePath = String(ljpk_User.GetValueBlob("picturepath"),EncodingUTF8!)



See also GetValueBlob SetValueBoolean SetValueByDataWindow SetValueDate SetValueDateTime SetValueNumber SetValueString SetValueTime
