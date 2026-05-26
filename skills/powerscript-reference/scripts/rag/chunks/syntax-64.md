# Syntax

GetFileOpenName ( title, pathname, filename {, extension {, filter { , initdir { , aFlag } } } } )



GetFileOpenName ( title, pathname, filename[ ] {, extension {, filter { , initdir { , aFlag } } } } )



- Table 10.259:




|Argument|Description|
|---|---|
|title|A string whose value is the title of the dialog box.|
|pathname|A string variable in which you want to store the returned path. If the user selects a single file, the pathname variable contains the path name and file name.|
|filename, filename|[A]string variable in which the returned file name is stored or an array of string variables in which multiple selected file names are stored. Specifying an array of string variables enables multiple selection in the dialog box.|
|extension (optiona|l)A string whose value is a 1- to 3-character default file extension. The default is no extension.|
|filter (optional)|A string whose value is a text description of the files to include in the list box and the file mask that you want to use to select the displayed files (for example, *.* or *.exe). The format for filter is:<br><br>description,*. ext<br><br>To specify multiple filter patterns for a single display string, use a semicolon to separate the patterns, for example:<br><br>"Graphic Files (*.bmp;*.gif;*.jpg;*.jpeg),<br><br>*.bmp;*.gif;*.jpg;*.jpeg"<br><br>The default is:<br><br>"All Files (*.*),*.*"|
|initdir (optional)|A string whose value is the initial directory name. The default is the current directory.|
|aFlag (optional)|An unsigned long whose value determines which options are enabled in the dialog box. The value of each option's flag is calculated as 2 to the power of (index -1), where index is the integer associated with the option. The value of the aggregate flag passed to GetFileOpenName is the sum of the individual option flags. See the table in the Usage section for a list of options, the index associated with each option, and the option's meaning.|



Return value Integer. Returns 1 if it succeeds, 0 if the user clicks the Cancel button or Windows cancels the display, and -1 if an error occurs. If any argument's value is null, GetFileOpenName returns null. Usage



If you specify a DOS-style file extension and the user enters a file name with no extension, PowerBuilder appends the default extension to the file name. If you specify a file mask to act as a filter, PowerBuilder displays only files that match the mask.



If you specify a string for the filename argument, the user can select only one file. The pathname argument contains the path name and the file name, for example C:\temp\test.txt.



If you specify a string array for the filename argument, the user can select more than one file. If the user selects multiple files, the pathname argument contains the path only, for example C:\temp. If the user selects a single file, its name is appended to the pathname argument, for example C:\temp\test.txt.



You use the filter argument to limit the types of files displayed in the list box and to let the user know what those limits are. For example, to display the description Text Files (*.TXT) and only files with the extension .TXT, specify the following for filter:



"Text Files (*.TXT),*.TXT"



To specify more than one file extension in filter, enter multiple descriptions and extension combinations and separate them with commas. For example:



"PIF files, *.PIF, Batch files, *.BAT"



The dialog boxes presented by GetFileOpenName and GetFileSaveName are system dialog boxes. They provide standard system behavior, including control over the current directory. When users change the drive, directory, or folder in the dialog box, they change the current directory or folder. The newly selected directory or folder becomes the default for file operations until they exit the application, unless the optional initdir argument is passed.



The aFlag argument is used to pass one or more options that determine the appearance of the dialog box. For each option, the value of the flag is 2^(index -1), where index is an integer associated with each option as shown in the following table. You can pass multiple options by passing an aggregate flag, calculated by adding the values of the individual flags.



If you do not pass an aFlag, the Explorer-style open file dialog box is used. If you do pass a flag, the old-style dialog box is used by default. Some options do not apply when the Explorer-style dialog box is used. For those that do apply, add the option value for using the Explorer-style dialog box (2) to the value of the option if you want to display an Explorerstyle dialog box.



For example, passing the flag 32768 (2^15) to the GetFileSaveName function opens the oldstyle dialog box with the Read Only check box selected by default. Passing the flag 32770 opens the Explorer-style dialog box with the Read Only check box selected by default.



- Table 10.260: Option values for GetFileOpenName and GetFileSaveName




|Index|Constant name|Description|
|---|---|---|
|1|OFN_CREATEPR|OMPTIf the specified file does not exist, prompt for permission to create the file. If the user chooses to create the file, the dialog box closes; otherwise the dialog box remains open.|
|2|OFN_EXPLORER|Use an Explorer-style dialog box.|
|3|OFN_EXTENSION|TheDIFFERENTfile extension entered differed from the extensions specified in extension.|
|4|OFN_FILEMUSTE|OnlyXISTthe names of existing files can be entered.|
|5|OFN_HIDEREAD|ONLYHide the Read Only check box.|
|6|OFN_LONGNAM|ESUse long file names. Ignored for Explorer-style dialog boxes.|



|Index|Constant name|Description|
|---|---|---|
|7|OFN_NOCHANG|EDIRRestore the current directory to its original value if the user changed the directory while searching for files. This option has no effect for GetFileOpenName on Windows NT.|
|8|OFN_NODEREFE|ReturnRENCELINKSthe path and file name of the selected shortcut (.lnk file); otherwise the path and file name pointed to by the shortcut are returned.|
|9|OFN_NOLONGN|AMESUse short file names (8.3 format). Ignored for Explorer-style dialog boxes.|
|10|OFN_NONETWO|RKBUTTONHide the Network button. Ignored for Explorer-style dialog boxes.|
|11|OFN_NOREADON|TheLYRETURNfile returned is not read only and is not in a write-protected directory.|
|12|OFN_NOTESTFIL|DoECREATEnot create the file before the dialog box is closed. This option should be specified if the application saves the file on a network share where files can be created but not modified. No check is made for write protection, a full disk, an open drive door, or network protection.<br><br>A file cannot be reopened once it is closed.|
|13|OFN_NOVALIDA|InvalidTE characters are allowed in file names.|
|14|OFN_OVERWRIT|UsedEPROMPTin Save As dialog boxes. Generates a message box if the selected file already exists.|
|15|OFN_PATHMUST|OnlyEXISTvalid paths and file names can be entered.|
|16|OFN_READONLY|Select the Read Only check box when the Save dialog box is created.|



Opening a file Use the FileOpen function to open a selected file.
