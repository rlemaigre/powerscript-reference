# Usage

The GetGlobalProperty function allows PowerBuilder clients that connect to EAServer through SSL to access global SSL properties.



Any properties set using the SSLServiceProvider interface are global to all connections made by the client to all EAServer servers. You can override any of the global settings at the connection level by specifying them as options to the Connection object.



Only clients can get and set SSL properties. Server components do not have permission to use the SSLServiceProvider service.
