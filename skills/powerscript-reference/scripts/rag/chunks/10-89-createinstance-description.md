# 10.89 CreateInstance Description

Creates an instance of a component running on the COM+ server. This function is called from within a component instance running on COM+.



Applies to TransactionServer objects Syntax



transactionserver.CreateInstance (objectvariable {, classname } )



- Table 10.110:




|Argument|Description|
|---|---|
|transactionserver|Reference to the TransactionServer service instance.|
|objectvariable|A global, instance, or local variable whose datatype is the same class as the object being created or an ancestor of that class.|
|classname (optiona|Al) string whose value is the name of the class datatype to be created. For COM+ components, you can optionally prepend a ProgID followed by a period to the class name (for example, "PowerBuilder.HTMLDataWindow".|



Return value Long.



- Returns 0 if it succeeds and one of the following values if an error occurs: 50 -- Distributed service error


- 52 -- Distributed communications error
- 53 -- Requested server not active
- 54 -- Server not accepting requests
- 55 -- Request terminated abnormally
- 56 -- Response to request incomplete


- 57 -- Not connected 62 -- Server busy Usage




The CreateInstance function on the TransactionServer context object allows you to access other COM+ components running on the current server. The created instance inherits all the transaction and security attributes of the current object.



The CreateInstance function on the TransactionServer context object uses the same user and password information that applies to the component from which it is called.



Before you can use the transaction context service, you need to declare a variable of type TransactionServer and call the GetContextService function to create an instance of the service.



Examples This example shows the syntax for creating an instance of a COM component:



Integer rc OleObject lole TransactionServer lts



lole = create OleObjectrc = this.GetContextService("TransactionServer", lts) IF rc <> 1 THEN



return "Error from GetContextService " + String (rc) END IF // PBCOM is the ProgID, n_genapp is the class namerc = lts.CreateInstance(lole,



"PBCOM.n_genapp") IF rc <> 0 THEN



return "Error from CreateInstance " + String (rc) END IFiole.my_func ()



See also EnableCommit IsInTransaction (obsolete) IsTransactionAborted (obsolete) Lookup (obsolete) SetAbort SetComplete Which



- 10.90 CreateJsonArray Description Creates the array of JsonArrayItem type as root item to initialize instance. Applies to JSONGenerator objects Syntax




objectname.CreateJsonArray ( )



- Table 10.111:



|Argument|Description|
|---|---|
|objectname|Reference to the JSONGenerator object instance.|



Return value Long. Returns the root item handle if it succeeds and -1 if an error occurs. Examples This example create the JSON root item of array type:



JsonGenerator lnv_JsonGenerator Long ll_RootArray lnv_JsonGenerator = Create JsonGenerator



ll_RootArray = lnv_JsonGenerator.CreateJsonArray() if ll_RootArray <> -1 then



... end if



See also CreateJsonObject



10.91 CreateJsonObject



Description Creates the object of JsonObjectItem type as root item to initialize instance. Applies to JSONGenerator objects Syntax



objectname.CreateJsonObject ( )



- Table 10.112:




|Argument|Description|
|---|---|
|objectname|Reference to the JSONGenerator object instance.|



Return value Long. Returns the root item handle if it succeeds and -1 if an error occurs. Examples This example creates the JSON root item of object type:



JsonGenerator lnv_JsonGenerator Long ll_RootObject



lnv_JsonGenerator = Create JsonGenerator ll_RootObject = lnv_JsonGenerator.CreateJsonObject() if ll_RootObject <> -1 then



... end if



See also CreateJsonArray



- 10.92 CreatePage Description Creates a tab page if it has not already been created. Applies to User objects used as tab pages Syntax userobject.CreatePage ( )


- Table 10.113:




|Argument|Description|
|---|---|
|userobject|The name of the tab page you want to create|



Return value Integer. Returns one of the following values:1 if the page is successfully created and -1 if the page was already created or if it is not a tab page. 1 -- The tab page was successfully created 0 -- The tab page has already been created -1 -- The user object is not a tab page Usage



A window will open more quickly if the creation of graphical representations is delayed for tab pages with many controls. However, scripts cannot refer to a control on a tab page until the control's Constructor event has run and a graphical representation of the control has been created. When the CreateOnDemand property of the Tab control is selected, scripts cannot reference controls on tab pages that the user has not viewed. CreatePage allows you to create a tab page if it has not already been created.



Examples This example tests whether tabpage_2 has been created and, if not, creates it:



IF tab_1.CreateOnDemand = True THEN IF tab_1.tabpage_2.PageCreated() = False THEN



tab_1.tabpage_2.CreatePage() END IF



END IF



See also PageCreated



- 10.93 Cut Description




Deletes selected text or an OLE object from the specified control and stores it on the clipboard, replacing the clipboard contents with the deleted text or object.
