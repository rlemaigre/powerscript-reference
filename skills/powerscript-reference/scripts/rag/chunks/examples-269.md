# Examples

The following example shows the use of SetComplete in a component method that performs database updates:



// Instance variables: // DataStore ids_datastore // TransactionServer ts Integer li_rc long ll_rv li_rc = this.GetContextService("TransactionServer", ts)



- IF li_rc <> 1 THEN // handle the error




END IF



... ll_rv = ids_datastore.Update() IF ll_rv = 1 THEN



ts.SetComplete() ELSE



ts.SetAbort() END IF



See also DisableCommit EnableCommit IsInTransaction (obsolete) IsTransactionAborted (obsolete) Lookup (obsolete) SetAbort Which



- 10.601 SetData Description Sets data in the OLE server associated with an OLE control using Uniform Data Transfer. Applies to OLE controls and OLE custom controls Syntax olename.SetData ( clipboardformat, data )


- Table 10.743:




|Argument|Description|
|---|---|
|olename|The name of the OLE or custom control associated with the OLE server to which you want to transfer data.|
|clipboardformat|The format of the data. You can specify a standard format with a value of the ClipboardFormat enumerated datatype. You can specify a nonstandard format as a string.Values for ClipboardFormat are:<br><br>ClipFormatBitmap! ClipFormatDIB! ClipFormatDIF! ClipFormatEnhMetafile! ClipFormatHdrop! ClipFormatLocale! ClipFormatMetafilePict! ClipFormatOEMText! ClipFormatPalette! ClipFormatPenData! ClipFormatRIFF! ClipFormatSYLK! ClipFormatText! ClipFormatTIFF! ClipFormatUnicodeText! ClipFormatWave! If clipboardformat is an empty string or a null value, SetData transfers the data with the format ClipFormatText!.|
|data|A string or blob whose value is the data you want to transfer.|



Return value Integer.



- Returns 0 if it succeeds and -1 if an error occurs. Usage




SetData returns an error if you specify a clipboard format that the OLE server does not support. See the documentation for the OLE server to find out what formats it supports.



SetData operates via Uniform Data Transfer, a mechanism defined by Microsoft for exchanging data with container applications. PowerBuilder enables data transfer via a global handle. The OLE server must also support data transfer via a global handle. If it does not, you cannot transfer data to or from that server.
