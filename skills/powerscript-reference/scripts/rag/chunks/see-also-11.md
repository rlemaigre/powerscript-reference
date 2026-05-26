# See also

GetBody GetHeader GetHeaders SetAccessToken SetBody SetHeader SetHeaders



- 10.65 ClearParams Description Clears all of the parameters appended by the AppendParam function. Applies to TokenRequest objects Syntax objectname.ClearParams ( )


- Table 10.82:




|Argument|Description|
|---|---|
|objectname|A reference to the TokenRequest object in which you want to clear the parameter.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Examples



The following example shows the use of the ClearParams function to clear the appended parameters:



int li_return TokenRequest lnv_TokenRequest



li_return = lnv_TokenRequest.clearparams( )



See also AppendParam ClearHeaders GetHeader GetHeaders SetHeader SetHeaders



- 10.66 ClearRequestHeaders Description Clears the headers of the request. Applies to HTTPClient and RestClient objects Syntax objectname.ClearRequestHeaders ( )

- Table 10.83:



|Argument|Description|
|---|---|
|objectname|The name of the HTTPClient or RestClient object from which you want to clear the request header|



Return value Integer. Returns 1 for success and -1 for failure. Examples This example clears the request headers in the object lnv_HttpClient:



HttpClient lnv_HttpClient integer li_return lnv_HttpClient = Create HttpClient



li_return = lnv_HttpClient.ClearRequestHeaders()



See also GetRequestHeader GetRequestHeaders SetRequestHeader SetRequestHeaders



10.67 Clipboard



Retrieves or replaces the contents of the system clipboard.



- Table 10.84:






|To|Use|
|---|---|
|Retrieve or replace the contents of the system clipboard with text|Syntax 1|
|Replace the contents of the system clipboard with a bitmap image of a graph|Syntax 2<br><br>|
