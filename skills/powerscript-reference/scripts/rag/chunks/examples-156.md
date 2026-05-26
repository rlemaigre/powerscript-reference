# Examples

This example shows the use of Init in a PowerBuilder EAServer component to initialize an instance of the CORBACurrent object:



// Instance variables: // CORBACurrent corbcurr int li_rc



li_rc = this.GetContextService("CORBACurrent", corbcurr) IF li_rc <> 1 THEN



// handle the errorELSE li_rc = corbcurr.init() IF li_rc <> 0 THEN



// handle the error END IF



END IF



In this example, Init is called by a PowerBuilder client application that has already connected to EAServer using the myconn Connection object and has created a reference called corbcurr to the CORBACurrent object:



li_rc = corbcurr.init( myconn ) IF li_rc <> 0 THEN



// handle the errorEND IF



In this example, the PowerBuilder client application calls the Init function using a valid URL:



li_rc = corbcurr.init( "iiop://localhost:2000" ) IF li_rc <> 0 THEN



// handle the errorEND IF



See also BeginTransaction (obsolete) CommitDocking GetContextService GetStatus (obsolete) GetTransactionName (obsolete) ResumeTransaction (obsolete) RollbackOnly (obsolete) RollbackTransaction (obsolete) SetTimeout (obsolete) SuspendTransaction (obsolete)



- 10.314 InputFieldChangeData Description Modifies the data value of input fields in a RichTextEdit control. Applies to RichTextEdit controls Syntax rtename.InputFieldChangeData ( inputfieldname, inputfieldvalue )


- Table 10.384:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit control in which you want to change the data in the specified input fields.|
|inputfieldname|A string whose value is the name of input fields whose value you want to change. There can be more than one input field with a given name.|
|inputfieldvalue|A string whose value is the data to be assigned to the specified input fields.|



Return value Integer.



- Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, InputFieldChangeData returns null. Usage




All the input fields that have the same name contain the same data. When you call InputFieldChangeData, you affect all the fields of the specified name.
