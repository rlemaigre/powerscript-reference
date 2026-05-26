# Examples

The following example uses Lookup to instantiate the factory interface for the n_Bank_Account component, then it uses the factory's create method to create an instance of the component:



// Instance variable: // Connection myconnect Factory my_Factory CORBAObject mycorbaobj n_Bank_Account my_account long ll_result



ll_result = &



myconnect.lookup(my_Factory,"Bank/n_Bank_Account") mycorbaobj = my_Factory.create() mycorbaobj._narrow(my_account, "Bank/n_Bank_Account") my_account.withdraw(100.0)



See also CreateInstance



- 10.391.2 Syntax 2: For instances of an EJB component Description




Allows a PowerBuilder client or component to obtain the home interface of an EJB component in EAServer in order to create an instance of the component.



Applies to Connection objects, TransactionServer objects Syntax



objname.Lookup (objectvariable , componentname {, homeid} )



- Table 10.479:




|Argument|Description|
|---|---|
|objname|The name of the Connection object used to establish the connection or of an instance of the TransactionServer context object.|
|objectvariable|A global, instance, or local variable of the type of the home interface to be created.|
|componentname|A string whose value is the name of the EJB component to be created. You can optionally prepend a package name followed by a slash to the component name (for example, "mypackage/mycomponent").|
|homeid|A string whose value is the name of the home interface to be created. This argument is optional|



Return value Long. Returns 0 if it succeeds and a negative number if an error occurs. Usage
