# 10.535 RetrieveOne Description

Retrieves one data row to the DataWindow, DataWindowChild, or DataStore from the RESTFul Web service.



If the data received from the RESTful web service is compressed as gzip, it will be automatically decompressed. Only gzip compression format is supported at this moment. The developer can use the SetRequestHeader function to set the Accept-Encoding header to allow only the gzip compression format.



It is not recommended to use this method to process large data (20 MB or 100,000 data rows can be considered as large data based on our tests).



Applies to RestClient object
