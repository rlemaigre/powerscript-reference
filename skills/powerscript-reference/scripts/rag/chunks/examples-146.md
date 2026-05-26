# Examples

This example shows the use of GetTransactionName to return information about a transaction to a client:



// Instance variables: // CORBACurrent corbcurr string ls_transacname



// Get an instance of the CORBACurrent object // and initialize it



... ls_transacname = corbcurr.GetTransactionName()



MessageBox("Transaction Name", ls_transacname)



See also BeginTransaction (obsolete) CommitDocking GetContextService GetStatus (obsolete) Init (obsolete) ResumeTransaction (obsolete) RollbackOnly (obsolete) RollbackTransaction (obsolete) SetTimeout (obsolete) SuspendTransaction (obsolete)



- 10.289 GetURL Description Returns HTML for the specified URL. Applies to Inet objects Syntax servicereference.GetURL ( urlname, data )


- Table 10.356:




|Argument|Description|
|---|---|
|servicereference|Reference to the Internet service instance|
|urlname|String specifying the URL whose source data is returned in data|
|data|InternetResult descendant containing an overridden InternetData function that handles the HTML source for urlname|



Return value Integer. Returns values as follows: 1 -- Success



- -1 -- General error
- -2 -- Invalid URL
- -4 -- Cannot connect to the Internet Usage Call this function to access HTML source for a URL.




Data references a standard class user object that descends from InternetResult and that has an overridden InternetData function. This overridden function then performs the processing you want with the returned HTML. Because the Internet returns data asynchronously, data must reference a variable that remains in scope after the function executes (such as a window-level instance variable).



For more information on the InternetResult standard class user object and the InternetData function, use the PowerBuilder Browser.



Timeout value for retrieving HTML source The GetURL function relies on wininet.dll to obtain the HTML source and returns



-1 when the retrieval time exceeds the DLL timeout value. When you install Internet Explorer 7 or later, the default timeout value for this DLL is 30 seconds. Although it is possible to change the timeout value by configuring a DWORD ReceiveTimeOut registry key under HKEY_CURRENT_USER\ SOFTWARE\Microsoft\Windows \CurrentVersion\Internet Settings, this is not recommended, since it can also affect the behavior of the Internet Explorer browser.



Examples This example calls the GetURL function. Iinet_base is an instance variable of type inet:



iir_msgbox = CREATE n_ir_msgbox iinet_base.GetURL(sle_url.text, iir_msgbox)



See also HyperLinkToURL InternetData



PostURL



- 10.290 GetValue Gets the value from a control.


- Table 10.357:



|To obtain|Use|
|---|---|
|The date and time in the Value property of the DatePicker control.|Syntax 1|
|The value of the key of the JSONPackage object|Syntax 2<br><br>|



- 10.290.1 Syntax 1: for DatePicker control Description Returns the date and time in the Value property of the control. Applies to DatePicker control Syntax




controlname.GetValue ( d, t ) controlname.GetValue ( dt )



- Table 10.358:




|Argument|Description|
|---|---|
|controlname|The name of the control for which you want to get the date and time|
|d|The date value in the Value property returned by reference|
|t|The time value in the Value property returned by reference|
|dt|The DateTime value in the Value property returned by reference|



Return value Integer. Returns 1 for success and one of the following negative values for failure:



- -1 -- Invalid date and/or time values
- -2 -- Other error Usage




The GetValue function can return the date and time parts of the Value property in separate date and time variables or a single DateTime variable.
