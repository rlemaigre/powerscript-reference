# Applies to OLEObject Syntax

oleobject.GetAutomationNativePointer ( pointer )



- Table 10.215:




|Argument|Description|
|---|---|
|oleobject|The name of an OLEObject variable containing the object for which you want the native pointer.|
|pointer|An UnsignedLong variable in which you want to store the pointer. If GetAutomationNativePointer cannot get a valid pointer, pointer is set to 0.|



Return value Integer.



- Returns 0 if it succeeds and -1 if an error occurs. Usage




Pointer is a pointer to OLE's IUnknown interface. You can use it with the OLE QueryInterface function to get other interface pointers. When you call GetAutomationNativePointer, PowerBuilder calls OLE's AddRef function, which locks the pointer. You can release the pointer in your DLL function or in a PowerBuilder script with the ReleaseAutomationNativePointer function.



This function is useful only for external DLL calls. It is not related to the SetAutomationPointer function.
