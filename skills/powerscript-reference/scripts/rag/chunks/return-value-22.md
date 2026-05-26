# Return value

ClassDefinition. Returns an object reference with information about the definition of classname. If any arguments are null, FindClassDefinition returns null.



Usage There are two ways to get a ClassDefinition object containing class definition information:



- • For an instantiated object in your application, use its ClassDefinition property
- • For an object stored in a PBL, call FindClassDefinition Examples




This example searches the libraries for the running application to find the class definition for w_genapp_frame:



ClassDefinition cd_windef cd_windef = FindClassDefinition("w_genapp_frame")



This example searches the libraries in the array ls_libraries to find the class definition for w_genapp_frame:



ClassDefinition cd_windef string ls_libraries[ ]



- ls_libraries[1] = "c:\pwrs\bizapp\windows.pbl"
- ls_libraries[2] = "c:\pwrs\framewk\windows.pbl"
- ls_libraries[3] = "c:\pwrs\framewk\ancestor.pbl"




cd_windef = FindClassDefinition( "w_genapp_frame", ls_libraries)



See also FindFunctionDefinition FindMatchingFunction FindTypeDefinition
