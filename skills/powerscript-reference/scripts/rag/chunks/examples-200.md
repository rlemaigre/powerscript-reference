# Examples

This example opens the object in the file MYSTUFF.OLE and loads it into the OLEStorage variable stg_stuff:



integer result OLEStorage stg_stuff



stg_stuff = CREATE OLEStorage result = stg_stuff.Open("c:\ole2\mystuff.ole")



This example opens the same object for reading:



integer result OLEStorage stg_stuff



stg_stuff = CREATE OLEStorage result = stg_stuff.Open("c:\ole2\mystuff.ole", &



stgRead!)



This example opens the object in the file MYSTUFF.OLE and loads it into the OLEStorage variable stg_stuff, as in the previous example. Then it opens the substorage drawing_1 into a second storage variable, using Syntax 6 of Open. This example does not include code to close and destroy any of the objects that were opened.



integer result OLEStorage stg_stuff, stg_drawing



stg_stuff = CREATE OLEStorage result = stg_stuff.Open("c:\ole2\mystuff.ole") IF result >= 0 THEN



stg_drawing = CREATE OLEStorage result = opest_drawing.Open("drawing_1", &



stgRead!, stgDenyNone!, stg_stuff) END IF



This example opens the object in the file MYSTUFF.OLE and loads it into the OLEStorage variable stg_stuff. Then it checks whether a stream called info exists in the OLE object, and if so, opens it with read access using Syntax 7 of Open. This example does not include code to close and destroy any of the objects that were opened.



integer result boolean str_found OLEStorage stg_stuff OLEStream mystream



stg_stuff = CREATE OLEStorage result = stg_stuff.Open("c:\ole2\mystuff.ole") IF result < 0 THEN RETURN



result = stg_stuff.MemberExists("info", str_found) IF result < 0 THEN RETURN



IF str_found THEN mystream = CREATE OLEStream result = mystream.Open(stg_stuff, "info", &



stgRead!, stgDenyNone!) IF result < 0 THEN RETURN



END IF



See also Close Save SaveAs



- 10.428.6 Syntax 6: For opening an OLE storage member into a storage Description




Opens a member of an open OLE storage and loads it into another OLE storage object in memory.



Applies to OLE storage objects Syntax



olestorage.Open ( substoragename, readmode, sharemode, sourcestorage )



- Table 10.526:




|Argument|Description|
|---|---|
|olestorage|The name of a object variable of type OLEStorage into which you want to load the OLE object.|
|substoragename|A string specifying the name of the storage member within sourcestorage that you want to open. Note the reversed order of the sourcestorage and substoragename arguments from Syntax 4.|
|readmode|A value of the enumerated datatype stgReadMode that specifies the type of access you want for substoragename. Values are:<br><br>• stgReadWrite! -- Read/write access. If the member does not exist, Open creates it.<br>• stgRead! -- Read-only access. You cannot change substoragename.<br>• stgWrite! -- Write access. You can rewrite substoragename but not read its current contents. If the member does not exist, Open creates it.<br>|
|sharemode|A value of the enumerated datatype stgShareMode that specifies how other attempts, by your own or other applications, to open substoragename will fare. Values are:<br><br>• stgExclusive! -- (Default) No other attempt to open substoragename will succeed.<br>• stgDenyNone! -- Any other attempt to open substoragename will succeed.<br>• stgDenyRead! -- Other attempts to open substoragename for reading will fail.<br>• stgDenyWrite -- Other attempts to open substoragename for writing will fail.<br>|
|sourcestorage|An open OLEStorage object containing substoragename.|



Return value Return value Integer.



- Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -2 -- The parent storage is not open
- -3 -- The member is not found (when opened for reading)
