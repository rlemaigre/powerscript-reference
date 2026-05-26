# 10.313 Init (obsolete) Description

Initializes an instance of the CORBACurrent service object for client- or componentmanaged transactions.



Obsolete function Init is obsolete, because EAServer is no longer supported since PowerBuilder 2017.



Applies to CORBACurrent objects Syntax



CORBACurrent.Init ( { connection | URL} )



- Table 10.383:




|Argument|Description|
|---|---|
|CORBACurrent|Reference to the CORBACurrent service instance.|
|connection|The name of the Connection object for which a connection has already been established to a valid EAServer host. Either connection or URL is required if the Init function is called by a client.|
|URL|String. The name of a URL that identifies a valid EAServer host. Either connection or URL is required if the Init function is called by a client.|
