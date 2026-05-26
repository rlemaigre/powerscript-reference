# Example 3

This example packages the data of DataWindow, DataStore and DataWindowChild object and assigns the value to a string.



string ls_json datastore lds_employee datawindowchild ldwc_active JsonPackage lnv_package lnv_package = create JsonPackage



...//Initialize data for lds_employee, ldwc_active // Package the data lnv_package.SetValue("d_department", dw_department, false) lnv_package.SetValue("d_employee", lds_employee) lnv_package.SetValue("dddw_active", ldwc_active, false) ls_json = lnv_package.GetJsonString()



See also GetJsonBlob



- 10.241 GetJWTToken Description Gets the JWT token using the POST method. Applies to RESTClient objects Syntax objectname.GetJWTToken (string urlName, string data, ref string token)


- Table 10.299:




|Argument|Description|
|---|---|
|objectname|The name of the RESTClient object from which you want to get the JWT token.|
|urlName|A string value specifying the URL.|
|data|A string value specifying the data to send.<br><br>If the user sets the encoding charset in the Content-Type request header, this function will encode the data with the specified charset; if charset is not specified, this function will encode the data in UTF-8 by default.|



|Argument|Description|
|---|---|
|token|The server response which contains the access token. If RESTClient failed to send request or server provides no response, the response value is an empty string. If the response value is compressed as gzip, it will be automatically decompressed. Only gzip compression format is supported at this moment. If the server specified the ContentType response header, and in which the encoding charset is specified, this function will encode the data with the specified charset; if charset is not specified, this function will encode the data in UTF-8 by default.|
