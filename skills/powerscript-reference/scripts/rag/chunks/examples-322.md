# Examples

The code in the following example checks to see whether the runtime context is a transaction server. If it is, it uses transaction semantics that are appropriate for a transaction server; otherwise, it uses COMMIT and ROLLBACK to communicate directly with the database:



// Instance variables: // DataStore ids_datastore // TransactionServer ts



Integer li_rc long ll_rv



li_rc = this.GetContextService("TransactionServer", & ts) IF li_rc <> 1 THEN



// handle the error END IF



... ...



ll_rv = ids_datastore.Update() IF ts.Which() > 0 THEN



IF ll_rv = 1 THEN



ts.EnableCommit() ELSE



ts.DisableCommit() END IF



ELSE



IF ll_rv = 1 THEN



COMMIT USING SQLCA; ELSE



ROLLBACK USING SQLCA; END IF



END IF



See also EnableCommit IsInTransaction (obsolete) IsTransactionAborted (obsolete) Lookup (obsolete) SetAbort SetComplete
