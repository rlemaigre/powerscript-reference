# Return value

- Integer. Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -1 -- Unknown failure
- -2 -- The transaction referred to by handletrans is no longer valid Usage




The ResumeTransaction function associates the transaction referred to by the handletrans argument with the calling thread. The argument is obtained from a call to SuspendTransaction and may refer to a transaction that was previously associated with the current thread or with a different thread in the same execution environment.
