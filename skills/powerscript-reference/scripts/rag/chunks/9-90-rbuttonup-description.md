# 9.90 RButtonUp Description

Occurs when the right mouse button is released. Event ID



- Table 9.202:



|Event ID|Objects|
|---|---|
|pbm_renrbuttonup|RichTextEdit|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing 1 -- Prevent processing See also RButtonDown



- 9.91 RecognitionResult Description Occurs when an InkEdit control gets results from a call to the RecognizeText function. Event ID


- Table 9.203:




|Event ID|Objects|
|---|---|
|pbm_inkerecognition|InkEdit|



Arguments None Return Values None Examples



This code in the RecognitionResult event allows the application to wait a few seconds while the Text property of the ie_id InkEdit control is updated, then writes the recognized text to the string variable ls_inktext:



Sleep(3) ls_inktext = ie_id.Text



See also GetFocus Stroke



- 9.92 RemoteExec Description Occurs when a DDE client application has sent a command. Event ID



Table 9.204:



|Event ID|Objects|
|---|---|
|pbm_ddeexecute|Window|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing See also RemoteRequest RemoteSend



- 9.93 RemoteHotLinkStart Description Occurs when a DDE client application wants to start a hot link. Event ID


- Table 9.205:




|Event ID|Objects|
|---|---|
|pbm_ddeadvise|Window|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Examples



When both the DDE client and server are PowerBuilder applications, this example in a script in the client application triggers the RemoteHotLinkStart event in the server application window:



StartHotLink("mysle","pb_dde_server","mytest")



In the RemoteHotLinkStart event in the server application, set a boolean instance variable indicating that a hot link has been established:



ib_hotlink = TRUE



See also HotLinkAlarm RemoteHotLinkStop SetDataDDE StartServerDDE StopServerDDE



- 9.94 RemoteHotLinkStop Description Occurs when a DDE client application wants to end a hot link. Event ID


- Table 9.206:




|Event ID|Objects|
|---|---|
|pbm_ddeunadvise|Window|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing Examples



When both the DDE client and server are PowerBuilder applications, this example in a script in the client application triggers the RemoteHotLinkStop event in the server application window:



StopHotLink("mysle","pb_dde_server","mytest")



In the RemoteHotLinkStart event in the server application, set a boolean instance variable indicating that a hot link no longer exists:



ib_hotlink = FALSE



See also HotLinkAlarm RemoteHotLinkStart



SetDataDDE StartServerDDE StopServerDDE



- 9.95 RemoteRequest Description Occurs when a DDE client application requests data. Event ID



Table 9.207:



|Event ID|Objects|
|---|---|
|pbm_dderequest|Window|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing See also



RemoteExec RemoteSend



- 9.96 RemoteSend Description Occurs when a DDE client application has sent data. Event ID


- Table 9.208:




|Event ID|Objects|
|---|---|
|pbm_ddepoke|Window|



Arguments None Return Values Long. Return code choices (specify in a RETURN statement): 0 -- Continue processing



See also RemoteExec RemoteRequest



- 9.97 Rename Description Occurs when the server application notifies the control that the object has been renamed. Event ID



Table 9.209:



|Event ID|Objects|
|---|---|
|pbm_omnrename|OLE|



Arguments None Return Values Long. Return code: Ignored Usage



If you want to retrieve the ObjectData blob value of an OLE control during the processing of this event, you must post a user event back to the control or you will generate a runtime error.



See also DataChange PropertyRequestEdit PropertyChanged ViewChange



- 9.98 Resize Description




Occurs when the user or a script opens or resizes the client area of a window or DataWindow control.
