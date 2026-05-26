# Obsolete function

SuspendTransaction is obsolete, because EAServer is no longer supported since PowerBuilder 2017.



Applies to CORBACurrent objects Syntax



CORBACurrent.SuspendTransaction ( )



- Table 10.865:




|Argument|Description|
|---|---|
|CORBACurrent|Reference to the CORBACurrent service instance|



Return value Unsigned long. Returns a handle that refers to the transaction associated with the thread or 0 if an error occurs. Usage



The SuspendTransaction function returns a handle referring to the transaction associated with the calling thread. This handle can be passed to the ResumeTransaction function on the same or a different thread. When SuspendTransaction is called, the current thread is no longer associated with a transaction.



SuspendTransaction can be called by a client or a component that is marked as OTS style. It must be using the two-phase commit transaction coordinator (OTS/XA).
