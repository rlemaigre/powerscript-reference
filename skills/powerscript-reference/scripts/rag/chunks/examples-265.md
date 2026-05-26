# Examples

The following example shows the use of SetAbort in a component method that performs database updates:



integer li_rc OleTxnObject lotxn_obj lotxn_obj = CREATE OleTxnObject li_rc = lotxn_obj.ConnectToNewObject("pbcom.n_test")



- IF li_rc <> 0 THEN Messagebox( "Connect Error", string(li_rc) ) // handle error




END IF lotxn_obj.f_dowork() lotxn_obj.f_domorework() IF /* test for client satisfaction */ THEN



lotxn_obj.SetComplete() ELSE



lotxn_obj.SetAbort()



END IF lotxn_obj.DisconnectObject()



See also SetComplete



10.589.2 Syntax 2: For TransactionServer objects Description



Declares that a component cannot complete its work for the current transaction and that the transaction should be rolled back. The component instance are deactivated when the method returns.



Applies to TransactionServer objects Syntax



transactionserver.SetAbort ( )



- Table 10.729:




|Argument|Description|
|---|---|
|transactionserver|Reference to the TransactionServer service instance|
