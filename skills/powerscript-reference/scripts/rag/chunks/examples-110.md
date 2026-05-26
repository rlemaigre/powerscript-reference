# Examples

This example calls the GetContextService function and displays the class of the service in a single line edit box:



Integer li_return ContextKeyword lcx_key



li_return = this.GetContextService & ("Keyword", lcx_key) sle_classname.Text = ClassName(lcx_key)



...



See also BeginTransaction (obsolete) GetCompanyName GetContextKeywords GetHostObject



GetMajorVersion GetMinorVersion GetName GetShortName GetURL GetVersionName HyperLinkToURL Init (obsolete) PostURL
