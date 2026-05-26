# Obsolete function

_Narrow is obsolete, because EAServer is no longer supported since PowerBuilder 2017.



Applies to CORBAObject objects Syntax



corbaobject._Narrow ( newremoteobject, classname )



- Table 10.514:




|Argument|Description|
|---|---|
|corbaobject|An object of type CORBAObject that you want to convert|
|newremoteobject|A variable that will contain the converted object reference|
|classname|The class name of the subtype to which you want to narrow the object reference|



Return value Long.



- Returns 0 if it succeeds and a negative number if an error occurs. Usage




The _Narrow function allows you to narrow proxy objects in a CORBA-compatible client that connects to EAServer. For additional examples, see the functions on the See also list.
