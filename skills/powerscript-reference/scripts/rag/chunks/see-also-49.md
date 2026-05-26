# See also

Close Open Save



- 10.550.5 Syntax 5: For saving an OLE storage object in another OLE storage Description Saves an OLE storage object to another OLE storage object variable in memory. Applies to OLE storage objects Syntax olestorage.SaveAs ( substoragename, targetstorage )


- Table 10.681:




|Argument|Description|
|---|---|
|olestorage|The name of an object variable of type OLEStorage containing the OLE object you want to save.|
|substoragename|A string whose value is the name of a substorage within targetstorage. If substorage does not exist, SaveAs creates it.|
|targetstorage|The name of an object variable of OLEStorage in which to store the object in olestorage. Note the reversed order of the substoragename and targetstorage arguments from Syntax 4.|



Return value Integer.



- Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -1 -- The storage is not open
- -2 -- The storage name is invalid
- -3 -- The parent storage is not open
- -4 -- The file already exists
- -5 -- Insufficient memory -6 -- Too many files open -7 -- Access denied
- -9 -- Other error If any argument's value is null, SaveAs returns null. Usage




The Open function establishes a connection between a storage file and a storage object, or a storage file or object and an OLE control. The Save function uses this connection to save the OLE data.



When you call SaveAs for a storage object, it closes the current connection between the storage object and a file and creates a new file for the storage object's data. For information about the structure of storage files, see the Open function. Examples



This example saves the object in the OLEStorage variable stg_stuff in a second storage variable stg_clone as the substorage copy1:



integer result result = stg_stuff.SaveAs("copy1", stg_clone)
