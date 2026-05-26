# Example 4

This example sends a blob query when requesting information from a URL using the POST method:



Integer li_rc String ls_ReturnJson HttpClient lnv_HttpClient lnv_HttpClient = Create HttpClient Blob lblb_data lblb_data = Blob('{"empId":101, "fname":" John", "lname": "Guevara"}',



EncodingUTF8!) // Sends request using POST method (to add the string data to the body and set to



the Content-Length header) li_rc = lnv_HttpClient.SendRequest("POST", "http://demo.appeon.com/PB/ webapi_client/employee/blob", lblb_data)



// Obtains the response data if li_rc = 1 and lnv_HttpClient.GetResponseStatusCode() = 200 then



lnv_HttpClient.GetResponseBody(ls_ReturnJson) end if



- 10.587 SeriesCount Description Counts the number of series in a graph. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax controlname.SeriesCount ( { graphcontrol } )


- Table 10.725:




|Argument|Description|
|---|---|
|controlname|The name of the graph for which you want the number of series, or the name of the DataWindow control containing the graph|
|graphcontrol (Data control only) (optional)|AWindowstring whose value is the name of the graph in the DataWindow control for which you want the number of series|



Returns the number of series in the graph if it succeeds and -1 if an error occurs. If any argument's value is null, SeriesCount returns null.
