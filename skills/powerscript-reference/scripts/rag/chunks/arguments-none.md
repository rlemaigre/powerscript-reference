# Arguments None

The Clicked event occurs when the user releases the mouse button. If another control had focus, then a GetFocus and a Clicked event occur for the control the user clicks. Examples This code in an OLE control's Clicked event activates the object in the control:



integer li_success li_success = This.Activate(InPlace!)



See also GetFocus RButtonDown



- 9.11 Close The Close event has different arguments for different objects:


- Table 9.35:



|Object|See|
|---|---|
|Application|Syntax 1|
|OLE control|Syntax 2|
|Window|Syntax 3<br><br>|



9.11.1 Syntax 1: For the application object Description Occurs when the user closes the application. Event ID



- Table 9.36:




|Event ID|Objects|
|---|---|
|None|Application|



Arguments None Return Values None (do not use a RETURN statement)
