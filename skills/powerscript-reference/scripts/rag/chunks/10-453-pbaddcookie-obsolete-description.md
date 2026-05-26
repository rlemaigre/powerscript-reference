# 10.453 PBAddCookie (Obsolete) Description

Adds a cookie to the Web service proxy object that will be sent to the server each time you call a Web service method.



Syntax



proxyObj.PBAddCookie ( acookie )



- Table 10.574:




|Argument|Description|
|---|---|
|proxyObj|The proxy object that you deploy from a Web Service Proxy project|
|acookie|An any containing information about the cookie you want to add|



Return value



None. Usage



If there is already a cookie with the same name and URI that you set in the acookie argument, you will replace the existing cookie when you invoke a Web service method. For the types of information you can include in the acookie argument, see the methods of the SoapPBCookie class in Section 3.3, “SoapPBCookie” in PowerBuilder Extension Reference.



The SoapPBCookie class is defined in the pbwsclient190.pbx extension that you can import into your application library. It is valid for .NET Web services engine only.



Examples



The following example adds a cookie named myCookie that is sent to the server after you connect to a Web service from an objProxy proxy client:



SoapPBCookie acookie acookie=create SoapPBCookie



acookie.SetUri("http://myServer/webservice/Svc1.wsdl") acookie.SetName("myCookie") acookie.SetValue("My Value") objProxy.PBAddCookie(acookie)



See also PBGetCookies
