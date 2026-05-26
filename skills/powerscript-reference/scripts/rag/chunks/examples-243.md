# Examples

In this example, a participant in a transaction has determined that it should be rolled back. It creates and initializes an instance of the CORBACurrent service object and votes to roll back the transaction:



// Instance variable: // CORBACurrent corbcurr int li_rc



li_rc = this.GetContextService("CORBACurrent", &



corbcurr) IF li_rc <> 1 THEN // handle the error END IF



li_rc = corbcurr.Init() IF li_rc <> 0 THEN // handle the error ELSE



corbcurr.RollbackOnly() END IF



See also BeginTransaction (obsolete) CommitDocking GetContextService GetStatus (obsolete) GetTransactionName (obsolete) Init (obsolete) ResumeTransaction (obsolete) RollbackTransaction (obsolete) SetTimeout (obsolete) SuspendTransaction (obsolete)



- 10.545 RollbackTransaction (obsolete) Description Rolls back the EAServer transaction associated with the calling thread.
