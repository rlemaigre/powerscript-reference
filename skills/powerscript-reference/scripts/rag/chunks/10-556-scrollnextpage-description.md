# 10.556 ScrollNextPage Description

Scrolls to the next page of the document in a RichTextEdit control or RichTextEdit DataWindow.



For DataWindow syntax, see the ScrollNextPage method for DataWindows in Section 9.141, “ScrollNextPage” in DataWindow Reference.



Applies to RichTextEdit controls Syntax



rtename.ScrollNextPage ( )



- Table 10.687:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit or DataWindow control in which you want to scroll to the next page.<br><br>The DataWindow object in the DataWindow control must be a RichTextEdit DataWindow.|



Return value Integer. Returns 1 if it succeeds and -1 if an error occurs. Usage



When the RichTextEdit control shares data with a DataWindow, the RichTextEdit contains multiple instances of the document, one instance for each row.



When the last page of the document for one row is visible, calling ScrollNextPage advances to the first page for the next row.



ScrollNextPage and ScrollPriorPage work in the RichTextEdit control edit mode only when the HeaderFooter property of a rich text control is selected. They work in print preview mode regardless of the HeaderFooter property setting and they work for the RichText DataWindow control in edit mode whether or not the DataWindow has header or footer bands.
