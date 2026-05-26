# Obsolete function

GetStatus is obsolete, because EAServer is no longer supported since PowerBuilder 2017.



Applies to CORBACurrent objects Syntax



CORBACurrent.GetStatus ( )



- Table 10.342:




|Argument|Description|
|---|---|
|CORBACurrent|Reference to the CORBACurrent service instance|



Return value Integer. Returns -1 if an error occurs and one of the following positive integers if it succeeds:



- 1 -- Status active
- 2 -- Status marked rollback
- 3 -- Status prepared
- 4 -- Status committed
- 5 -- Status rolled back
- 6 -- Status unknown
- 7 -- Status no transaction
- 8 -- Status preparing
- 9 -- Status committing
- 10 -- Status rolling back Usage




The GetStatus function can be used to determine the current status of a transaction by the client or component that initiated the transaction using the BeginTransaction function. EAServer must be using the two-phase commit transaction coordinator (OTS/XA).



GetStatus returns 1 when the transaction has started and no prepares have been issued. When GetStatus returns 4 or 5, heuristics may exist; otherwise, the transaction would have been completed and destroyed and the value 7 returned. A return value of 6 indicates that the transaction is in a transient condition and a subsequent call will eventually return another status. If GetStatus returns 8, 9, or 10, the transaction has begun but not yet completed the process of preparing, committing, or rolling back, probably because responses from participants in the transaction are pending. Examples This example shows the use of GetStatus to obtain the state of the current transaction:



// Instance variable: // CORBACurrent corbcurr integer li_rc, li_status



- li_rc = this.GetContextService("CORBACurrent", & corbcurr)




IF li_rc <> 1 THEN



// handle the error END IF li_rc = corbcurr.Init( "iiop://jagserver:2000") IF li_rc <> 1 THEN



// handle the error



ELSE li_status = corbcurr.GetStatus() CHOOSE CASE li_status



CASE 1 // take appropriate action for each value



...



END CHOOSE END IF



See also BeginTransaction (obsolete) CommitDocking GetContextService GetTransactionName (obsolete) Init (obsolete) ResumeTransaction (obsolete) RollbackOnly (obsolete) RollbackTransaction (obsolete) SetTimeout (obsolete) SuspendTransaction (obsolete)
