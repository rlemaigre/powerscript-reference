# Return value Integer.

- Returns 0 if it succeeds and -1 if an error occurs. Usage




Pointer is a pointer to OLE's IUnknown interface. You can use it with the OLE QueryInterface function to get other interface pointers.



When you call GetNativePointer, PowerBuilder calls OLE's AddRef function, which locks the pointer. You must release the pointer in your DLL function or in a PowerBuilder script with the ReleaseNativePointer function.
