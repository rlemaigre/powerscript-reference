# Examples

This example calls the GetName function. ci is an instance variable of type ContextInformation:



String ls_name this.GetContextService("ContextInformation", ci) ci.GetName(ls_name) IF ls_name <> "PowerBuilder Runtime" THEN



cb_close.visible = FALSE END IF



See also GetCompanyName GetContextService GetFixesVersion GetHostObject GetMajorVersion GetMinorVersion GetShortName GetVersionName
