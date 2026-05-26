# 10.410 MemberExists Description

Determines whether the named member is part of an OLE object in a storage. The member can be another OLE object (a substorage) or a stream.



Applies to OLEStorage objects Syntax



olestorage.MemberExists ( membername, exists )



- Table 10.500:




|Argument|Description|
|---|---|
|olestorage|The name of an object variable of type OLEStorage that you want to check|
|membername|A string whose value is the name of the member that you want to check|
|exists|A boolean variable that will store whether or not the member exists|



Return value Integer.



- Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -1 -- The storage is not open
- -9 -- Other error If any argument's value is null, MemberExists returns null. Examples




This example creates a storage object and opens an OLE object in a file. It checks whether wordobj is a substorage within that object and, if so, deletes it and saves the object back to the file:



boolean lb_memexists integer result



stg_stuff = CREATE OLEStorage stg_stuff.Open("c:\ole2\mystuff.ole")



stg_stuff.MemberExists("wordobj", lb_memexists) IF lb_memexists THEN



result = stg_stuff.MemberDelete("wordobj")



IF result = 0 THEN stg_stuff.Save( ) END IF



See also MemberDelete MemberRename Open
