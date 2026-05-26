# Examples

This example calls the GetShortName function. ci is an instance variable of type ContextInformation:



String ls_name this.GetContextService("ContextInformation", ci) ci.GetShortName(ls_name) IF ls_name <> "PBRun" THEN



cb_close.visible = FALSE END IF



See also GetCompanyName GetContextService GetFixesVersion GetHostObject GetMajorVersion GetMinorVersion GetName GetVersionName
