# See also

Open Read Seek Write



- 10.372 LibraryCreate Description Creates an empty PowerBuilder library with optional comments. Syntax LibraryCreate ( libraryname {, comments } )


- Table 10.452:




|Argument|Description|
|---|---|
|libraryname|A string whose value is the name of the PowerBuilder library you want to create. If you want to create the library somewhere other than the current directory, enter the full path name.|
|comments (option|al)A string whose value is the comments you want to associate with the library.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, LibraryCreate returns null. Usage



LibraryCreate creates a PowerBuilder library file (PBL) in the current directory, unless you specify a directory path as part of libraryname. If you do not specify an extension, LibraryCreate adds the extension .PBL.
