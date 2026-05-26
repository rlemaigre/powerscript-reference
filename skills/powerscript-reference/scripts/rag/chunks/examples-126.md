# Examples

The following example shows the use of the GetGlobalProperty function to get the value of the sessLingerTime property:



SSLServiceProvider ssl string ls_values[] long rc



... this.GetContextService("SSLServiceProvider", ssl) rc = ssl.GetGlobalProperty("sessLingerTime", ls_values)



...



See also SetGlobalProperty (obsolete)
