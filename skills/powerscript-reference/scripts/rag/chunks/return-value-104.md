# Return value

- Integer. Returns 0 if it succeeds and -1 if an error occurs. Usage




Pointer is a pointer to OLE's IUnknown interface. You can use IUnknown::QueryInterface to get other interface pointers.



When you call GetAutomationNativePointer, PowerBuilder calls OLE's AddRef function, which locks the pointer. You can release the pointer in your DLL function or in a PowerBuilder script with the ReleaseAutomationNativePointer function.



Examples See GetAutomationNativePointer. See also GetAutomationNativePointer GetNativePointer ReleaseNativePointer



- 10.516 ReleaseNativePointer Description Releases the pointer to an OLE object that you got with GetNativePointer. Applies to OLE controls and OLE custom controls Syntax olename.ReleaseNativePointer ( pointer )


- Table 10.640:




|Argument|Description|
|---|---|
|olename|The name of the OLE control containing the object for which you want the native pointer.|
|pointer|A UnsignedLong variable that holds the pointer you want to release. ReleaseNativePointer sets pointer to 0 so that it is clearly no longer a valid pointer.|
