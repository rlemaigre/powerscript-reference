# Examples

For MLSync objects, you can allow a user to edit the command line arguments for a synchronization call as follows:



long rc string cmd cmd = myMLSync.GetCommandString() // Edit cmd however you wish



... rc = myMLSync.Synchronize(cmd)



See also GetSyncRegistryProperties SetParm SetSyncRegistryProperties Synchronize



- 10.193 GetCompanyName Description Returns the company name for the current execution context. Applies to ContextInformation objects Syntax




servicereference.GetCompanyName ( name )



- Table 10.230:




|Argument|Description|
|---|---|
|servicereference|Reference to the ContextInformation service instance.|
|name|String into which the function places the company name. This argument is passed by reference.|



Return value Integer. Returns 1 if the function succeeds and -1 if an error occurs. Usage Call this function to determine the company name (such as Appeon). Examples This example calls the GetCompanyName function:



String ls_company Integer li_return ContextInformation ci ci = create ContextInformation //or GetContextService("ContextInformation", ci) li_return = ci.GetCompanyName(ls_company) IF li_return = 1 THEN



sle_co_name.text = ls_company END IF



See also GetContextService GetFixesVersion GetHostObject GetMajorVersion GetMinorVersion GetName GetShortName GetVersionName



- 10.194 GetContextKeywords Description Retrieves one or more values associated with a specified keyword. Applies to ContextKeyword objects Syntax servicereference.GetContextKeywords ( name, values )
