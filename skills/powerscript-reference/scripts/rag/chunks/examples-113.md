# Examples

This example gets data of datatype date from the EditMask control em_date. Formatting characters for the date are ignored. The String function converts the date to a string so it can be assigned to the SingleLineEdit sle_date:



date d em_date.GetData(d) sle_date.Text = String(d, "mm-dd-yy")



This example gets string data from the EditMask control em_string and assigns the result to sle_string. Characters in the edit mask are ignored:



string s em_string.GetData(s) sle_string.Text = s



- 10.198.3 Syntax 3: For data in an OLE server Description Gets data from the OLE server associated with an OLE control using Uniform Data Transfer. Applies to OLE controls and OLE custom controls Syntax olename.GetData ( clipboardformat, data )


- Table 10.237:




|Argument|Description|
|---|---|
|olename|The name of the OLE or custom control containing the object you want to populate with data|
|clipboardformat|The format for the data. You can specify a standard format with a value of the ClipboardFormat enumerated datatype. You can specify a nonstandard format as a string.<br><br>Values for clipboardformat are: ClipFormatBitmap! ClipFormatDIB! ClipFormatDIF! ClipFormatEnhMetafile! ClipFormatHdrop! ClipFormatLocale! ClipFormatMetafilePict! ClipFormatOEMText!|



|Argument|Description|
|---|---|
| |ClipFormatPalette! ClipFormatPenData! ClipFormatRIFF! ClipFormatSYLK! ClipFormatText! ClipFormatTIFF! ClipFormatUnicodeText! ClipFormatWave! If clipboardformat is an empty string or a null value, GetData uses the format ClipFormatText!|
|data|A string or blob variable that will contain the data from the OLE server. If the data you want to get is not appropriate for a string, you must use a blob variable.|



Return value Integer.



- Returns 0 if it succeeds and -1 if an error occurs. Usage




GetData will return an error if you specify a clipboard format that the OLE server does not support. To find out what formats it supports, see the documentation for the OLE server.



GetData operates via Uniform Data Transfer, a mechanism defined by Microsoft for exchanging data with container applications. PowerBuilder enables data transfer via a global handle. The OLE server must also support data transfer via a global handle. If it does not, you cannot transfer data to or from that server.
