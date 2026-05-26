# Usage

The returned TypeDefinition object is a ClassDefinition, SimpleTypeDefinition, or EnumerationDefinition object. You can test the Category property to find out which one it is.



If you want to get information for a class, call FindClassDefinition instead. The arguments are the same and you are saved the step of checking that the returned object is a ClassDefinition object.



If you want to get information for a global function, call FindFunctionDefinition. Examples



This example gets a TypeDefinition object for the grGraphType enumerated datatype. It checks the category of the type definition and, since it is an enumeration, assigns it to an EnumerationDefinition object type and saves the name in a string:



TypeDefinition td_graphtype EnumerationDefinition ed_graphtype string enumname



td_graphtype = FindTypeDefinition("grgraphtype") IF td_graphtype.Category = EnumeratedType! THEN



ed_graphtype = td_graphtype enumname = ed_graphtype.Enumeration[1].Name



END IF



This example is a function that takes a definition name as an argument. The argument is typename. It finds the named TypeDefinition object, checks its category, and assigns it to the appropriate definition object:



TypeDefinition td_def SimpleTypeDefinition std_def EnumerationDefinition ed_def ClassDefinition cd_def



td_def = FindTypeDefinition(typename) CHOOSE CASE td_def.Category CASE SimpleType!



std_def = td_def CASE EnumeratedType!



ed_def = td_def CASE ClassOrStructureType!



cd_def = td_def END CHOOSE



This example searches the libraries in the array ls_libraries to find the class definition for w_genapp_frame:



TypeDefinition td_windef string ls_libraries[ ]



ls_libraries[1] = "c:\pwrs\bizapp\windows.pbl" ls_libraries[2] = "c:\pwrs\framewk\windows.pbl" ls_libraries[3] = "c:\pwrs\framewk\ancestor.pbl"



td_windef = FindTypeDefinition("w_genapp_frame", ls_libraries)



See also FindClassDefinition FindFunctionDefinition FindMatchingFunction



- 10.170 FromAnsi Description Converts a blob containing an ANSI character string to a Unicode string. Syntax FromAnsi ( blob )


- Table 10.208:




|Argument|Description|
|---|---|
|blob|A blob containing an ANSI character string you want to convert to a Unicode string|



Return value String. Returns a character string if it succeeds and an empty string if it fails. Usage



The FromAnsi function converts an ANSI character string contained in a blob to a Unicode character string.



FromAnsi has the same result as String(blob, EncodingANSI!) and will be obsolete in a future release of PowerBuilder.
