# Table 9.264:

|Event ID|Objects|
|---|---|
|pbm_dtpvaluechanged|DatePicker|



- Table 9.265:



|Argument|Description|
|---|---|
|flag|Unsigned long that defaults to 0 and can be ignored|
|dtm|The new DateTime value|



Return Values Long. Return code: Ignored. Usage



When a user selects a date from the drop-down calendar or changes the date using the updown control, the DateTime value selected is passed to the ValueChanged event.



Examples This code in the ValueChanged event script displays a confirmation message to the user:



MessageBox("Start date", "You selected " + & String(dtm, "mmm dd, yyyy") + ".~r~n" + & "If this is incorrect, please select again.")



- 9.121 ViewChange Description




Occurs when the server application notifies the control that the view shown to the user has changed.



Event ID



- Table 9.266:




|Event ID|Objects|
|---|---|
|pbm_omnviewchange|OLE|



Arguments None Return Values Long. Return code: Ignored Usage



If you want to retrieve the ObjectData blob value of an OLE control during the processing of this event, you must post a user event back to the control or you will generate a runtime error.



See also DataChange PropertyRequestEdit



PropertyChanged Rename
