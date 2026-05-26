# Syntax

objectref.DoVerb ( verb )



- Table 10.158:




|Argument|Description|
|---|---|
|objectref|The name of the OLE control or the fully qualified name of a OLE DWObject within a DataWindow control for which you want to execute a verb. The fully qualified name for a DWObject has this syntax:<br><br>dwcontrol.Object.dwobjectname|
|verb|An integer identifying a verb known to the OLE server application. Verbs are operations that the server can perform on the OLE object. Check the documentation for the server's OLE implementation to find out what verbs it supports.|



Return value Integer.



- Returns 0 if it succeeds and one of the following values if an error occurs:


- -1 -- Container is empty


- -2 -- Invalid verb for object
- -3 -- Verb not implemented by object
- -4 -- No verbs supported by object
- -5 -- Object cannot execute verb now
- -9 -- Other error If any argument's value is null, DoVerb returns null. Examples This example executes verb 7 for the object in the OLE control ole_1:




integer result result = ole_1.DoVerb(7)



This example executes verb 7 for the object in the OLE DWObject ole_graph:



integer result result = dw_1.Object.ole_graph.DoVerb(7)



See also Activate OLEActivate method for DataWindows in Section 9.110, “OLEActivate” in DataWindow



Reference. SelectObject



- 10.130 Drag Description Starts or ends the dragging of a control. Applies to All controls except drawing objects (Lines, Ovals, Rectangles, and Rounded Rectangles) Syntax control.Drag ( dragmode )


- Table 10.159:




|Argument|Description|
|---|---|
|control|The name of the control you want to drag or stop dragging|
|dragmode|A value of the DragMode datatype indicating the action you want to take on control:<br><br>• Begin! -- Put control in drag mode<br>• Cancel! -- Stop dragging control but do not cause a DragDrop event<br>• End! -- Stop dragging control and if control is over a target object, cause a DragDrop event<br>|



Return value Integer. For all controls except OLE controls, returns 1 if it succeeds and -1 if you try to nest drag events or try to cancel the drag when control is not in drag mode. The return value is usually not used. For OLE controls, returns the following values: 2 -- Object was moved 1 -- Drag was canceled 0 -- Drag succeeded



- -1 -- Control is empty
- -9 -- Unspecified error If any argument's value is null, Drag returns null. Usage




To see the list of draggable controls, open the Browser. All the objects in the hierarchy below dragobject are draggable.



If you set the control's DragAuto property to true, PowerBuilder automatically puts the control in drag mode when the user clicks it. The user must hold the mouse button down to drag.



When you use Drag(Begin!) in a control's Clicked event to manually put the control in drag mode, the user can drag the control by moving the mouse without holding down the mouse button. Clicking the left mouse button ends the drag. CANCEL! and END! are required only if you want to end the drag without requiring the user to click the left mouse button.
