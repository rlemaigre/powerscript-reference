# 10.594 SetAutomationPointer Description

Sets the automation pointer of an OLEObject object to the value of the automation pointer of another object.



Applies to OLEObject Syntax



oleobject.SetAutomationPointer ( object )



- Table 10.734:




|Argument|Description|
|---|---|
|oleobject|The name of an OLEObject variable whose automation pointer you want to set. You cannot specify an OLEObject that is the Object property of an OLE control.|
|object|The name of an OLEObject variable that contains the automation pointer you want to use to set the pointer value in oleobject.|



Return value Integer.



- Returns 0 if it succeeds and -1 if the object does not contain a valid OLE automation pointer. Usage




SetAutomationPointer assigns the underlying automation pointer used by OLE into a descendant of OLEObject.
