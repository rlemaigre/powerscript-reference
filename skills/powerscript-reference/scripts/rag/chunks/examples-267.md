# Examples

This example calls the ConnectToObject function to connect to an Excel worksheet and sets a timeout period of 900,000 milliseconds (15 minutes):



OLEObject ole1 integer rs long interval interval = 900000 ole1 = create OLEObject rs = ole1.ConnectToObject("Excel.Application") rs = ole1.SetAutomationTimeOut(interval)



- 10.596 SetBody Description Sets the request body. Applies to OAuthRequest objects Syntax objectname.SetBody ( string data ) objectname.SetBody ( blob data ) objectname.SetBody ( string data, encoding encodingType )
