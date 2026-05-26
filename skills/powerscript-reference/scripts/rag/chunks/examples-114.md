# Examples

After the user has activated a Microsoft Word document and edited its contents, this example gets the contents from the OLE control ole_word6 and stores the contents in the string ls_oledata. The contents of the string are then displayed in the MultiLineEdit mle_text:



string ls_oledata integer li_rtn



li_rtn = ole_word6.GetData( &



ClipFormatText!, ls_oledata) mle_text.Text = ls_oledata



One OLE control displays a Microsoft Word document containing a table of data. This example gets the data in the report and assigns it to a graph in a second OLE control. Microsoft Graph in the second control interprets the first row in the table as headings, and subsequent rows as categories or series, depending on the settings on the Data menu:



string ls_data integer li_rtn



li_rtn = ole_word.GetData(ClipFormatText!, ls_data) IF li_rtn <> 1 THEN RETURN



li_rtn = ole_graph.SetData(ClipFormatText!, ls_data)



See also SetData
