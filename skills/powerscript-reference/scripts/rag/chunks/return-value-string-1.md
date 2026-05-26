# Return value String.

Returns the key name if it succeeds and empty string ("") if an error occurs. If any argument's value is null, the method returns null.



Example This example gets the number of keys first and then gets the name of each key.



long ll_index, ll_KeyCount string ls_KeyName datastore lds_employee datawindowchild ldwc_active



JsonPackage lnv_package lnv_package = create JsonPackage



...//Initialize data for lds_employee, ldwc_active // package the data lnv_package.SetValue("d_department", dw_department, false) lnv_package.SetValue("d_employee", lds_employee) lnv_package.SetValue("dddw_active", ldwc_active, false) ll_KeyCount = lnv_package.KeyCount() for ll_index = 1 to ll_KeyCount



ls_KeyName = lnv_package.GetKey(ll_index) …



next



See also KeyCount



- 10.243 GetLastReturn Description Returns the return value from the last InvokePBFunction or TriggerPBEvent function. Applies to Window ActiveX controls Syntax activexcontrol.GetLastReturn ( )


- Table 10.301:




|Argument|Description|
|---|---|
|activexcontrol|Identifier for the instance of the PowerBuilder window ActiveX control. When used in HTML, the ActiveX control is the NAME attribute of the object element. When used in other environments, this references the control that contains the PowerBuilder window ActiveX.|



Return value Any. Returns the last return value. Usage



Call this function after calling InvokePBFunction or TriggerPBEvent to access the return value. JavaScript scripts must use this function to access return values from InvokePBFunction and TriggerPBEvent. VBScript scripts can either use this function or access the return value using an argument in InvokePBFunction or TriggerPBEvent.



Examples This JavaScript example calls the GetLastReturn function:



...



retcd = PBRX1.TriggerPBEvent(theEvent, numargs); rc = parseInt(PBRX1.GetLastReturn());



if (rc != 1) { alert("Error. Empty string."); }



...



This VBScript example calls the GetLastReturn function:



...



retcd = PBRX1.TriggerPBEvent(theEvent, & numargs, args) rc = PBRX1.GetLastReturn() IF rc <> 1 THEN msgbox "Error. Empty string." END IF



...



See also GetArgElement InvokePBFunction SetArgElement TriggerPBEvent



- 10.244 GetLibraryList Description Gets the files in the library search path of the application. Syntax GetLibraryList ( ) Return value String.




Returns the current library list with complete paths. Multiple libraries are separated by commas.
