# Examples

This example creates an OLEObject object, connects to an automation server, and gets a pointer for making external function calls. After processing, the pointer is released:



OLEObject oleobj_report UnsignedLong lul_oleptr integer li_rtn



oleobj_report = CREATE OLEObject oleobj_report.ConnectToObject("report.doc")



- li_rtn = & oleobj_report.GetAutomationNativePointer(lul_oleptr) IF li_rtn = 0 THEN




... // Call external functions for automation oleobj_report.& ReleaseAutomationNativePointer(lul_oleptr)



END IF



See also GetNativePointer ReleaseAutomationNativePointer ReleaseNativePointer
