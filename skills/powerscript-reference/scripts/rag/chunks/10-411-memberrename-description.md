# 10.411 MemberRename Description

Renames a member in an OLE storage. The member can be another OLE object (a substorage) or a stream.



Applies to OLEStorage objects Syntax



olestorage.MemberRename ( membername, newname )



- Table 10.501:




|Argument|Description|
|---|---|
|olestorage|The name of an object variable of type OLEStorage containing the member (substorage or stream) you want to rename|
|membername|A string whose value is the name of the member you want to rename|
|newname|A string whose value is the new name to be assigned to the member|



Return value Integer.



- Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -1 -- The storage is not open
- -2 -- Member not found
- -3 -- Insufficient resources or too many files open
- -4 -- Access denied
- -5 -- Invalid storage state
- -6 -- Duplicate name
- -9 -- Other error If any argument's value is null, MemberRename returns null. Examples




This example creates a storage object and opens an OLE object in a file. It checks whether wordobj is a substorage within that object, and if so renames it to memo and saves the object back to the file:



boolean lb_memexists integer result



stg_stuff = CREATE OLEStorage stg_stuff.Open("c:\ole2\mystuff.ole")



stg_stuff.MemberExists("wordobj", lb_memexists) IF lb_memexists THEN



result = & stg_stuff.MemberRename("wordobj", "memo") IF result = 0 THEN stg_stuff.Save()



END IF
