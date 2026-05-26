# Examples

This example opens the object in the file MYSTUFF.OLE and loads it into the OLEStorage variable stg_stuff. Then it checks whether a stream called info exists in the OLE object, and if so, opens it with read access. This example does not include code to close and destroy any of the objects that were opened.



integer result boolean str_found OLEStorage stg_stuff OLEStream mystream



stg_stuff = CREATE OLEStorage result = stg_stuff.Open("c:\ole2\mystuff.ole") IF result < 0 THEN RETURN



result = stg_stuff.MemberExists("info", str_found) IF result < 0 THEN RETURN



IF str_found THEN mystream = CREATE OLEStream result = mystream.Open(stg_stuff, "info", &



stgRead!, stgDenyNone!) IF result < 0 THEN RETURN



END IF
