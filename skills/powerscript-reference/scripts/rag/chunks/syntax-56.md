# Syntax

GetDataDDE ( string )



- Table 10.238:




|Argument|Description|
|---|---|
|string|A string variable in which GetDataDDE will put the data received from a remote DDE application|



Return value Integer.



- Returns 1 if it succeeds and -1 if an error occurs (such as the function was called in the wrong context). If string is null, GetDataDDE returns null. Usage




GetDataDDE is usually called in the window-level script for a RemoteSend event when your application is a DDE server or HotLinkAlarm event when your application is a DDE client.
