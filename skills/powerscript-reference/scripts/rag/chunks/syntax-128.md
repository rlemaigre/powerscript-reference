# Syntax

SetLibraryList ( filelist )



- Table 10.768:




|Argument|Description|
|---|---|
|filelist|A comma-separated list of file names. Specify the full file name with its extension. If you do not specify a path, PowerBuilder uses the system's search path to find the file.|



Return value Integer. Returns 1 if it succeeds. If an error occurs, it returns:



- -1 -- The application is being run from PowerBuilder, rather than from a standalone executable.
- -2 -- A currently instantiated object is in a library that is not on the new list. If any argument's value is null, SetLibraryList returns null. Usage




When your application needs to load an object, PowerBuilder searches for the object first in the executable file and then in the dynamic libraries specified for the application.



You can specify a different list of library files from those specified in the executable with SetLibraryList.



Calling SetLibraryList replaces the list of library files specified in the executable with a new list of files. For example, you might use SetLibraryList to configure the library list for an application containing many subsystems. You should always use GetLibraryList to return the current library search path and then append any files you want to add to this list. You can then pass the complete list in the filelist argument.



PowerBuilder cannot check whether the libraries you specify are appropriate for the application. It is up to you to make sure the libraries contain the objects that the application needs.



The executable file is always first in the library search path. If you include it in filelist, it is ignored.



If you are running your application in the PowerBuilder development environment, this function has no effect.
