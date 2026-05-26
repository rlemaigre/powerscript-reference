# Syntax

objectname.Clear ( )



Table 10.75:



|Argument|Description|
|---|---|
|objectname|One of the following:<br><br>• The name of the DataWindow control, EditMask, MultiLineEdit, SingleLineEdit, RichTextEdit, DropDownListBox or DropDownPictureListBox from which you want to delete (clear) selected text.<br>• The name of an OLE control or storage object variable (type OLEStorage) from which you want to release its OLE object.<br><br><br>If objectname is a DropDownListBox or DropDownPictureListBox, its AllowEdit property must be true.|



Return value Integer for DataWindow, InkEdit, and list boxes, Long for other controls.



For edit controls, returns the number of characters that Clear removed from objectname. If no text is selected, no characters are removed and Clear returns 0. If an error occurs, Clear returns -1.



For OLE controls and storage variables, returns 0 if it succeeds and -9 if an error occurs. If objectname is null, Clear returns null. Usage



To select text for deleting, the user can use the mouse or keyboard. You can also call the SelectText function in a script.



To delete selected text and store it in the clipboard, use the Cut function.



Clearing the OLE object from an OLE control deletes all references to it. Any changes to the object are not saved in its storage object or file.



Clearing an OLEStorage object variable breaks any connections established by Open or SaveAs between it and a storage file (when Open or SaveAs is called for the OLEStorage object variable). It also breaks connections between it and any OLE controls that have called Open or SaveAs to connect to the object in the storage variable.
