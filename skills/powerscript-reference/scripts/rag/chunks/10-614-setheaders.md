# 10.614 SetHeaders

- 10.614.1 Syntax 1: for TokenRequest objects Description




Sets the header information of all requests. If SetHeader or SetHeaders is not used to set the header for Authorization, the program will automatically set the header for Authorization and Content-type.



Applies to TokenRequest objects Syntax



objectname.SetHeaders ( string headers )



- Table 10.760:




|Argument|Description|
|---|---|
|objectname|A reference to the TokenRequest object in which you want to set the request header.|
|headers|A string specifying all of the header names.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null.
