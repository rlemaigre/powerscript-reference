# Examples

This example gets a pointer for the OLECustomControl ocx_spell for making external function calls for OLE automation:



UnsignedLong lul_oleptr integer li_rtn



li_rtn = ocx_spell.GetNativePointer(lul_oleptr) IF li_rtn = 0 THEN



... // Call external functions for automation ocx_spell.ReleaseNativePointer(lul_oleptr)



END IF



See also GetAutomationNativePointer ReleaseAutomationNativePointer ReleaseNativePointer



- 10.250 GetNextSheet Description Obtains the sheet that is behind the specified sheet in the MDI frame. Applies to MDI frame windows Syntax mdiframewindow.GetNextSheet ( sheet )


- Table 10.307:




|Argument|Description|
|---|---|
|mdiframewindow|The MDI frame window in which you want the next sheet|
|sheet|The sheet for which you want the sheet that is behind it|
