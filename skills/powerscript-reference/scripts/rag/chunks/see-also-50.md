# See also

Close Open Save



- 10.551 SaveDockingState Description Stores the MDI state in the registry. Applies to Window objects Syntax SaveDockingState ( regkey )

- Table 10.682:




|Argument|Description|
|---|---|
|regkey|The regkey argument is the registry key. If no entry for the key exists in the registry, one is created. Existing keys are overwritten.|



Return value Integer.



- Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null SaveDockingState returns null. Usage




You can set the application so that it saves the states of the open sheets. You should call this function when the application closes.



Examples Save all sheets in register



integer li_rtn string is_register = "Appeon\PowerBuilder\Examples\Docking\" li_rtn = this.SaveDockingState (is_register)



- 10.552 SaveDocument Description




Saves the contents of a RichTextEdit control in a file. You can specify either rich-text format (RTF) or text format for the file.



Applies to RichTextEdit controls Syntax



rtename.SaveDocument ( filename {, filetype {, encoding }} )



- Table 10.683:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit control whose contents you want to save.|
|filename|A string whose value is the name of the file to be saved. If the file already exists, the FileExists event is triggered.|
|filetype (optional)|A value of the FileType enumerated datatype specifying the format of the saved file. Values are:<br><br>• FileTypeRichText! -- Save the file in rich text format<br>• FileTypeText! -- Save the file as text<br>• FileTypeDoc! -- Save the file in Microsoft Word format<br>• FileTypeHTML! -- Save the file in HTML format<br>• FileTypePDF! -- Save the file in PDF format<br>|
|encoding (optional|Character) encoding of the file to which the data is saved. This parameter applies only to text files. If you do not specify an encoding parameter, the file is saved in ANSI format.<br><br>The filetype argument must be set to FileTypeText! If the filetype argument is set to any other file type, this argument is ignored. Values are:<br><br>• EncodingANSI! (default)<br>• EncodingUTF8!<br>• EncodingUTF16LE!<br>• EncodingUTF16BE!<br>|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage



SaveDocument triggers a FileExists event when the file you name already exists. If you do not specify a filetype, SaveDocument saves the file as a text file if you specify a file name with the extension .txt, as a Microsoft Word document if you specify a file name with the extension .doc, and as an RTF file if you specify a file name with the .rtf extension.



The format that you specify in the encoding argument is valid only if you specified FileTypeText! for the filetype argument. SaveDocument saves text in ANSI format only for all other file types.



Examples This code for a CommandButton saves the document in the RichTextEdit rte_1:



integer li_rtn li_rtn = rte_1.SaveDocument("c:\test.rtf", & FileTypeRichText!)



If the file TEST.RTF already exists, PowerBuilder triggers the FileExists event with the following script. OpenWithParm displays a response window that asks the user if it is OK to overwrite the file. The return value from FileExists determines whether the file is saved:



OpenWithParm( w_question, & "The specified file already exists. " + &



"Do you want to overwrite it?" ) IF Message.StringParm = "Yes" THEN



RETURN 0 // File is saved ELSE



RETURN -1 // Saving is canceled END IF



This code for a CommandButton saves the document in the RichTextEdit rte_1 in a text file with UTF-16LE encoding:



integer li_rtn li_rtn = rte_1.SaveDocument("c:\test.txt", &



FileTypeText!, EncodingUTF16LE!)



See also InsertDocument



- 10.553 SaveInk Description Saves ink to a file or blob from an InkPicture control. Applies to InkPicture controls Syntax inkpicname.SaveInk ( t | b {, format {, mode } } )


- Table 10.684:




|Argument|Description|
|---|---|
|inkpicname|The name of the InkPicture control from which you want to save ink.|
|t|A string containing the name and location of a file that will hold the ink you want to save from the control.|
|b|The name of a blob passed by reference that will hold the ink you want to save from the control.|
|format (optional)|A value of the InkPersistenceFormat enumerated variable that specifies the format in which you want to save the ink. Values are:|



|Argument|Description|
|---|---|
| |• Base64GIFFormat!<br>• Base64InkSerializedFormat!<br>• GIFFormat!<br>• InkSerializedFormat! (default)<br>|
|mode (optional)|A value of the InkCompressionMode enumerated variable that specifies the compression mode in which you want to save the ink. Values are:<br><br>• DefaultCompression! (default)<br>• MaximumCompression!<br>• NoCompression!<br>|



Return value Integer. Returns 1 for success and -1 for failure. Usage



Use the SaveInk function to save annotations made to an image in an InkPicture control to a separate file or blob.



InkSerializedFormat! (ISF) provides the most compact persistent ink representation. This format can be embedded inside a binary document format or added to the clipboard. Base64InkSerializedFormat! encodes the ISF format as a base64 stream, which allows the ink to be encoded in an XML or HTML file.



GIFFormat! saves the image in a Graphics Interchange Format (GIF) file in which ISF is embedded as metadata. This format can be viewed in applications that are not ink enabled. Base64GIFFormat! is persisted by using a base64 encoded fortified GIF. Use this format if the ink is to be encoded directly in an XML or XHTML file and will be converted to an image at a later time. It supports XSLT transformations to HTML.
