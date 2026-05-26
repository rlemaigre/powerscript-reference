# Examples

The following example shows the use of the SetGlobalProperty function to set the value of the cacheSize property to 300:



SSLServiceProvider ssl long rc



... this.GetContextService("SSLServiceProvider", ssl) rc = ssl.SetGlobalProperty("cacheSize", "300")



...



See also GetGlobalProperty (obsolete)
