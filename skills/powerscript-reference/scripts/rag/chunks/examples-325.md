# Examples

This example returns the distance from the top of the screen to the top of the workspace area in the w_employee window:



- integer worky


- worky = w_employee.WorkSpaceY() See also PointerX PointerY




WorkSpaceHeight WorkSpaceWidth WorkSpaceX



- 10.742 Write Description Writes data to an opened OLE stream object. Applies to OLEStream objects Syntax olestream.Write ( dataforstream )


- Table 10.915:




|Argument|Description|
|---|---|
|olestream|The name of an OLE stream variable that has been opened|
|dataforstream|A string, blob, or character array whose value you want to write to olestream|



Return value Long. Returns the number of characters or bytes written if it succeeds and one of the following negative values if an error occurs:



- -1 -- Stream is not open
- -2 -- Read error
- -9 -- Other error If any argument's value is null, Write returns null. Examples




This example opens an OLE object in the file MYSTUFF.OLE and assigns it to the OLEStorage object olest_stuff. Then it opens the stream called info in olest_stuff and assigns it to the stream object olestr_info. It writes the contents of the blob variable lb_info to the stream olestr_info. Finally, it saves the storage olest_stuff:



boolean lb_memexists OLEStorage olest_stuff OLEStream olestr_info integer li_result long ll_result



olest_stuff = CREATE OLEStorage li_result = olest_stuff.Open("c:\ole2\mystuff.ole") IF li_result <> 0 THEN RETURN



li_result = olestr_info.Open(olest_stuff, "info", & stgReadWrite!, stgExclusive!)



IF li_result <> 0 THEN RETURN ll_result = olestr_info.Write(lb_info) IF ll_result = 0 THEN olest_stuff.Save()



See also Length Open Read Seek
