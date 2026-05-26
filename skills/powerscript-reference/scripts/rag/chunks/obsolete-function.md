# Obsolete function

BeginTransaction is obsolete, because EAServer is no longer supported since PowerBuilder 2017. An obsolete feature is no longer eligible for technical support and will no longer be enhanced, although it is still available.



Applies to CORBACurrent objects Syntax



CORBACurrent.BeginTransaction ( )



- Table 10.48:




|Argument|Description|
|---|---|
|CORBACurrent|Reference to the CORBACurrent service instance|



Return value Boolean. Returns true if it succeeds and false if the transaction could not be created. Usage



The BeginTransaction function creates a transaction and modifies the transaction context of the calling thread so that it is associated with the transaction. This enables the calling thread to obtain information about the transaction and control commits and rollbacks. BeginTransaction can be called by a client or a component that is marked as OTS style. EAServer must be using the two-phase commit transaction coordinator (OTS/XA). If the calling thread is already associated with a transaction, BeginTransaction returns false. Nested transactions are not supported.



Examples This example shows the use of BeginTransaction to create a transaction from a client:



// Instance variables: // CORBACurrent corbcurr // Connection myconnect long ll_rc integer li_rc1, li_rc2 boolean lb_success ll_rc = myconnect.ConnectToServer() // insert error handling ... li_rc1 = this.GetContextService("CORBACurrent", &



corbcurr) // insert error handling ... li_rc2 = corbcurr.Init( myconnect ) // insert error handling ... lb_success = corbcurr.BeginTransaction() IF NOT lb_success THEN



MessageBox ("Create Transaction Failed", & "The client may already be in a transaction") RETURN



ELSE



ll_rc = myconnect.CreateInstance(lcst_mybookstore) // begin processing



...



See also CommitDocking GetContextService GetStatus (obsolete) GetTransactionName (obsolete) Init (obsolete) ResumeTransaction (obsolete) RollbackOnly (obsolete)



RollbackTransaction (obsolete) SetTimeout (obsolete) SuspendTransaction (obsolete)



- 10.42 Blob Converts a string or byte array to a blob.


- Table 10.49:



|To|Use|
|---|---|
|Convert a string to a blob|Syntax 1|
|Convert a string or byte array to a blob|Syntax 2<br><br>|



Syntax 1: Convert a string to a blob Description Converts a string to a blob datatype. Syntax



Blob ( text {, encoding} )



- Table 10.50:




|Argument|Description|
|---|---|
|text|The string you want to convert to a blob datatype|
|encoding|Character encoding of the resulting blob. Values are:<br><br>• EncodingANSI!<br>• EncodingUTF8!<br>• EncodingUTF16LE! (default)<br>• EncodingUTF16BE!<br>|



Return value Blob. Returns the converted string in a blob with the requested encoding, if specified. If text is null, Blob returns null. Usage



If the encoding argument is not provided, Blob converts a Unicode string to a Unicode blob. You must provide the encoding argument if the blob has a different encoding.



Examples This example saves a text string as a Unicode blob:



Blob B B = Blob("Any Text")



This example saves a text string as a blob with UTF-8 encoding:



Blob Blb Blb = Blob("Any Text", EncodingUTF8!)
