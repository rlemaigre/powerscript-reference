# See also

BuildModel IncomingCallList



- 10.446 PageCount Description Returns the total number of pages in the document in a RichTextEdit control. Applies to RichTextEdit controls Syntax rtename.PageCount ( )

- Table 10.567:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit control in which you want the page count|



Return value



Integer. Returns the number of pages in the RichTextEdit control. Returns 1 if the control contains no text and -1 if an error occurs.



Usage



The number of pages in the document is determined by the amount of text and the layout specifications, such as page size, margins, font size, and so on.



When the RichTextEdit control shares data with a DataWindow, there is an instance of the document for each row of the DataWindow. PageCount reports the page count of a single instance. Multiply the value of the DataWindow's RowCount function by the page count to get the total number of pages.



Examples



This example displays the number of pages in the document in the RichTextEdit rte_1 as the text of the StaticText st_status:



st_status.Text = String(rte_1.PageCount())



See also LineCount LineLength RowCount method for DataWindows in Section 2.4.110, “RowCount” in DataWindow Reference.



- 10.447 PageCreated Description Reports whether a tab page has been created.
