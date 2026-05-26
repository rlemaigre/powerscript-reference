# 10.692 Submit Description

Sends the data to the server via the HTTP POST method and then gets the response body from the server.



It is not recommended to use this method to process large data (20 MB or 100,000 data rows can be considered as large data based on our tests).



Applies to RESTClient object Syntax



objectname.Submit(string urlName, ref string response, DWControl dwObject{, boolean format})



objectname.Submit(string urlName, ref string response, DWControl dwObject {,DWBuffer dwbuffer}, boolean changedonly, boolean format)



objectname.Submit(string urlName, ref string response, DWControl dwObject, boolean primarydata, boolean filterdata, boolean deletedata, boolean dwcdata {, boolean format})



objectname.Submit(string urlName, ref string response, DWControl dwObject, DWBuffer dwbuffer{,long startrow{, long endrow{, long startcol{, long endcol}}}} {, boolean format})



objectname.Submit(string urlName, ref string response, ref JsonPackage package)
