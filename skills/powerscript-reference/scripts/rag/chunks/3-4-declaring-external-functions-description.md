# 3.4 Declaring external functions Description

External functions are functions written in languages other than PowerScript and stored in dynamic link libraries. On Windows, dynamic libraries have the extension DLL. If you deploy a component written in PowerBuilder to a UNIX server, the dynamic libraries it calls have the extension .so, .sl, or .a, depending on the UNIX operating system. You can use external functions that are written in any language that supports dynamic libraries.



Before you can use an external function in a script, you must declare it as one of two types:



- • Global external functions These are available anywhere in the application.
- • Local external functions




These are defined for a particular type of window, menu, user object, or user-defined function. These functions are part of the object's definition and can always be used in scripts for the object itself. You can also choose to make these functions accessible to other scripts.



To understand how to declare and call an external function, see the documentation from the developer of the external function library.



Syntax External function syntax Use the following syntax to declare an external function:



{ access } FUNCTION returndatatype name ( { { REF } datatype1 arg1,



..., { REF } datatypen argn } ) LIBRARY "libname" ALIAS FOR "extname{;ansi}"



External subroutine syntax To declare external subroutines (which are the same as external functions except that they do not return a value), use this syntax:



{ access } SUBROUTINE name ( { { REF } datatype1 arg1, ...,



{ REF } datatypen argn } ) LIBRARY "libname" ALIAS FOR "extname{;ansi}"



The following table describes the parameters used to declare external functions and subroutines:



- Table 3.11: External function or subroutine declaration parameters




|Parameter|Description|
|---|---|
|access (optional)|(Local external functions only) Public, Protected, or Private specifies the access level of a local external function. The default is Public.<br><br>For more information, see the section about specifying access of local functions in Usage.<br><br>|
|FUNCTION or SUBROUTINE|A keyword specifying the type of call, which determines the way return values are handled. If there is a return value, declare it as a FUNCTION; if it returns nothing or returns VOID, specify SUBROUTINE.|
|returndatatype|The datatype of the value returned by the function.|
|name|The name of a function or subroutine that resides in a DLL. Function names cannot contain special characters, such as the @ character, because they cause a compiler error. Use the ALIAS FOR clause described later in this table if the function name in the DLL contains special characters.|
|REF|A keyword that specifies that you are passing by reference the argument that follows REF. The function can store a value in arg that will be accessible to the rest of the PowerBuilder script.|
|datatype arg|The datatype and name of the arguments for the function or subroutine. The list must match the definition of the function in the DLL. Each datatype arg pair can be preceded by REF.<br><br>For more information on passing arguments, see Section 23.1.3, “Passing arguments” in Application Techniques.|
|LIBRARY "libna|me"A keyword followed by a string containing the name of the dynamic library in which the function or subroutine is stored. libname is a dynamic link library, which is a file that usually has the extension DLL on Windows.|
|ALIAS FOR "extname" (|optional) Keywords followed by a string giving the name of the function as defined in the dynamic library. If the name in the dynamic library is not the name you want to use in your script, or if the name in the database is not a legal PowerScript name, you must specify ALIAS FOR "extname" to establish the association between the PowerScript name and the external name.|
|;ansi|Required if the function passes a string as an argument or returns a string that uses ANSI encoding. Even if you use the default name for an ANSI function, you must always use the ALIAS keyword if you want to specify that the string uses ANSI encoding, because you must qualify the ALIAS with the ansi keyword.|



Usage Specifying access of local functions



When declaring a local external function, you can specify its access level -- which scripts have access to the function.



The following table describes where local external functions can be used when they are declared with a given access level:



- Table 3.12: Access levels for local external functions




|Access level|Where you can use the local external function|
|---|---|
|Public|Any script in the application.|
|Private|Scripts for events in the object for which the function is declared. You cannot use the function in descendants of the object.|
|Protected|Scripts for the object for which the function is declared and its descendants.|



Use of the access keyword with local external functions works the same as the accessright keywords for instance variables.
