# Usage

For the RetrieveOne function, the JSON string returned from the RESTFul Web service APIs can be an array in the two-level plain JSON format (see Plain JSON: two-level structure in Application Techniques for details) or a JSON object; for the Retrieve function, the JSON string returned from the RESTFul Web service APIs must be an array in the two-level plain JSON format (see Plain JSON: two-level structure in Application Techniques for details).



If the retrieved data is a JSON object that contains one single row, the JSON object will be imported to DataWindow as one row; if the retrieved data is a JSON array that contains multiple rows, only the first element of the JSON array will be imported to DataWindow. The RetrieveOne function is not supported in DataWindow/DataWindowChild/DataStore with the following presentation styles: Composite, Crosstab, OLE 2.0, and RichText. Although the RetrieveOne function is not supported in the Composite DataWindow, you can call GetChild function to get the child DataWindow from the Composite DataWindow, and then call the RetrieveOne function to retrieve the data into the child DataWindow. Return value Long. Returns values as follows. If any argument's value is null, the method returns null. >=0 -- Returns the number of rows if it succeeds



- -1 -- General error
- -2 -- Invalid URL
- -3 -- Cannot connect to the Internet
- -4 -- Timed out
- -7 -- Failed to decompress data
- -10 -- The token is invalid or has expired
- -15 -- Unsupported character sets


- Example 1 The following code example shows the usage of RetrieveOne without the data argument.




RestClient lrc_P024 Long ll_P024_DepartmentID Integer li_p024_RetrieveOneReturn



lrc_P024 = Create RestClient lrc_P024.SetRequestHeaders( "Content-Type:application/json;charset=UTF-8~r~nAcceptEncoding:gzip" )



ll_P024_DepartmentID = 100 li_p024_RetrieveOneReturn=lrc_P024.RetrieveOne(dw_Data,"https://demo.appeon.com/PB/ webapi_client/api/department/retrieveone/"+String(ll_P024_DepartmentID)) If li_p024_RetrieveOneReturn <> 1 Then //Checks if any error information Else



If lrc_P024.GetResponseStatusCode() <> 200 Then



//Processes according to the exception information End If



End If



- Example 2 The following code example shows the usage of RetrieveOne with the data argument.




RestClient lrc_P024 Integer li_p024_RetrieveOneReturn



lrc_P024 = Create RestClient lrc_P024.SetRequestHeaders( "Content-Type:application/json;charset=UTF-8~r~nAcceptEncoding:gzip" )



li_p024_RetrieveOneReturn=lrc_P024.RetrieveOne(dw_Data, "https://demo.appeon.com/ PB/webapi_client/department/retrievebyid", "500") If li_p024_RetrieveOneReturn <> 1 Then //Checks if any error information Else



If lrc_P024.GetResponseStatusCode() <> 200 Then



//Processes according to the exception information End If



End If



See also Retrieve



- 10.536 Reverse Description Reverses the order or characters in a string. Syntax Reverse ( string )


- Table 10.661:




|Argument|Description|
|---|---|
|string|A string whose characters you want to reorder so that the last character is first and the first character is last.|
