# Syntax

objectname.PostData ( data, bufferSize )



- Table 10.590:




|Argument|Description|
|---|---|
|objectname|The name of the HTTPClient object for which you want to post the data.|
|data|A string or blob value specifying the data to post.|
|bufferSize|A long value specifying the buffer size. For the string data, each PowerBuilder character takes up two bytes of storage.|



Return value Integer. Returns values as follows. If any argument's value is null, the method returns null. 1 -- Success



- -1 -- General error
- -2 -- Timed out Examples This example request information in a loop:




Integer i, li_PackCount, li_rc String ls_TotalStrData, ls_NextData Blob lblb_NextData HttpClient lnv_HttpClient



lnv_HttpClient = Create HttpClient // Read the file to ls_TotalStrData and calculate li_PackCount // ... // Construct a POST request // Content-Length indicates the total bytes of data being sent // Each PB character takes up two bytes of storage lnv_HttpClient.SetRequestHeader("Content-Length", String(Len(ls_TotalStrData)*2)) // Start posting data and request information if lnv_HttpClient.PostDataStart("http://demo.appeon.com/PB/webapi_client/ employee/102/photo") = 1 then



for i = 1 to li_PackCount ls_NextData = mid(ls_TotalStrData, (i - 1) * 1024 + 1, 1024) li_rc = lnv_HttpClient.PostData(ls_NextData, Len(ls_NextData)* 2) if li_rc <> 1 then exit



next end if if li_rc = 1 then



li_rc = lnv_HttpClient.PostDataEnd() end if



See also PostDataStart PostDataEnd



- 10.469 PostDataEnd Description Finishes sending the data with POST method. Applies to HTTPClient object Syntax objectname.PostDataEnd ( )


- Table 10.591:




|Argument|Description|
|---|---|
|objectname|The name of the HTTPClient object for which you want to end posting data.|



Return value Integer. Returns values as follows. If any argument's value is null, the method returns null. 1 -- Success



- -1 -- General error
- -2 -- Timed out Examples




Integer i, li_PackCount, li_rc Blob lblb_photo, lblb_NextData HttpClient lnv_HttpClient lnv_HttpClient = Create HttpClient



// Read photo to lblb_photo and calculate li_PackCount // ... lnv_HttpClient.SetRequestHeader("Content-Type", "multipart/form-data;



boundary--------------------------359875084413580694217125") // Construct a POST request lnv_HttpClient.SetRequestHeader("Content-Length", string(len(lblb_photo)))



// Start posting data and request information if lnv_HttpClient.PostDataStart("http://demo.appeon.com/PB/webapi_client/ employee/102/photo") = 1 then



for i = 1 to li_PackCount lblb_NextData = blobmid(lblb_photo, (i - 1) * 1024 + 1, 1024) li_rc = lnv_HttpClient.PostData(lblb_NextData, 1024) if li_rc <> 1 then exit



next end if if li_rc = 1 then



li_rc = lnv_HttpClient.PostDataEnd() end if



See also PostData



PostDataStart



- 10.470 PostDataStart Description Starts sending the data with POST method. Applies to HTTPClient object Syntax objectname.PostDataStart ( urlName )


- Table 10.592:




|Argument|Description|
|---|---|
|objectname|The name of the HTTPClient object for which you want to start posting data.|
|urlName|A string value specifying the URL.|



Return value Integer. Returns values as follows. If any argument's value is null, the method returns null. 1 -- Success



- -1 -- General error
- -2 -- Invalid URL
- -3 -- Cannot connect to the Internet
- -2 -- Timed out Examples This example requests information in a loop:




Integer i, li_PackCount, li_rc Blob lblb_photo, lblb_NextData HttpClient lnv_HttpClient lnv_HttpClient = Create HttpClient



// Read photo to lblb_photo and calculate li_PackCount //... lnv_HttpClient.SetRequestHeader("Content-Type", "multipart/form-data;



boundary--------------------------359875084413580694217125") // Construct a POST request lnv_HttpClient.SetRequestHeader("Content-Length", string(len(lblb_photo)))



// Start posting data and request information if lnv_HttpClient.PostDataStart("http://demo.appeon.com/PB/webapi_client/ employee/102/photo") = 1 then



for i = 1 to li_PackCount lblb_NextData = blobmid(lblb_photo, (i - 1) * 1024 + 1, 1024) li_rc = lnv_HttpClient.PostData(lblb_NextData, 1024) if li_rc <> 1 then exit



next end if if li_rc = 1 then



li_rc = lnv_HttpClient.PostDataEnd() end if



See also PostData PostDataEnd



- 10.471 PostEvent Description Adds an event to the end of the event queue of an object. Applies to Any object, except the application object Syntax objectname.PostEvent ( event, { word, long } )


- Table 10.593:




|Argument|Description|
|---|---|
|objectname|The name of any PowerBuilder object or control (except an application) that has events associated with it.|
|event|A value of the TrigEvent enumerated datatype that identifies a PowerBuilder event (for example, Clicked!, Modified!, or DoubleClicked!) or a string whose value is the name of an event. The event must be a valid event for objectname and a script must exist for the event in objectname.|
|word (optional)|A long value to be stored in the WordParm property of the system's Message object. If you want to specify a value for long, but not word, enter 0. (For cross-platform compatibility, WordParm and LongParm are both longs).|
|long (optional)|A long value or a string that you want to store in the LongParm property of the system's Message object. When you specify a string, a pointer to the string is stored in the LongParm property, which you can access with the String function (see Usage).|
