# 10.125 DisableCommit Description

Declares that a component's transaction updates are inconsistent and cannot be committed in their present state.



Applies to TransactionServer objects Syntax



transactionserver.DisableCommit ( )



- Table 10.154:




|Argument|Description|
|---|---|
|transactionserver|Reference to the TransactionServer service instance|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage



The DisableCommit function indicates that the current transaction cannot be committed because the component's work has not been completed; the instance remains active after the current method returns.
