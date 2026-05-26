# Examples

This example shows the use of the SuspendTransaction function to disassociate the calling thread from the current transaction:



// Instance variable: // CORBACurrent corbcurr integer li_rc unsignedlong ll_handle



// Get and initialize an instance of CORBACurrent



... li_rc = corbcurr.BeginTransaction() // do some transactional work



ll_handle = corbcurr.SuspendTransaction() // do some nontransactional work li_rc = corbcurr.ResumeTransaction(ll_handle) // do some more transactional work li_rc = corbcurr.CommitTransaction()



See also BeginTransaction (obsolete) CommitDocking GetTransactionName (obsolete) ResumeTransaction (obsolete) RollbackTransaction (obsolete) SetTimeout (obsolete)



- 10.694 SymmetricDecrypt Description Decrypts a blob value using symmetric algorithm. Applies to CrypterObject objects Syntax




crypter.SymmetricDecrypt ( algorithm, variable, key{, operationmode{, iv{, padding}}})
