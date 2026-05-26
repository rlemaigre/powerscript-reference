# See also IntLow

- 10.337 IntLow Description Returns the low word of a long value. Syntax IntLow ( long )

- Table 10.419:



|Argument|Description|
|---|---|
|long|A long value|



Return value



Integer. Returns the low word of long if it succeeds and -1 if an error occurs. If long is null, IntLow returns null.



Usage One use for IntLow is for decoding values returned by external C functions and Windows messages. Examples These statements decode a long value LValue into its low and high integers:



integer nLow, nHigh long LValue = 12345 nLow = IntLow(LValue) //The Low Integer is 12345. nHigh = IntHigh(LValue) //The High Integer is 0.



See also IntHigh



10.338 InvokePBFunction



Description



Invokes the specified user-defined window function in the child window contained in a PowerBuilder window ActiveX control.



Applies to Window ActiveX controls Syntax



activexcontrol.InvokePBFunction ( name {, numarguments {, arguments } })



- Table 10.420:






|Argument|Description|
|---|---|
|activexcontrol|Identifier for the instance of the PowerBuilder Window ActiveX control. When used in HTML, this is the NAME attribute of the object element. When used in other environments, this references the control that contains the PowerBuilder window ActiveX.|



|Argument|Description|
|---|---|
|name|String specifying the name of the user-defined window function. This argument is passed by reference.|
|numarguments (op|Integertional) specifying the number of elements in the arguments array. The default is zero.|
|arguments (option|al)Variant array containing function arguments. In PowerBuilder, Variant maps to the Any datatype. This argument is passed by reference. If you specify this argument, you must also specify numarguments. If you do not specify this argument and the function contains arguments, populate the argument list by calling the SetArgElement function once for each argument. JavaScript cannot use this argument.|



Return value Integer. Returns 1 if the function succeeds and -1 if an error occurs. Usage



Call this function to invoke a user-defined window function in the child window contained in a PowerBuilder window ActiveX control.



To check the PowerBuilder function's return value, call the GetLastReturn function. JavaScript cannot use the arguments argument. Examples This JavaScript example calls the InvokePBFunction function:



function invokeFunc(f) { var retcd; var rc; var numargs; var theFunc; var theArg; retcd = 0; numargs = 1; theArg = f.textToPB.value; PBRX1.SetArgElement(1, theArg); theFunc = "of_args"; retcd = PBRX1.InvokePBFunction(theFunc, numargs); rc = parseInt(PBRX1.GetLastReturn()); IF (rc != 1) { alert("Error. Empty string."); } PBRX1.ResetArgElements();



}



This VBScript example calls the InvokePBFunction function:



Sub invokeFunction_OnClick() Dim retcd Dim myForm Dim args(1) Dim rc



Dim numargs Dim theFunc Dim rcfromfunc retcd = 0 numargs = 1 rc = 0 theFunc = "of_args" Set myForm = Document.buttonForm args(0) = buttonForm.textToPB.value retcd = PBRX1.InvokePBFunction(theFunc, & numargs, args) rc = PBRX1.GetLastReturn() IF rc <> 1 THEN msgbox "Error. Empty string." END IF PBRX1.ResetArgElements()



END sub



See also GetLastReturn SetArgElement TriggerPBEvent
