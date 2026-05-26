# 10.299 GetVersionName Description

Gets complete version information for the current PowerBuilder execution context. A complete version includes a major version, a minor version, and a fix level (such as 8.0.3).



Applies to ContextInformation objects Syntax



servicereference.GetVersionName ( name )



- Table 10.368:




|Argument|Description|
|---|---|
|servicereference|Reference to the ContextInformation service instance.|
|name|String into which the function places the version name. This argument is passed by reference.|



Return value Integer. Returns 1 if the function succeeds and -1 if an error occurs. Usage Call this function to determine the maintenance level of the current context. Examples



This example calls the GetVersionName function. ci is an instance variable of type ContextInformation:



String ls_name String ls_version



Constant String ls_currver = "8.0.3" GetContextService("ContextInformation", ci) ci.GetVersionName(ls_version) IF ls_version <> ls_currver THEN



MessageBox("Error", &



"Must be at Version " + ls_currver) END IF



See also GetCompanyName GetFixesVersion GetHostObject GetMajorVersion GetMinorVersion GetName GetShortName
