# Return value

Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage The SetAbort function corresponds to the rollbackWork transaction primitive in EAServer. Any component that participates in a transaction can roll back the transaction by calling the rollbackWork primitive. Only the action of the root component (the component instance that began the transaction) determines when EAServer commits the transaction. Examples



The following example shows the use of SetAbort in a component method that performs database updates:



// Instance variables: // DataStore ids_datastore // TransactionServer ts



Integer li_rc long ll_rv



li_rc = this.GetContextService("TransactionServer", ts)



- IF li_rc <> 1 THEN // handle the error




END IF



... ... ll_rv = ids_datastore.Update() IF ll_rv = 1 THEN



ts.SetComplete() ELSE



ts.SetAbort() END IF



See also DisableCommit EnableCommit IsInTransaction (obsolete) IsTransactionAborted (obsolete) Lookup (obsolete) SetComplete Which



- 10.590 SetAccessToken Description Sets the access token. Applies to OAuthRequest objects Syntax




objectname.SetAccessToken ( string accessToken )
