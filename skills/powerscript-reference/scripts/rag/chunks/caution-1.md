# Caution

The handletrans argument must be obtained from the SuspendTransaction function. Using any other value as the argument to ResumeTransaction may have unpredictable results.



ResumeTransaction can be called by a client or a component that is marked as OTS style.



must be using the two-phase commit transaction coordinator (OTS/XA). Examples



This example shows the use of the ResumeTransaction function to associate the calling thread with the transaction referred to by the ll_handle argument returned by SuspendTransaction:



// Instance variable: // CORBACurrent corbcurr integer li_rc unsignedlong ll_handle



li_rc = this.GetContextService("CORBACurrent", &



corbcurr) li_rc = corbcurr.Init() li_rc = corbcurr.BeginTransaction() // do some transactional work ll_handle = corbcurr.SuspendTransaction() //do some non-transactional work li_rc = corbcurr.ResumeTransaction(ll_handle) // do some more transactional work li_rc = corbcurr.CommitTransaction()



See also BeginTransaction (obsolete) CommitDocking GetContextService GetStatus (obsolete) GetTransactionName (obsolete) Init (obsolete) RollbackOnly (obsolete) RollbackTransaction (obsolete) SetTimeout (obsolete)



SuspendTransaction (obsolete)
