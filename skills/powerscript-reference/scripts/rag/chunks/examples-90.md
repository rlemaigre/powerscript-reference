# Examples

The following example shows the use of EnableCommit in a component method that performs database updates:



// Instance variables: // DataStore ids_datastore // TransactionServer ts Integer li_rc long ll_rv



li_rc = this.GetContextService("TransactionServer", ts) IF li_rc <> 1 THEN



// handle the error END IF



... ll_rv = ids_datastore.Update() IF ll_rv = 1 THEN



ts.EnableCommit() ELSE



ts.DisableCommit() END IF



See also DisableCommit IsInTransaction (obsolete) IsTransactionAborted (obsolete) Lookup (obsolete) SetAbort SetComplete Which
