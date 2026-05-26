# Examples

In this example, the client calls the dopayroll method on the CmpnyAcct EAServer component, which processes a company payroll. The method returns 1 if the company has sufficient funds to meet the payroll, and the client then commits the transaction:



// Instance variables: // CORBACurrent corbcurr integer li_rc boolean lb_rv long ll_rc // Create an instance of the CORBACurrent object // and initialize it



... lb_rv = corbcurr.BeginTransaction() IF lb_rv THEN



ll_rc = myconnect.CreateInstance(CmpnyAcct) // handle error li_rc = CmpnyAcct.dopayroll() IF li_rc = 1 THEN



corbcurr.CommitTransaction( ELSE



corbcurr.RollbackTransaction() END IF



ELSE



// handle error END IF



See also BeginTransaction (obsolete) GetContextService GetStatus (obsolete) GetTransactionName (obsolete) Init (obsolete) ResumeTransaction (obsolete) RollbackOnly (obsolete)
