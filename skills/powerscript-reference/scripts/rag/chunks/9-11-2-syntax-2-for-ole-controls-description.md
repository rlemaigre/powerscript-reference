# 9.11.2 Syntax 2: For OLE controls Description

Occurs when the object in an OLE control has been activated offsite (the OLE server displays the object in the server's window) and that server is closed.



Event ID



Table 9.37:



|Event ID|Objects|
|---|---|
|pbm_omnclose|OLE|



Arguments None Return Values Long. Return code: Ignored Usage



If the user closed the OLE server, the user's choices might cause the OLE object in the control to be updated, triggering the Save or DataChange events.



If you want to retrieve the ObjectData blob value of an OLE control during the processing of this event, you must post a user event back to the control or you will generate a runtime error.



See also DataChange Save
