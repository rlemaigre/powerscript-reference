# Examples

The following example saves the image in an InkPicture control and its ink annotations in bitmap format into a blob, and attempts to update the image in the database:



int li_return blob lblb_ink



li_return = ip_1.save(lblb_ink, 0, true) UPDATEBLOB employee SET backimage = :lbb_ink WHERE emp_id = :gi_id; IF sqlca.SQLNRows > 0 THEN



COMMIT; ELSE



messagebox("Update failed",sqlca.sqlerrtext) END IF



The following example saves the image in an InkControl into a GIF file without any ink annotations:



int li_return string ls_pathname, ls_filename



GetFileSaveName("Save As", ls_pathname, ls_filename, "GIF") li_return = ip_1.save(ls_pathname, 2, false)



See also LoadInk LoadPicture ResetInk



ResetPicture SaveInk



- 10.549.2 Syntax 2: For OLE objects Description Saves an OLE object in an OLE control or an OLE storage object. Syntax oleobject.Save ( )


- Table 10.675:




|Argument|Description|
|---|---|
|oleobject|The name of an OLE control or an OLE storage variable|



Return value Integer. Returns 0 if it succeeds and one of the following negative values if an error occurs:



- -1 -- Control is empty
- -9 -- Other error If oleobject is null, Save returns null. Usage




When you save an OLE object, PowerBuilder saves it according to the current connection between it and an open storage or file. You establish an initial connection when you call the Open function. When you call SaveAs, the old connection is ended and a new connection is established with another storage or file.



When you call Save for an OLE control, PowerBuilder saves the object in the OLE control to the storage to which it is currently connected. The storage can be a storage object variable or a OLE storage file.



If the data has never been saved in the server application, so that there is no file on disk, the Save function in PowerBuilder returns an error.



When you call Save for a storage object variable, PowerBuilder saves the storage to the file, or substorage within the file, to which it is currently connected. You must have previously established a connection to an OLE storage file on disk, or a substorage within the file, either with Open or SaveAs.
