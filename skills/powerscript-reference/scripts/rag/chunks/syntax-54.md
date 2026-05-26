# Syntax

activexcontrol.GetArgElement ( index )



- Table 10.214:




|Argument|Description|
|---|---|
|activexcontrol|Identifier for the instance of the PowerBuilder window ActiveX control. When used in HTML, the ActiveX control is the NAME attribute of the OBJECT element. When used in other environments, references the control that contains the PowerBuilder window ActiveX.|
|index|Integer specify the argument to return.|



Return value Any. Returns the specified argument. Usage



Call this function after calling InvokePBFunction or TriggerPBEvent to access the updated value in an argument passed by reference.



JavaScript scripts must use this function to access arguments passed by reference. VBScript scripts can use this function if they established the argument list via calls to SetArgElement.



Examples This JavaScript example calls the GetArgElement function:



...



theArg = f.textToPB.value; PBRX1.SetArgElement(1, theArg); theFunc = "of_argref"; retcd = PBRX1.InvokePBFunction(theFunc, numargs); rc = parseInt(PBRX1.GetLastReturn());



IF (rc != 1) { alert("Error. Empty string."); } backByRef = PBRX1.GetArgElement(1);



...



See also GetLastReturn InvokePBFunction SetArgElement TriggerPBEvent
