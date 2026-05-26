# Examples

This example destroys the performance analysis model previously created using the BuildModel function:



lpro_model.DestroyModel() DESTROY lpro_model



See also BuildModel



- 10.121 DirectoryExists Description Determines if the named directory exists. Syntax DirectoryExists ( directoryname )

- Table 10.150:




|Argument|Description|
|---|---|
|directoryname|String for the name of the directory you want to verify as existing|



Return value



Returns true if the directory exists. Returns false if the directory does not exist or if you pass a file name in the directoryname argument.



Usage



You can use this method before attempting to move a file or delete a directory using other file system methods.



Examples



This example determines if a directory exists before attempting to move a file to it; otherwise it displays a message box indicating that the path does not exist:



string ls_path="monthly targets" If DirectoryExists ( ls_path ) Then



FileMove ("2000\may.csv", ls_path+"\may.csv" ) MessageBox ("File Mgr", "File moved to "&



+ ls_path + ".") Else



MessageBox ("File Mgr", "Directory " + ls_path+&



" does not exist" ) End If



See also FileMove GetCurrentDirectory RemoveDirectory



- 10.122 DirList Description




Populates a ListBox with a list of files. You can specify a path, a mask, and a file type to restrict the set of files displayed. If the window has an associated StaticText control, DirList can display the current drive and directory as well.



Applies to ListBox, DropDownListBox, PictureListBox, and DropDownPictureListBox controls Syntax



listboxname.DirList ( filespec, filetype {, statictext } )



- Table 10.151:




|Argument|Description|
|---|---|
|listboxname|The name of the ListBox control you want to populate.|
|filespec|A string whose value is the file pattern. This is usually a mask (for example, *.INI or *.TXT). If you include a path, it becomes the current drive and directory.|
|filetype|An unsigned integer representing one or more types of files you want to list in the ListBox. Types are:<br><br>• 0 -- Read/write files<br>• 1 -- Read-only files<br>• 2 -- Hidden files<br>• 4 -- System files<br>• 16 -- Subdirectories<br>• 32 -- Archive (modified) files<br>• 16384 -- Drives<br>• 32768 -- Exclude read/write files from the list<br><br><br>To list several types, add the numbers associated with the types. For example, to list read-write files, subdirectories, and drives, use 0+16+16384 or 16400 for filetype.|
|statictext (optional|)The name of the StaticText in which you want to display the current drive and directory.|



Return value Boolean. Returns true if the search path is valid so that the ListBox is populated or the list is empty. DirList returns false if the ListBox cannot be populated (for example, filespec is a file, not a directory, or specifies an invalid path). If any argument's value is null, DirList returns null. Usage



You can call DirList when the window opens to populate the list initially. You should also call DirList in the script for the SelectionChanged event to repopulate the list box based on the new selection. (See the example in DirSelect.)
