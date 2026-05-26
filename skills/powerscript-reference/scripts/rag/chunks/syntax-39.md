# Syntax

transactionserver.EnableCommit ( )



- Table 10.165:




|Argument|Description|
|---|---|
|transactionserver|Reference to the TransactionServer service instance|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage



The EnableCommit function indicates that the component should not be deactivated after the current method invocation. However, if the component instance is deactivated, the current transaction can be committed.
