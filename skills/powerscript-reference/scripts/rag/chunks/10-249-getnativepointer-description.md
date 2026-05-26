# 10.249 GetNativePointer Description

Gets a pointer to the OLE object associated with the OLE control. The pointer lets you call OLE functions in an external DLL for the object.



Applies to OLE controls and OLE custom controls Syntax



olename.GetNativePointer ( pointer )



- Table 10.306:




|Argument|Description|
|---|---|
|olename|The name of the OLE control containing the object for which you want the native pointer.|
|pointer|A UnsignedLong variable in which you want to store the pointer. If GetNativePointer cannot get a valid pointer, pointer is set to 0.|
