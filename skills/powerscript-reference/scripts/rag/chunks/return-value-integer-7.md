# Return value Integer.

- Returns 0 if it succeeds and one of the following values if the service object could not be initialized:


- -1 -- Unknown error
- -2 -- Service object not running in EAServer (no argument) or Connection object not connected to EAServer (argument is Connection object)
- -3 -- ORB initialization error
- -4 -- Error on a call to the ORB.resolve_initial_references("TransactionCurrent") method
- -5 -- Error on a call to the narrow method Usage




The Init function can be called from a PowerBuilder component running in EAServer whose transaction property is marked as OTS style, or by a PowerBuilder client. The Init function must be called to initialize the CORBACurrent object before any other functions are called. EAServer must be using the two-phase commit transaction coordinator (OTS/XA) and a reference to the CORBACurrent object must first be obtained using the GetContextService function.



When Init is called from a PowerBuilder component running in EAServer, no arguments are required. If the calling component is not marked as OTS style, the CORBACurrent object is not initialized.



When Init is called from a PowerBuilder client and the client is responsible for the transaction, the CORBACurrent object must be initialized by calling Init with either a Connection object or a URL string as the argument. In the case of a Connection object, the client must already be connected to a valid EAServer host using that Connection object. Using a Connection object is preferred because the code is more portable.
