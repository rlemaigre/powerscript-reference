# See also

SetItem SetState SetTop



- 10.612 SetGlobalProperty (obsolete) Description Sets the value of an SSL global property.




Obsolete function



SetGlobalProperty is obsolete, because EAServer is no longer supported since PowerBuilder 2017.



Applies to SSLServiceProvider object Syntax



sslserviceprovider.SetGlobalProperty ( property, value )



- Table 10.757:




|Argument|Description|
|---|---|
|sslserviceprovider|Reference to the SSLServiceProvider service instance.|
|property|The name of the SSL property you want to set. For a complete list of supported SSL properties, see your EAServer documentation for the Connection object.|
|value|String value of the SSL property.|



Return value Long. Returns one of the following values:



- 0 -- Success


- -1 -- Unknown property
- -2 -- Property is read only
- -3 -- Invalid value for property
- -10 -- An EAServer or SSL failure has occurred
- -11 -- Bad argument list Usage




The SetGlobalProperty function allows PowerBuilder clients that connect to EAServer through SSL to set global SSL properties.



Any properties set using the SSLServiceProvider interface are global to all connections made by the client to all EAServer servers. You can override any of the global settings at the connection level by specifying them as options to the Connection object.



Only clients can get and set SSL properties. Server components do not have permission to use the SSLServiceProvider service.
