# 10.632 SetRange Description

Sets a duration for a progress bar control or sets the start and end position for a trackbar control.



Applies to Progress bar controls Syntax



controlname.SetRange ( startpos, endpos )



- Table 10.786:




|Argument|Description|
|---|---|
|controlname|The name of the progress bar or trackbar|
|startpos|Integer indicating the initial position of the range|
|endpos|Integer indicating the terminal position of the range|



Return value Integer. Returns 1 if it succeeds and -1 if there is an error. Usage The default range for the progress bar controls is 0 to 100. Examples This statement sets a range of 1 to 10 for a progress bar control:



HProgressBar.SetRange ( 1, 10 )



See also OffsetPos SelectionRange StepIt



- 10.633 SetRecordSet Description Sets an ADOResultSet object to obtain its data and metadata from a passed ADO Recordset. Applies to ADOResultSet objects Syntax adoresultset.SetRecordSet ( adorecordsetobject )


- Table 10.787:




|Argument|Description|
|---|---|
|adoresultset|An ADOResultSet object into which the function places the passed ADO Recordset.|
|adorecordsetobjec|tAn OLEObject object that contains an ADO Recordset. Passing an OLEObject that does not contain an ADO Recordset generates an error.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage



Use the SetRecordSet function to populate an ADOResultSet object with data passed in an OLEObject that contains an ADO Recordset. Record sets are returned from COM+ components as ADO Recordsets.
