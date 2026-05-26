# Return value

- Integer. Returns 0 if it succeeds and one of the following values if an error occurs: 1 -- User canceled out of dialog box




-9 -- Error If any argument's value is null, InsertObject returns null. Examples



This example displays the standard Insert Object dialog box so that the user can select an OLE object. InsertObject inserts the selected object in the ole_1 control:



integer result result = ole_1.InsertObject()



See also InsertClass InsertFile LinkTo



- 10.331 InsertPicture Description Inserts an image at the insertion point in a RichTextEdit control. Applies to RichTextEdit controls Syntax rtename.InsertPicture ( filename{, format } )


- Table 10.413:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit control in which you want to insert an image|
|filename|A string whose value is the name of the file that contains the image|
|format|An integer whose value determines the format in which the image is saved in the RTF file. Values are:<br><br>• 1 -- BMP<br>• 2 -- WMF (default)<br>• 3 -- PNG<br>• 4 -- JPG<br>|
