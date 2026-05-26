# 10.391.1 Syntax 1: For CORBA-compliant EAServer components Description

Allows a PowerBuilder client or component to obtain the factory interface of an EAServer component in order to create an instance of the component.



Applies to Connection objects, TransactionServer objects Syntax



objname.Lookup (objectvariable , componentname )



- Table 10.478:




|Argument|Description|
|---|---|
|objname|The name of the Connection object used to establish the connection or of an instance of the TransactionServer context object.|
|objectvariable|A global, instance, or local variable of the factory interface type.|
|componentname|A string whose value is the name of the component instance to be created. You can optionally prepend a package name followed by a slash to the component name (for example, "mypackage/mycomponent").|



Return value Long. Returns 0 if it succeeds and a negative number if an error occurs. Usage



The Lookup function can be used as an alternative to the CreateInstance function. It obtains a reference to a factory interface that you can use to create an instance of a component running in EAServer.



Use the Connection object's Lookup function to enable a PowerBuilder client to access a component running in EAServer. You can supply a server name or a list of server names in the location property of the Connection object.



Use the TransactionServer object's Lookup function to enable a PowerBuilder component running in EAServer to access another component running on the same server.



To use the Lookup function, you need to create an EAServer proxy library for the SessionManager package to obtain a proxy for the factory interface. Include this proxy library in your library list.
