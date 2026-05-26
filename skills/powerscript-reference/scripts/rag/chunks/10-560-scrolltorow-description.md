# 10.560 ScrollToRow Description

Scrolls to the document instance associated with the specified row when the RichTextEdit controls shares data with a DataWindow.



For syntax specific to DataWindow controls and child DataWindows, see the ScrollToRow method for DataWindows in Section 9.145, “ScrollToRow” in DataWindow Reference.



Applies to RichTextEdit controls Syntax



rtename.ScrollToRow ( row )



- Table 10.691:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit control in which you want to scroll to a document instance associated with the specified row.|
|row|A long identifying the row to which you want to scroll. If row, is 0, ScrollToRow scrolls to the first row. If row is greater than the number of rows in the associated DataWindow, it scrolls to the last row.|
