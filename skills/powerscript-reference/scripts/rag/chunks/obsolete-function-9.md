# Obsolete function

IsTransactionAborted is obsolete, because EAServer is no longer supported since PowerBuilder 2017.



Applies to TransactionServer objects Syntax



transactionserver.IsTransactionAborted ( )



- Table 10.440:




|Argument|Description|
|---|---|
|transactionserver|Reference to the TransactionServer service instance|



Return value Boolean. Returns true if the current transaction has been aborted and false if it has not. Usage



The IsTransactionAborted function allows a component to verify that the current transaction is still viable before performing updates to the database.The IsTransactionAborted function corresponds to the isRollbackOnly transaction primitive in EAServer.



The following example checks to see whether the transaction has been aborted. If it has not, it updates the database and calls EnableCommit. If it has been aborted, it calls DisableCommit.



// Instance variables: ids_datastore, ts Integer li_rc long ll_rv



li_rc = this.GetContextService("TransactionServer", ts) IF li_rc <> 1 THEN



// handle the error END IF



... IF ts.IsTransactionAborted() = FALSE THEN



ll_rv = ids_datastore.Update() IF ll_rv = 1 THEN



ts.EnableCommit() ELSE



ts.DisableCommit() END IF



END IF



See also EnableCommit IsInTransaction (obsolete) Lookup (obsolete) SetAbort SetComplete Which
