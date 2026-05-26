# Timeout value for sending a request

The PostURL function relies on wininet.dll to post a request and returns -1 when the posting time exceeds the DLL timeout value. When you install Internet Explorer 7 or later, the default timeout value for this DLL is 30 seconds. Although it is possible to change the timeout value by configuring a ReceiveTimeOut registry key under HKEY_CURRENT_USER\ SOFTWARE\Microsoft\Windows\CurrentVersion \Internet Settings, this is not recommended, since it can also affect the behavior of the Internet Explorer browser.
