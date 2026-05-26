# 10.454 PBGetCookies (Obsolete) Description Gets the cookies associated with a .NET Web service that you invoke from a proxy object. Syntax

proxyObj.PBGetCookies ( URI )



- Table 10.575:




|Argument|Description|
|---|---|
|proxyObj|The proxy object that you deploy from a Web Service Proxy project|
|URI|The URI of the Web service that you invoke with the proxy object|



Return value SoapPBCookie[ ]



. An array of an instance of the SoapPBCookie class. Usage



The SoapPBCookie class is defined in the pbwsclient190.pbx extension that you can import into your application library. You must first connect to the Web service with an instance of the SoapConnection class that is also defined in this extension.



For more information about connecting to a Web service, see Chapter 28, Building a Web Services Client (Obsolete) in Application Techniques. For cookie properties you can set or return with the SoapPBCookie class, see Section 3.3, “SoapPBCookie” in PowerBuilder Extension Reference.
