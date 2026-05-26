# Syntax

objectref.Activate ( activationtype )



- Table 10.4:




|Argument|Description|
|---|---|
|objectref|The name of the OLE control or the fully qualified name of a OLE DWObject within a DataWindow control that contains the object you want to activate.<br><br>The fully qualified name for a DWObject has this syntax:<br><br>dwcontrol.Object.dwobjectname|
|activationtype (optional)|A value of the enumerated datatype omActivateType specifying where the user will work with the OLE object. Values are:<br><br>• InPlace! -- (Default) The object is activated within the control. The subset of menus provided by the server application are merged with the PowerBuilder application's menus.<br>• OffSite! -- The object is activated in the server application, which gives the user access to more of the server application's functionality.<br><br><br>For the OLE control, activationtype is required.|



Return value Integer. Returns 0 if it succeeds and one of the following negative values if an error occurs:



- -1 -- Container is empty
- -2 -- Invalid verb for object
- -3 -- Verb not implemented by object
- -4 -- No verbs supported by object
- -5 -- Object cannot execute verb now
- -9 -- Other error If any argument's value is null, Activate returns null. Examples This example activates the object in ole_1 in the server application:




integer result result = ole_1.Activate(OffSite!)



This example activates the OLE DWObject ole_graph in the DataWindow control dw_1 in the Microsoft Graph server application:



integer result result = dw_1.Object.ole_graph.Activate(OffSite!)



See also DoVerb OLEActivate method for DataWindows in Section 9.110, “OLEActivate” in DataWindow



Reference.



SelectObject
