# Return Values Long.

Return code choices (specify in a RETURN statement): 0 -- Continue processing Examples



This example toggles between displaying and hiding TreeView lines when the user rightdouble-clicks on the control:



IF This.HasLines = FALSE THEN This.HasLines = TRUE This.LinesAtRoot = TRUE



ELSE This.HasLines = FALSE This.LinesAtRoot = FALSE



END IF



See also DoubleClicked RightClicked



- 9.101 Save Description Occurs when the server application notifies the control that the data has been saved. Event ID


- Table 9.222:




|Event ID|Objects|
|---|---|
|pbm_omnsave|OLE|



Arguments None Return Values Long. Return code: Ignored Usage



If you want to retrieve the ObjectData blob value of an OLE control during the processing of this event, you must post a user event back to the control or you generate a runtime error.
