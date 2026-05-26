# Examples

This example shows the use of RollbackTransaction to roll back a transaction when an update does not succeed:



// Instance variables: // CORBACurrent corbcurr int li_rc1, li_rc2 long ll_rc



this.GetContextService("CORBACurrent", corbcurr) li_rc1 = corbcurr.Init() IF li_rc1 <> 1 THEN



// handle the error ELSE



ll_rc = CreateInstance(mycomp) // invoke methods on the instantiated component // test return values and roll back // if unsatisfactory IF li_rc2 = 1 THEN



corbcurr.CommitTransaction() ELSE



corbcurr.RollbackTransaction() END IF



END IF



See also BeginTransaction (obsolete) CommitDocking



GetContextService GetStatus (obsolete) GetTransactionName (obsolete) Init (obsolete) ResumeTransaction (obsolete) RollbackOnly (obsolete) SetTimeout (obsolete) SuspendTransaction (obsolete)



- 10.546 Round Description Rounds a number to the specified number of decimal places. Syntax Round ( x, n )


- Table 10.670:




|Argument|Description|
|---|---|
|x|The number you want to round.|
|n|The number of decimal places to which you want to round x. Valid values are 0 through 30.|
