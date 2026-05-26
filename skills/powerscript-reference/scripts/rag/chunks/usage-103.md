# Usage

The Retrieve function retrieves data only when the JSON key name matches with the DataWindow column name; if none of the JSON key name matches with any of the DataWindow column name, then no data will be inserted into the DataWindow and the function returns error code -17.



For the Retrieve function, the JSON string returned from the RESTFul Web service APIs must be an array in the two-level plain JSON format (see Plain JSON: two-level structure in Application Techniques for details); for the RetrieveOne function, the JSON string returned from the RESTFul Web service APIs can be an array in the two-level plain JSON format (see Plain JSON: two-level structure in Application Techniques for details) or a JSON object.



The Retrieve function is not supported in DataWindow/DataWindowChild/DataStore with the following presentation styles: Composite, Crosstab, OLE 2.0, and RichText.



Although the Retrieve function is not supported in the Composite DataWindow, you can call GetChild function to get the child DataWindow from the Composite DataWindow, and then call the Retrieve function to retrieve the data into the child DataWindow.



The Retrieve function will not trigger the DataWindow RetrieveRow event considering the performance effect, although it will trigger the RetrieveStart and RetrieveEnd events.



Return value Long. Returns values as follows. If any argument's value is null, the method returns null. >=0 -- Returns the number of rows if it succeeds



- -1 -- General error
- -2 -- Invalid URL
- -3 -- Cannot connect to the Internet
- -4 -- Timed out
- -5 -- Get token error
- -7 -- Failed to automatically decompress the response body
- -10 -- The token is invalid or has expired
- -15 -- Unsupported character sets
- -16 -- The JSON is not a plain JSON with two-level structure
- -17 -- No data is inserted into the DataWindow because no key in the JSON matches any column name in it


- Example 1 This example retrieves data to a DataWindow:



long ll_return RestClient lnv_RestClient lnv_RestClient = Create RestClient



// Set DataObject dw_emp.DataObject = "d_sq_gr_emp"



// Send request using GET ll_return = lnv_RestClient.Retrieve(dw_emp, "http://demo.appeon.com/PB/ webapi_client/employee/102")



// Check the return value if ll_return >= 0 then



MessageBox("Success", "Rows = " + String(ll_return)) else



MessageBox("Error", "Failed to retrieve data.") end if



- Example 2 This example retrieves data to a DataStore:




long ll_return RestClient lnv_RestClient datastore lds_datastore



lnv_RestClient = Create RestClient lds_datastore = create datastore



// Set DataObject lds_datastore.DataObject = "d_sq_gr_emp"



// Send request using GET ll_return = lnv_RestClient.Retrieve(lds_datastore, "http://demo.appeon.com/PB/ webapi_client/employee/102")



// Check the return value if ll_return >= 0 then



MessageBox("Success", "Rows = " + String(ll_return)) else



MessageBox("Error", "Failed to retrieve data.") end if



- Example 3 This example retrieves data to a DataWindowChild:



int li_return RestClient lnv_restClient DataWindowChild ldwc_dept



lnv_restClient = create RestClient //get the DataWindowChild dw_emp.getchild("dept_id", ldwc_dept) //Get data from web api using GET method li_return = lnv_restClient.retrieve(ldwc_dept, "http://demo.appeon.com/pb/ webapi_client/department") if li_return >= 0 then



messagebox("Success", "Rows = " + string(li_return)) else



messagebox("Error", "Failed to retrieve data.") end if



- Example 4 This example passes the string data using POST method and retrieves data to a DataWindow.



long ll_return RestClient lnv_RestClient lnv_RestClient = Create RestClient



String ls_json = '{"empId":100, "fname":" John", "lname": "Guevara"}' // Construct a POST request (supports all headers) lnv_RestClient.SetRequestHeader("Content-Type", "application/json;charset=UTF-8") // Send the POST request (add data to the body and automatically set Content-Length



header) ll_return = lnv_RestClient.Retrieve(dw_emp, "http://demo.appeon.com/PB/ webapi_client/employee", ls_Json)



// Check the return value if ll_return >= 0 then



MessageBox("Success", "Rows = " + String(ll_return)) else



MessageBox("Error", "Failed to retrieve data.") end if



- Example 5 This example passes the blob data using POST method and retrieves data to a DataWindow.




Long ll_rc Blob lblb_data RestClient lnv_RestClient lnv_RestClient = Create RestClient



// Set DataObject dw_1.DataObject = "d_employee"



// Construct a POST request (supports all headers) lnv_RestClient.SetRequestHeader("Content-Type", "application/json;charset=UTF-8") // Content-Length is set by Retrieve automatically // ... lblb_data = blob('{"empId":100, "fname":"John", "lname":"Guevara"}', EncodingUTF8!) // Send the POST request (add data to the body and automatically set Content-Length



header) ll_rc = lnv_RestClient.Retrieve(dw_1, "http://demo.appeon.com/PB/webapi_client/ employee/blob", lblb_data)



// Check the return value if ll_rc >= 0 then



MessageBox("Success", "Rows = " + String(ll_rc)) else



MessageBox("Error", "Failed to retrieve data.") end if



- Example 6 This example passes the string data using POST method and retrieves data to a DataStore.



String ls_json Long ll_rc Datastore lds_1 RestClient lnv_RestClient lnv_RestClient = Create RestClient



lds_1 = Create Datastore lds_1.DataObject = "d_employee"



ls_json = '{"city": "Needham", "state": "MA", zipCode": "02192"}' // Construct a POST request (supports all headers) lnv_RestClient.SetRequestHeader("Content-Type", "application/json;charset=UTF-8") // Content-Length is set by Retrieve automatically // ... // Send the POST request (add data to the body and automatically set Content-Length



header) ll_rc = lnv_RestClient.Retrieve(lds_1, "http://demo.appeon.com/PB/webapi_client/ employee", ls_Json)



// Check the return value if ll_rc >= 0 then



MessageBox("Success", "Rows = " + String(ll_rc)) else



MessageBox("Error", "Failed to retrieve data.") end if



- Example 7 This example passes the blob data using POST method and retrieves data to a DataStore.




Long ll_rc RestClient lnv_RestClient lnv_RestClient = Create RestClient blob lblb_data



Datastore lds_1 lds_1 = Create Datastore



// Set DataObject lds_1.DataObject = "d_employee"



// Construct a POST request (supports all headers) lnv_RestClient.SetRequestHeader("Content-Type", "application/json;charset=UTF-8") // Content-Length is set by Retrieve automatically // ... lblb_data = blob('{"empId":100, "fname":"John", "lname":"Guevara"}', EncodingUTF8!) // Send the POST request (add data to the body and automatically set Content-Length



header) ll_rc = lnv_RestClient.Retrieve(lds_1, "http://demo.appeon.com/PB/webapi_client/ employee/blob", lblb_data)



// Check the return value if ll_rc >= 0 then



MessageBox("Success", "Rows = " + String(ll_rc)) else



MessageBox("Error", "Failed to retrieve data.") end if
