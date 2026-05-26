# Examples

The following example shows the use of SetComplete in a component method that performs database updates:



integer li_rc OleTxnObject lotxn_obj



lotxn_obj = CREATE OleTxnObject li_rc = lotxn_obj.ConnectToNewObject("pbcom.n_test")



- IF li_rc <> 0 THEN Messagebox( "Connect Error", string(li_rc) )




// handle error END IF lotxn_obj.f_dowork() lotxn_obj.f_domorework() lotxn_obj.SetComplete() lotxn_obj.DisconnectObject()



See also SetAbort



- 10.600.2 Syntax 2: For TransactionServer objects Description




Declares that the transaction in which a component is participating should be committed and the component instance should be deactivated.



Applies to TransactionServer objects Syntax



transactionserver.SetComplete ( )



- Table 10.742:




|Argument|Description|
|---|---|
|transactionserver|Reference to the TransactionServer service instance|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage



The SetComplete function corresponds to the completeWork transaction primitive in EAServer.



Any component that participates in a transaction can roll back the transaction by calling the rollbackWork primitive. Only the action of the root component (the component instance that began the transaction) determines when EAServer commits the transaction.



The transaction is committed if either of the following occurs:



- • The root component returns with a state of completeWork and no participating component has set a state of disallowCommit.
- • The root component is deactivated due to an explicit destroy from the client and no participating component has set a state of disallowCommit. (A client disconnect that is not preceded by an explicit destroy request always causes a rollback.)




You can use the transaction state primitives in any component; the component does not have to be declared transactional. Calling completeWork or rollbackWork from methods causes early deactivation.
