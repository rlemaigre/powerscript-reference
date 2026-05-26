# Return value

- Integer. Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -1 -- Failed for unknown reason
- -2 -- No transaction is associated with the calling thread Usage




RollbackTransaction is typically called by the originator of the transaction. Another participant in a client- or OTS style transaction can call RollbackOnly to vote that the transaction should be rolled back.



RollbackOnly can be called by a client or a component that is marked as OTS style. EAServer must be using the two-phase commit transaction coordinator (OTS/XA).
