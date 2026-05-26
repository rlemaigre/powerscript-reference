# 10.722 TriggerPBEvent Description

Triggers the specified user event in the child window contained in a PowerBuilder window ActiveX control.



Applies to Window ActiveX controls Syntax



activexcontrol.TriggerPBEvent ( name {, numarguments {, arguments } } )



- Table 10.896:




|Argument|Description|
|---|---|
|activexcontrol|Identifier for the instance of the PowerBuilder window ActiveX control. When used in HTML, this is the NAME attribute of the object element. When used in other environments, this references the control that contains the PowerBuilder window ActiveX.|
|name|String specifying the name of the user event. This argument is passed by reference.|
|numarguments (op|Integertional) specifying the number of elements in the arguments array. The default is zero.|
|arguments (option|al)Variant array containing event arguments. In PowerBuilder, Variant maps to the Any datatype. This argument is passed by reference. If you specify this argument, you must also specify numarguments. If you do not specify this argument and the function contains arguments, populate the argument list by calling the SetArgElement function once for each argument. JavaScript cannot use this argument.|



Return value Integer. Returns 1 if the function succeeds and -1 if an error occurs. Usage



Call this function to trigger a user event in the child window contained in a PowerBuilder window ActiveX control.



To check the PowerBuilder function's return value, call the GetLastReturn function.



JavaScript cannot use the arguments argument. Examples This JavaScript example calls the TriggerPBEvent function:



function triggerEvent(f) { var retcd; var rc; var numargs; var theEvent; var theArg; retcd = 0; numargs = 1; theArg = f.textToPB.value; PBRX1.SetArgElement(1, theArg); theEvent = "ue_args"; retcd = PBRX1.TriggerPBEvent(theEvent, numargs); rc = parseInt(PBRX1.GetLastReturn()); if (rc != 1) { alert("Error. Empty string."); } PBRX1.ResetArgElements();



}



This VBScript example calls the TriggerPBEvent function:



Sub TrigEvent_OnClick() Dim retcd Dim myForm Dim args(1) Dim rc Dim numargs Dim theEvent retcd = 0 numargs = 1 rc = 0 theEvent = "ue_args" Set myForm = Document.buttonForm args(0) = buttonForm.textToPB.value retcd = PBRX1.TriggerPBEvent(theEvent, & numargs, args) rc = PBRX1.GetLastReturn() if rc <> 1 then msgbox "Error. Empty string." end if



end sub



See also GetLastReturn SetArgElement InvokePBFunction



- 10.723 Trim Description Removes leading and trailing spaces from a string. Syntax Trim ( string {, removeallspaces } )


- Table 10.897:




|Argument|Description|
|---|---|
|string|The string you want returned with leading and trailing spaces deleted|
|removeallspaces|A boolean indicating that all types of spaces should be deleted|



Return value String. Returns a copy of string with all leading and trailing spaces deleted if it succeeds and the empty string ("") if an error occurs. If string is null, Trim returns null. Usage



Trim is useful for removing spaces that a user may have typed before or after newly entered data.



If you do not include the optional removeallspaces argument or its value is false, only the space character (U+0020) is removed from the string.



If the removeallspaces argument is set to true, all types of space characters are removed. See LeftTrim for a list of space characters.
