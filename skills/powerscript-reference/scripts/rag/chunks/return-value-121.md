# Return value

- Integer. Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -1 -- Failed for unknown reason
- -2 -- No transaction is associated with the calling thread
- -3 -- The calling thread does not have permission to commit the transaction
- -4 -- The HeuristicCommit exception was raised Usage




The RollbackTransaction function rolls back the transaction associated with the calling thread. The call fails if the HeuristicCommit exception is raised. Heuristic decisions are usually made when normal processing cannot continue, such as when a communications failure occurs. The HeuristicCommit exception is raised when all relevant updates have been committed.



RollbackTransaction can be called by a client or a component that is marked as OTS style. EAServer must be using the two-phase commit transaction coordinator (OTS/XA).
