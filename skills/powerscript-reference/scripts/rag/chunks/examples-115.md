# Examples

Assuming that your PowerBuilder DDE client application has established a hot link with row 7, column 15 of an Excel spreadsheet, and that the value in that row and column address has changed from red to green (which triggers the HotLinkAlarm event in your application), this script for the HotLinkAlarm event calls GetDataDDE to store the new value in the variable Str20:



// In the script for a HotLinkAlarm event string Str20 GetDataDDE(Str20)



See also GetDataDDEOrigin
