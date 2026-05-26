# Usage

If you call LibraryDirectoryEx with a PBD file as the first argument, no comments are displayed because they are not included in PBD files.



You can display the result of LibraryDirectoryEx in a DataWindow control by passing the returned string to the ImportString function for that DataWindow. The DataWindow should contain four string columns. The columns must be wide enough to fit the data in the input string. If not, PowerBuilder reports validation errors.



If you do not need to return the object's type, you can use LibraryDirectory. For an example of parsing tab-delimited data, see the Pos or LastPos function. Examples



This code imports the string returned by LibraryDirectoryEx to the DataWindow dw_list and then redraws the dw_list. The DataWindow was defined with an external source and four string columns:



String ls_entries



ls_entries = LibraryDirectoryEx( &



"c:\pb\dwTemp.pbl", DirUserObject!) dw_list.SetRedraw(FALSE) dw_list.Reset( ) dw_list.ImportString(ls_Entries) dw_list.SetRedraw(TRUE)



See also ImportString LibraryCreate LibraryDelete LibraryDirectory LibraryExport LibraryImport



- 10.376 LibraryExport Description Exports an object from a library. The object is exported as syntax. Syntax LibraryExport ( libraryname, objectname, objecttype )


- Table 10.456:




|Argument|Description|
|---|---|
|libraryname|A string whose value is the name of the PowerBuilder library from which you want to export an object. If you do not specify a full path, LibraryExport uses the system's standard file search order to find the file.|
|objectname|A string whose value is the name of the object you want to export|
|objecttype|A value of the LibExportType enumerated datatype identifying the type of objects you want to export:<br><br>• ExportApplication! -- Application object<br>• ExportDataWindow! -- DataWindow object<br>• ExportFunction! -- Function object<br>• ExportMenu! -- Menu object<br>• ExportPipeline! -- Pipeline objects<br>• ExportProject! -- Project objects<br>• ExportQuery! -- Query objects<br>• ExportStructure! -- Structure object<br>• ExportUserObject! -- User objects<br>|



|Argument|Description|
|---|---|
| |• ExportWindow! -- Window object|



Return value String.



Returns the syntax of the object if it succeeds. The syntax is the same as the syntax returned when you export an object in the Library painter except that LibraryExport does not include an export header. Returns the empty string ("") if an error occurs. If any argument's value is null, LibraryExport returns null.
