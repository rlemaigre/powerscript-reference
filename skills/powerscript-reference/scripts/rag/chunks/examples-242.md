# Examples

The following example creates an instance of the TransactionServer service and checks whether the COM object is currently running in the client's security context. If it is, it reverts to the object's security context:



TransactionServer txninfo_test integer li_rc



li_rc = GetContextService( "TransactionServer", & txninfo_test ) IF txninfo_test.IsImpersonating() THEN & txninfo_test.RevertToSelf()



See also ImpersonateClient IsCallerInRole IsImpersonating IsSecurityEnabled
