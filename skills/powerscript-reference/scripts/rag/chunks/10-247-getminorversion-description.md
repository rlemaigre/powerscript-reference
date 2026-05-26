# 10.247 GetMinorVersion Description

Returns the minor version for the current PowerBuilder execution context. For example, at maintenance level 11.5.1 the minor version is 5.



Applies to ContextInformation objects Syntax



servicereference.GetMinorVersion ( minorversion )



- Table 10.304:




|Argument|Description|
|---|---|
|servicereference|Reference to the ContextInformation service instance.|
|minorversion|Integer into which the function places the minor version. This argument is passed by reference.|



Return value Integer. Returns 1 if the function succeeds and -1 if an error occurs. Usage Call this function to determine the current minor version. Examples This example calls the GetMinorVersion function:



String ls_name Constant String ls_currver = "8.0.3" Integer li_majver, li_minver, li_fixver ContextInformation ci



this.GetContextService("ContextInformation", ci)



ci.GetMajorVersion(li_majver) ci.GetMinorVersion(li_minver) ci.GetFixesVersion(li_fixver) IF li_majver <> 8 THEN



MessageBox("Error", &



"Must be at Version " + ls_currver) ELSEIF li_minver <> 0 THEN



MessageBox("Error", &



"Must be at Version " + ls_currver) ELSEIF li_fixver <> 3 THEN



MessageBox("Error", &



"Must be at Version " + ls_currver) END IF



See also GetCompanyName GetFixesVersion GetHostObject GetMajorVersion GetName GetShortName GetVersionName



- 10.248 GetName Description Gets the name for the current execution context. Applies to ContextInformation objects Syntax servicereference.GetName ( name )


- Table 10.305:




|Argument|Description|
|---|---|
|servicereference|Reference to the ContextInformation service instance.|
|name|String into which the function places the name. This argument is passed by reference.|



Return value Integer. Returns 1 if the function succeeds and -1 if an error occurs. Usage Call this function to determine the current execution environment.



The window plug-in and window ActiveX contexts are obsolete in the current version of PowerBuilder. For PowerBuilder 2017 and later applications, the only value passed for the name argument is "PowerBuilder Runtime".
