# Examples

The following example narrows a CORBA object reference to the n_Bank_Account interface:



CORBAObject my_corbaobj n_Bank_Account my_account



... ... my_corbaobj._narrow(my_account,"Bank/n_Bank_Account")



my_account.withdraw(100.0)



In this example, the component is an EJB component that resides in a separate domain in EAServer. In this case, the SimpleBean component's classes are in the ../classes/adomain/ asimplepackage subdirectory:



CORBAObject my_corbaobj SimpleBean my_simplebean SimpleBeanHome my_simplebeanhome



... my_corbaobj._narrow(my_simplebeanhome,



"adomain/asimplepackage/SimpleBeanHome")



See also _Is_A (obsolete)



- 10.424 NextActivity Description Provides the next activity in a trace file. Applies to TraceFile objects Syntax instancename.NextActivity ( )


- Table 10.515:




|Argument|Description|
|---|---|
|instancename|Instance name of the TraceFile object|



Return value TraceActivityNode Usage



You use the NextActivity function to read the next activity in a trace file. The activity is returned as a TraceActivityNode object. If there are no more activities or if the file is not open, an invalid object is returned. You can then use the LastError property of the TraceFile object to determine what kind of error occurred. To use this function, you must have previously opened the trace file with the Open function. You use the NextActivity and Open functions as well as the other properties and functions provided by the TraceFile object to access the contents of a trace file directly. For example, you would use these functions if you want to perform your own analysis of the tracing data instead of using the available modeling objects.
