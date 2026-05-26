# 10.308 ImpersonateClient Description

Allows a COM object running on COM+ to take on the security attributes of the client for the duration of a call.



Applies to TransactionServer objects Syntax



transactionserver.ImpersonateClient ( )



- Table 10.377:




|Argument|Description|
|---|---|
|transactionserver|Reference to the TransactionServer service instance|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage



ImpersonateClient allows a COM object to run in the client's security context for the duration of a call. Running in the client's security context gives the server process access to the same resources as the client. This can either restrict or expand the server's access to resources. For example, if the client does not have update rights to a database but the server does, impersonating the client before accessing the database prevents the client from updating the database.



After completing the processing that requires the client's security context, call RevertToSelf to revert to the server's security context.
