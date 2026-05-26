# See also

GetLibraryList SetLibraryList



- 10.25 AppendParam Description Appends the parameter to the request for Extension Grant only. Applies to TokenRequest objects Syntax objectname.AppendParam ( string param, string value )


- Table 10.32:




|Argument|Description|
|---|---|
|objectname|A reference to the TokenRequest object in which you want to append the parameter.|
|param|A string specifying the parameter name.|
|value|A string specifying the parameter value.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. If any argument's value is null, the method returns null. Examples The following example shows the use of the AppendParam function to append a parameter:



int li_return string ls_param, ls_value TokenRequest lnv_TokenRequest



li_return = lnv_TokenRequest.appendparam(ls_param,ls_value)
