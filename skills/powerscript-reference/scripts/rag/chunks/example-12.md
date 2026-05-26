# Example 12

The client sends the server a request which includes the "gzip" compression method; then the server compresses and returns the data as requested; and then the client automatically extracts the data.



Integer li_Return RestClient lrc_Dept



lrc_Dept = Create RestClient lrc_Dept.SetRequestHeader("Content-Type", "application/json;charset=UTF-8") // Sets the compression method in the request header lrc_Dept.SetRequestHeader("Accept-Encoding","gzip") // DataWindow column name and type must match with those returned from // URL: https://demo.appeon.com/PB/webapi_client/department dw_submit.DataObject = 'd_example_dept' // dw_submit datawindow will display the return data li_Return = lrc_Dept.Retrieve(dw_submit,"https://demo.appeon.com/PB/webapi_client/ department") If li_Return < 0 Then



// Prints the error message End If



See also RetrieveOne
