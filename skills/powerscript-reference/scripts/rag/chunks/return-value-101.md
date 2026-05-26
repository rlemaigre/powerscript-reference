# Return value

- Integer. Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -1 -- Stream is not open
- -2 -- Read error
- -9 -- Other error If any argument's value is null, Read returns null. Examples




This example opens an OLE object in the file MYSTUFF.OLE and assigns it to the OLEStorage object stg_stuff. Then it opens the stream called info in stg_stuff and assigns it to the stream object olestr_info. Finally, it reads the contents of olestr_info into the blob lb_info.



The example does not check the functions' return values for success, but you should be sure to check the return values in your code:



boolean lb_memexists OLEStorage stg_stuff OLEStream olestr_info blob lb_info



stg_stuff = CREATE OLEStorage stg_stuff.Open("c:\ole2\mystuff.ole") olestr_info.Open(stg_stuff, "info", &



stgRead!, stgExclusive!)



olestr_info.Read(lb_info)



See also Open Length Seek Write



- 10.505 ReadData Description Reads the response body. Applies to HTTPClient object Syntax objectname.ReadData ( data, bufferSize )


- Table 10.628:




|Argument|Description|
|---|---|
|objectname|The name of the HTTPClient object for which you want to read the response body.|
|data|A blob value into which the function returns data.|
|bufferSize|A long value specifying the buffer size.|



Return value Integer. Returns values as follows. If any argument's value is null, the method returns null. 1 -- Success



- 0 -- Reading data is finished


- -1 -- General error
- -2 -- Timed out Examples




Integer li_rc Blob lblb_photo, lblb_NextData HttpClient lnv_HttpClient



lnv_HttpClient = Create HttpClient // Not to read data automatically after sending request (default is true) lnv_HttpClient.AutoReadData = false // Send request using GET method li_rc = lnv_HttpClient.SendRequest("GET", "http://demo.appeon.com/PB/webapi_client/ employee/102/photo")



// Receive large data if li_rc = 1 and lnv_HttpClient.GetResponseStatusCode() = 200 then



do while true li_rc = lnv_HttpClient.ReadData(lblb_NextData, 1024*16) if li_rc = 0 then exit // Finish receiving data if li_rc = -1 then exit // Error occurred lblb_photo += lblb_NextData



loop end if



- 10.506 Real Description Converts a string value to a real datatype or obtains a real value that is stored in a blob. Syntax Real ( stringorblob )


- Table 10.629:




|Argument|Description|
|---|---|
|stringorblob|The string whose value you want returned as a real value or a blob in which the first value is the real value. The rest of the contents of the blob is ignored. Stringorblob can also be an Any variable containing a string or blob.|
