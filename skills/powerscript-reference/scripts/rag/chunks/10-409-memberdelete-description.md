# 10.409 MemberDelete Description

Deletes a member from an OLE object in a storage. The member can be another OLE object (a substorage) or a stream.



Applies to OLEStorage objects Syntax



olestorage.MemberDelete ( membername )



- Table 10.499:




|Argument|Description|
|---|---|
|olestorage|The name of an object variable of type OLEStorage containing the member (substorage or stream) you want to delete|
|membername|A string specifying the name of the member you want to delete from the storage|



Return value Integer.



- Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -1 -- The storage is not open
- -2 -- Member not found
- -3 -- Insufficient resources or too many files open
- -4 -- Access denied
- -5 -- Invalid storage state
- -9 -- Other error If any argument's value is null, MemberDelete returns null. Examples




This example creates a storage object and opens an OLE object in a file. It checks whether wordobj is a substorage within that object and, if so, deletes it and saves the object back to the file:



boolean lb_memexists integer result



stg_stuff = CREATE OLEStorage stg_stuff.Open("c:\ole2\mystuff.ole")



stg_stuff.MemberExists("wordobj", lb_memexists) IF lb_memexists THEN



result = stg_stuff.MemberDelete("wordobj") IF result = 0 THEN stg_stuff.Save()



END IF



See also MemberExists MemberRename Open
