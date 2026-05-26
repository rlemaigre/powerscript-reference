# Preventing a window from closing

You can prevent a window from being closed with a return code of 1 in the script for the CloseQuery event. Use the RETURN statement.



Examples These statements close the window w_employee and then open the window w_departments:



Close(w_employee) Open(w_departments)



After you call Close, the following statements in the script for the CloseQuery event prompt the user for confirmation and prevent the window from closing:



IF MessageBox('ExitApplication', & 'Exit?', Question!, YesNo!) = 2 THEN



// If no, stop window from closing RETURN 1



END IF



See also Hide Open



- 10.68.2 Syntax 2: For OLEStorage objects Description




Closes an OLEStorage object, saving the object in the associated storage file or object and clearing the connection between them. Close also severs connections with any OLE controls that have opened the object. Calling Close is the same as calling Save and then Clear.



Applies to OLEStorage objects Syntax



olestorage.Close ( )



- Table 10.89:



|Argument|Description|
|---|---|
|olestorage|The OLEStorage object variable that you want to save and close|



Return value Integer.



- Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -1 -- The storage is not open
- -9 -- Other error If olestorage is null, Close returns null. Examples




This example saves and clears the object in the OLEStorage object variable olest_stuff. It also leaves any OLE controls that have opened the object in olest_stuff empty:



integer result result = olest_stuff.Close()



See also Open Save SaveAs



- 10.68.3 Syntax 3: For OLEStream objects Description Closes an OLEStream object. Applies to OLEStream objects Syntax olestream.Close ( )


- Table 10.90:




|Argument|Description|
|---|---|
|olestream|The OLEStream object variable that you want to close|



Return value Integer.



- Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -1 -- The storage is not open
- -9 -- Other error If olestream is null, Close returns null.
