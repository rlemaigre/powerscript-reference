# Return value Boolean. Returns true if the component is impersonating the client and false if it is not. Usage

COM objects running on COM+ can use the ImpersonateClient function to run in the client's security context so that the server process has access to the same resources as the client. Use IsImpersonating to determine whether the ImpersonateClient function has been called without



- a matching call to RevertToSelf. Examples




The following example creates an instance of the TransactionServer service and checks whether the COM object is currently running on the client's security context. If it is not, it impersonates the client, performs some processing using the client's security context, then reverts to the object's security context:



TransactionServer txninfo_test integer li_rc



li_rc = GetContextService( "TransactionServer", & txninfo_test ) IF NOT txninfo_test.IsImpersonating() THEN



txninfo_test.ImpersonateClient() END IF // continue processing as client txninfo_test.RevertToSelf()



See also ImpersonateClient IsCallerInRole IsSecurityEnabled RevertToSelf



- 10.352 IsInTransaction (obsolete) Description Indicates whether a component is executing in a transaction.




Obsolete function



IsInTransaction is obsolete, because EAServer is no longer supported since PowerBuilder 2017.



Applies to TransactionServer objects Syntax



transactionserver.IsInTransaction ( )



- Table 10.434:




|Argument|Description|
|---|---|
|transactionserver|Reference to the TransactionServer service instance|
