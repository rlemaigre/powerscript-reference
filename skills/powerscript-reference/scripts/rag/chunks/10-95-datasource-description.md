# 10.95 DataSource Description

Allows a RichTextEdit control to share data with a DataWindow and display the data in its input fields. If there are input fields in the RichTextEdit control that match the names of columns in the DataWindow, the data in the DataWindow is assigned to those input fields. The document in the RichTextEdit control is repeated so that there is an instance of the document for each row in the DataWindow.



Applies to RichTextEdit controls Syntax



rtename.DataSource ( dwsource )



- Table 10.116:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit control for which you want to get data in a DataWindow|
|dwsource|The name of the DataWindow control, DataStore, or child DataWindow that contains the data to be connected with input fields in rtename|



Return value Integer.



- Returns 1 if it succeeds and -1 if an error occurs.
