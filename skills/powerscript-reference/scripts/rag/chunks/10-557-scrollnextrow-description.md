# 10.557 ScrollNextRow Description

Scrolls to the next instance of the document in a RichTextEdit control or RichTextEdit DataWindow. A RichTextEdit control has multiple instances of its document when it shares data with a DataWindow. The next instance of the document is associated with the next row in the DataWindow.



For syntax specific to DataWindow controls and child DataWindows, see the ScrollNextRow method for DataWindows in Section 9.142, “ScrollNextRow” in DataWindow Reference.



Applies to DataWindow and RichTextEdit controls Syntax



rtename.ScrollNextRow ( )



- Table 10.688:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit or DataWindow control in which you want to scroll to the next document instance. Each instance is associated with a DataWindow row.<br><br>The DataWindow object in the DataWindow control must be a RichTextEdit DataWindow.|
