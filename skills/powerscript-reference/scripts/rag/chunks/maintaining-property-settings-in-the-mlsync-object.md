# Maintaining property settings in the MLSync object

Normally when you call SetParm(SyncParm) from an MLSync object, you automatically override any authentication values (AuthenticateParms, Datasource, DBUser, DBPass, EncryptionKey, MLUser, and MLPass) that you set for properties of the MLSync object -- even when the value of a particular SyncParm property is an empty string. However, if you call SetNull to set a particular property of the SyncParm object to NULL before you call SetParm, the property value in the MLSync object will be used instead.



See also GetCommandString SetNewMobiLinkPassword SetSyncRegistryProperties



- 10.628 SetPicture Description Assigns an image stored in a blob to be the image in a Picture control. Applies to Picture controls Syntax picturecontrol.SetPicture ( bimage )


- Table 10.778:




|Argument|Description|
|---|---|
|picturecontrol|The name of a Picture control in which you want to set the bitmap.|
|bimage|A blob containing the new bitmap. bimage must be a valid picture in bitmap (BMP), Compuserve Graphics Interchange Format (GIF), Joint Photographic Experts Group (JPEG), run-length encoded (RLE), or Windows Metafile (WMF).|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, SetPicture returns null. Usage



If you use FileRead to get the bitmap image from a file, remember that the FileRead function can read a maximum of 32,765 bytes at a time. To check the length of a file, call FileLength. If the file is over 32,765 bytes, you can call FileRead more than once and concatenate the return values, or you can call FileReadEx.



For Unicode files and files that you convert to Unicode, you must make sure that the file length value is an even number. Otherwise FileRead or FileReadEx cannot parse the entire file.
