# Obsolete function

GetGlobalProperty is obsolete, because EAServer is no longer supported since PowerBuilder 2017.



Applies to SSLServiceProvider object Syntax



sslserviceprovider.GetGlobalProperty ( property, values)



- Table 10.265:




|Argument|Description|
|---|---|
|sslserviceprovider|Reference to the SSLServiceProvider service instance.|
|property|The name of the SSL property for which you want to return values. For a complete list of supported SSL properties, see your EAServer documentation for the Connection object.|
|values|An array of string values for the specified SSL property.|



Return value Long. Returns one of the following values: 0 -- Success



- -1 -- Unknown property
- -3 -- Property has no value
- -10 -- An EAServer or SSL failure has occurred
- -11 -- Bad argument list
