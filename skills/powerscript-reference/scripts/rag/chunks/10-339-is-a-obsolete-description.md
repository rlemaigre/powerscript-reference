# 10.339 _Is_A (obsolete) Description

Checks to see whether a CORBA object is an instance of a class that implements a particular interface.



This function is used by PowerBuilder clients connecting to EAServer.



Obsolete function _Is_A is obsolete, because EAServer is no longer supported since PowerBuilder 2017.



Applies to CORBAObject objects Syntax



corbaobject._Is_A ( classname )



- Table 10.421:




|Argument|Description|
|---|---|
|corbaobject|An object of type CORBAObject that you want to test|
|classname|The interface that will be used for the test|



Return value Boolean. Returns true if the class of the object implements the specified interface and false if it does not.
