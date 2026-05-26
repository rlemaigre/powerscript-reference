# 10.574 SelectObject Description

Selects or clears the object in an OLE control but does not activate the server application. The server's menus are added to the PowerBuilder application's menus.



Applies to OLE controls Syntax



olecontrol.SelectObject ( selectstate )



- Table 10.710:




|Argument|Description|
|---|---|
|olecontrol|The name of the OLE control containing the object you want to select|
|selectstate|A boolean value indicating whether you want to select or deselect the object|



Return value Integer.



- Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -1 -- Control is empty
- -9 -- Other error If any argument's value is null, SelectObject returns null. Examples This example selects the object in the OLE control ole_1:




integer result result = ole_1.SelectObject(TRUE)
