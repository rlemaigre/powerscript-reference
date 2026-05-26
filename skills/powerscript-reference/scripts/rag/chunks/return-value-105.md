# Return value

- Integer. Returns 0 if it succeeds and -1 if an error occurs. Usage




Pointer is a pointer to OLE's IUnknown interface. You can use IUnknown::QueryInterface to get other interface pointers.



When you call GetNativePointer, PowerBuilder calls OLE's AddRef function, which locks the pointer. You can release the pointer in your DLL function or in a PowerBuilder script with the ReleaseNativePointer function.



Examples See GetNativePointer. See also GetAutomationNativePointer GetNativePointer ReleaseAutomationNativePointer
