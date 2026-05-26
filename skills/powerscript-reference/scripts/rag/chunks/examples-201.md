# Examples

This example opens the object in the file MYSTUFF.OLE and loads it into the OLEStorage variable stg_stuff, as in the previous example. Then it opens the substorage drawing_1 into a second storage variable. This example does not include code to close and destroy any of the objects that were opened.



integer result OLEStorage stg_stuff, stg_drawing



stg_stuff = CREATE OLEStorage result = stg_stuff.Open("c:\ole2\mystuff.ole") IF result >= 0 THEN



stg_drawing = CREATE OLEStorage result = opest_drawing.Open("drawing_1", &



stgRead!, stgDenyNone!, stg_stuff) END IF



See also Close Save SaveAs



- 10.428.7 Syntax 7: For opening OLE streams Description Opens a stream in an open OLE storage object and loads it into an OLE stream object. Applies to




OLE stream objects Syntax



olestream.Open ( sourcestorage, streamname {, readmode {, sharemode } } )



- Table 10.527:




|Argument|Description|
|---|---|
|olestream|The name of a object variable of type OLEStream into which you want to load the OLE object.|
|sourcestorage|An OLE storage that contains the stream to be opened.|
|streamname|A string specifying the name of the stream within sourcestorage that you want to open.|
|readmode (optional)|A value of the enumerated datatype stgReadMode that specifies the type of access you want for streamname. Values are:<br><br>• stgReadWrite! -- Read/write access. If streamname does not exist, Open creates it.<br>• stgRead! -- Read-only access. You cannot change streamname.<br>• stgWrite! -- Write access. You can rewrite streamname but not read its current contents. If streamname does not exist, Open creates it.<br>|
|sharemode (optional)|A value of the enumerated datatype stgShareMode that specifies how other attempts, by your own or other applications, to open streamname will fare. Values are:<br><br>• stgExclusive! -- No other attempt to open streamname will succeed.<br>• stgDenyNone! -- Any other attempt to open streamname will succeed.<br>• stgDenyRead! -- Other attempts to open streamname for reading will fail.<br>• stgDenyWrite -- Other attempts to open streamname for writing will fail.<br>|



Return value Integer.



- Returns 0 if it succeeds and one of the following negative values if an error occurs:


- -1 -- Stream not found
- -2 -- Stream already exists
- -3 -- Stream is already open
- -4 -- Storage not open
- -5 -- Access denied
- -6 -- Invalid name
