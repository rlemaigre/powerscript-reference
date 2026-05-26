# Examples

The following example copies a file from the current directory to a different directory and saves the return value in a variable. It does not replace a file of the same name if one already exists in the target directory:



integer li_FileNum li_FileNum = FileCopy ("jazz.gif" , &



"C:\emusic\jazz.gif", FALSE)



See also FileMove GetCurrentDirectory



- 10.145 FileDelete Description Deletes the named file. Syntax FileDelete ( filename )

- Table 10.177:




|Argument|Description|
|---|---|
|filename|A string whose value is the name of the file you want to delete|



Return value Boolean. Returns true if it succeeds, false if an error occurs. If filename is null, FileDelete returns null. Examples These statements delete the file the user selected in the Open File window:



integer ret, value string docname, named



value = GetFileOpenName("Select File," & docname, named, "DOC", & "Doc Files (*.DOC),*.DOC")



IF value = 1 THEN ret = MessageBox("Delete", &



"Delete file?", Question!, OKCancel!) IF ret = 1 THEN FileDelete(docname)



See also FileExists



- 10.146 FileEncoding Description




Checks the encoding of the specified file. Syntax



FileEncoding ( filename )



- Table 10.178:




|Argument|Description|
|---|---|
|filename|The name of the file you want to test for encoding type|



Return value A value of the enumerated datatype encoding. Values are: EncodingANSI! EncodingUTF8! EncodingUTF16LE! EncodingUTF16BE! If filename does not exist, returns null. Usage



Use this function to determine the encoding used in an external file before attempting to use it in a PowerBuilder application.
