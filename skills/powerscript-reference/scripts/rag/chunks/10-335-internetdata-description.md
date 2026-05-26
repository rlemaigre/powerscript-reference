# 10.335 InternetData Description

Processes the HTML data returned by a GetURL or PostURL function. The Context object calls this function; you do not call this function explicitly. Instead, you override this function in a customized descendant of the InternetResult standard class user object.



Applies to InternetResult objects Syntax



servicereference.InternetData ( data )



- Table 10.417:




|Argument|Description|
|---|---|
|servicereference|Reference to the Internet service instance|
|data|Blob containing the complete data requested by a GetURL or PostURL function|



Return value Integer. Returns 1 if the function succeeds and -1 if an error occurs. Usage



Override this function in a user object that is a descendant of InternetResult. The overridden function must contain one argument of type blob, which is passed by value. It should return an integer, processing data as appropriate for the situation.
