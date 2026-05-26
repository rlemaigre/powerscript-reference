# Examples

This example creates an instance of the transaction server context object and impersonates the client to perform some processing:



TransactionServer txninfo_test integer li_rc li_rc = GetContextService( "TransactionServer", &



txninfo_test )



// Handle error if necessary // Impersonate the client txninfo_test.ImpersonateClient() // Perform processing with client security context



... // Revert to server's security context txninfo_test.RevertToSelf()



See also IsCallerInRole IsImpersonating IsSecurityEnabled RevertToSelf
