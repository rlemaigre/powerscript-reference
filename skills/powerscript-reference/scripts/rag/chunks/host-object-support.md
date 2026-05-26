# Host object support

Currently, host object support is implemented only in the window ActiveX when running under Internet Explorer. In this situation GetHostObject returns a reference to the IWebBrowserApp ActiveX automation server object.



Applies to ContextInformation objects Syntax



servicereference.GetHostObject ( hostobject )



- Table 10.274:




|Argument|Description|
|---|---|
|servicereference|Reference to the Context Information service instance|
|hostobject|PowerObject into which the function places a reference to the ActiveX automation server object|



Return value Integer. Returns 1 if the function succeeds and -1 if an error occurs. Usage



Call this function to obtain a reference to the context object model. If running the window ActiveX under Internet Explorer 3.0 or greater and hostobject is an uninstantiated OleObject variable, the function returns a reference to an ActiveX automation server object, which you can use to control the hosting browser. If host object support is not available, the function returns -1 and hostobject is null.
