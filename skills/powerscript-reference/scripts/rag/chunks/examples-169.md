# Examples

The following example checks to see that a CORBA object reference is an instance of a class that implements n_Bank_Account:



CORBAObject my_corbaobj n_Bank_Account my_account



... ... if (my_corbaobj._is_a("n_Bank_Account")) then



my_corbaobj._narrow(my_account,"n_Bank_Account") end if my_account.withdraw(100.0)



See also _Narrow (obsolete)



- 10.340 IsAlive Description Determines whether a server object is still running. Applies to OLEObject objects, OLETxnObject objects Syntax oleobject.IsAlive ( )


- Table 10.422:




|Argument|Description|
|---|---|
|oleobject|The name of an OLEObject or OLETxnObject variable that is connected to an automation server or COM object|



Return value Boolean. Returns true if the server object appears to be running and false if it is dead. Usage



Use the IsAlive function to determine whether a server process has died. This function does not replace the error-handling capability provided by the ExternalException and Error events. It provides a way to check the viability of the server at intervals or before specific operations to avoid runtime errors.



If IsAlive returns true, the server may only appear to be running, because the true state of the server may be masked. This is more likely to occur when the server is running on a different computer, because DCOM may be using cached information to determine the state of the server. A false return value always indicates that the server is dead.
