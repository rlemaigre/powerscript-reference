# Obsolete function

CommitTransaction is obsolete, because EAServer is no longer supported since PowerBuilder 2017.



Applies to CORBACurrent objects Syntax



CORBACurrent.CommitTransaction (breportheuristics )



- Table 10.98:




|Argument|Description|
|---|---|
|CORBACurrent|Reference to the CORBACurrent service instance|
|breportheuristics|A boolean specifying whether heuristic decisions should be reported for the transaction associated with the calling thread|



Return value Integer. Returns 0 if it succeeds and one of the following negative values if an error occurs:



- -1 -- Failed for unknown reason
- -2 -- No transaction is associated with the calling thread
- -3 -- The calling thread does not have permission to commit the transaction
- -4 -- The HeuristicRollback exception was raised
- -5 -- The HeuristicMixed exception was raised
- -6 -- The HeuristicHazard exception was raised Usage




The CommitTransaction function completes the transaction associated with the calling thread. Use the BeginTransaction function to begin a transaction and associate it with the calling thread. The transaction is not completed if any other participants in the transaction vote to roll back the transaction.



CommitTransaction can be called by a client or a component that is marked as OTS style. EAServer must be using the two-phase commit transaction coordinator (OTS/XA).
