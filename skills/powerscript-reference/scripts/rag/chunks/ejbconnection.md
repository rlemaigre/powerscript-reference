# EJBConnection

You can also use the Lookup method of the EJBConnection PowerBuilder extension object to create an instance of an EJB component running on any J2EE compliant application server. For more information, see Section 2.1.5, “Lookup” in PowerBuilder Extension Reference.



The Lookup function creates an instance of the home interface of an EJB component so that you can use it to create an instance of the EJB. Use the Connection object's Lookup function to enable a PowerBuilder client to access a component running in EAServer. You can supply



a server name or a list of server names in the location property of the Connection object. Use the TransactionServer object's Lookup function to enable a PowerBuilder component running in EAServer to access an EJB component running on the same server.



The Lookup function uses the standard CORBA naming service to resolve componentname to a CORBA object that is then narrowed to the home interface name of the component. If you do not specify the third argument to the Lookup function, PowerBuilder expects the home interface name to have the format PackageName/CompNameHome. However, most EJB components use a standard Java package directory structure and the home interface name has a format such as com/domain/project/CompNameHome.



You can ensure that a PowerBuilder client or component can locate the component's home interface by supplying the third argument to the Lookup function to specify the home interface name. A component's home interface name is defined in the com.sybase.jaguar.component.home.ids property in the EAServer repository. The home.ids property has a format like this:



IDL:com/domain/project/CompNameHome:1.0



The third argument should be the value of the component's home.ids string without the leading IDL: and trailing :1.0. For example:



ts.lookup(MyCartHome, "shopping/cart", & "com/sybase/shopping/CartHome")



Alternatively, you can use the fully-qualified Java class name of the home interface specified in dot notation. For example:



ts.lookup(MyCartHome, "shopping/cart", & "com.sybase.shopping.CartHome")
