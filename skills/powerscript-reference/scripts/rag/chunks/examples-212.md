# Examples

The following example enters the names and values of the cookies associated with a Web service in a MultiLineEdit control:



wsproxy_service proxy soapPBCookie retu_cookies[] //create instance of a SoapConnection object //create instance of the Web service proxy endpoint = "https://www.appeon.com/webservice/Svc.asmx" retu_cookies = proxy.pbgetcookies(endpoint) mle_1.text = string(upperbound(retu_cookies))&



+" total cookies" + "~r~n" for i= 1 to upperbound(retu_cookies) mle_1.text += "Cookie"+ string(i)&



+"~r~n=====================~r~n" mle_1.text +="getName = " &



+ retu_cookies[i].getname() +"~r~n" mle_1.text +="getValue = " &

+ retu_cookies[i].getvalue()+"~r~n" next



See also PBAddCookie



- 10.455 PBGetMenuString Description Gets the name of the item at a given position in a menu. Syntax PBGetMenuString ( hmenu, nPos, caption, nMaxLength)
