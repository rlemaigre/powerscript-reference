# Syntax

LibraryDirectory ( libraryname, objecttype )



- Table 10.454:




|Argument|Description|
|---|---|
|libraryname|A string whose value is the name of the PowerBuilder library for which you want the contents. If you do not specify a full path, LibraryDirectory uses the operating system's standard file search order to find the file.|
|objecttype|A value of the LibDirType enumerated datatype identifying the type of objects you want listed:<br><br>• DirAll! -- All objects<br>• DirApplication! -- Application objects<br>• DirDataWindow! -- DataWindow objects<br>• DirFunction! -- Function objects<br>• DirMenu! -- Menu objects<br>• DirPipeline! -- Pipeline objects<br>• DirProject! -- Project objects<br>• DirQuery! -- Query objects<br>• DirStructure! -- Structure objects<br>• DirUserObject! -- User objects<br>• DirWindow! -- Window objects<br>|



Return value String. LibraryDirectory returns a tab-separated list with one object per line. The format of the list is:



name ~t date/time modified ~t comments ~n



Returns the empty string ("") if an error occurs. If any argument's value is null, LibraryDirectory returns null.
