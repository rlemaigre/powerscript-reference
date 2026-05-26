# Syntax

LibraryDelete ( libraryname {, objectname, objecttype } )



- Table 10.453:




|Argument|Description|
|---|---|
|libraryname|A string whose value is the name of the PowerBuilder library you want to delete or from which you want to delete a DataWindow object. If you do not specify a full path, LibraryDelete uses the system's standard file search order to find the file.|
|objectname (option|Aal)string whose value is the name of the DataWindow object you want to delete from libraryname.|
|objecttype (option|al)A value of the LibImportType enumerated datatype identifying the type of object you want to delete. The only supported object type is ImportDataWindow!.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, LibraryDelete returns null. Usage



You can delete DataWindow objects from a library in a script with the LibraryDelete function. To delete other types of objects, use the Library painter.
