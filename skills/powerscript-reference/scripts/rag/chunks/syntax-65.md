# Syntax

GetFileSaveName ( title, pathname, filename {, extension {, filter { , initdir { , aFlag } } } } ) GetFileSaveName ( title, pathname, filename [ ] {, extension {, filter { , initdir { , aFlag } } } } )



- Table 10.261:




|Argument|Description|
|---|---|
|title|A string whose value is the title of the dialog box.|
|pathname|A string variable whose value is the default path name and which stores the returned path. If the user selects a single file, the pathname variable contains the path name and file name. The default file name is displayed in the File name box; the user can specify another name.|
|filename, filename[ ]|A string variable in which the returned file name is stored or an array of string variables in which multiple selected file names are stored. Specifying an array of string variables enables multiple selection in the dialog box.|
|extension (optiona|l)A string whose value is a 1- to 3-character default file extension. The default is no extension.|
|filter (optional)|A string whose value is the description of the displayed files and the file extension that you want use to select the displayed files (the filter). The format for filter is: description,*. ext<br><br>The default is: "All Files (*.*),*.*"|
|initdir (optional)|A string whose value is the initial directory name. The default is the current directory.|
|aFlag (optional)|An unsigned long whose value determines which options are enabled in the dialog box. The value of each option's flag is calculated as 2 to the power of (index -1), where index is the integer associated with the option. The value of the aggregate flag passed to GetFileOpenName is the sum of the individual option flags. See the table in the Usage section for GetFileOpenName for a list of options, the index associated with each option, and the option's meaning.|



Return value Integer. Returns 1 if it succeeds, 0 if the user clicks the Cancel button or Windows cancels the display, and -1 if an error occurs. If any argument's value is null, GetFileSaveName returns null. Usage



If you specify a DOS-style extension and the user enters a file name with no extension, PowerBuilder appends the default extension to the file name. If you specify a file mask to act as a filter, PowerBuilder displays only files that match the mask.



If you specify a string for the filename argument, the user can select only one file. The pathname argument contains the path name and the file name, for example C:\temp\test.txt.



If you specify a string array for the filename argument, the user can select more than one file. If the user selects multiple files, the pathname argument contains the path only, for example C:\temp. If the user selects a single file, its name is appended to the pathname argument, for example C:\temp\test.txt. For an example that shows the use of a string array, see the GetFileOpenName function.



For usage notes on the filter, initdir, and aFlag arguments, see the GetFileOpenName function.
