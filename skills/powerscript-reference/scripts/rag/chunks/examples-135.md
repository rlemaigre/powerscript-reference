# Examples

The following script for a menu selection loops through the open sheets in front-to-back order and displays the names of the open sheets in the ListBox lb_sheets:



boolean bValid window wSheet



lb_sheets.Reset() wSheet = ParentWindow.GetFirstSheet() IF IsValid(wSheet) THEN



lb_sheets.AddItem(wSheet.Title) DO wSheet = ParentWindow.GetNextSheet(wSheet) bValid = IsValid (wSheet) IF bValid THEN lb_sheets.AddItem(wSheet.Title) LOOP WHILE bValid



END IF



See also GetFirstSheet IsValid



- 10.251 GetOAuthToken Description Gets the OAuth 2.0 access token. Applies to RESTClient objects Syntax objectname.GetOAuthToken (TokenRequest tokenRequest, ref string token)


- Table 10.308:




|Argument|Description|
|---|---|
|objectname|The name of the RESTClient object from which you want to get the OAuth 2.0 access token.|



|Argument|Description|
|---|---|
|tokenRequest|The OAuth2.0 Access Token Request object.|
|token|The access token returned from the server.|
