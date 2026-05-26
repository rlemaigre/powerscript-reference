# Return value

- Integer. Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -1 -- No data or the contents of the clipboard is not linkable
- -9 -- Other error If ole2control is null, PasteLink returns null. Usage




When you copy data to the clipboard from an application that supports OLE (the server application), you can paste the object into PowerBuilder's OLE control with a link to the original data. Object information about the source of the data is only available if the server application is running. You do not need to worry about running the server application if you are working with an OLE object that PowerBuilder knows about, such as an object in a PowerBuilder library or an object that is part of a control's definition in a window. For these objects, PowerBuilder runs the server application in the background to enable the link.



PasteLink fails, however, if the user switches to a server application, copies the data, quits the application, and then tries to paste and link the object in their PowerBuilder application.



If the clipboard contains an OLE object and the object's server application is running, then the following example pastes the object in the control ole_1 and sets li_result to 0:



integer li_result li_result = ole_1.PasteLink()



See also LinkTo Paste PasteSpecial
