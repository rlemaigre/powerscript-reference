# 10.555 Scroll Description

Scrolls a multiline edit control or the edit control of a DataWindow a specified number of lines up or down.



Applies to DataWindow, MultiLineEdit, and RichTextEdit controls Syntax



editname.Scroll ( number )



- Table 10.686:




|Argument|Description|
|---|---|
|editname|The name of the DataWindow, RichTextEdit, or MultiLineEdit in which you want to scroll up or down. If editname is a DataWindow, then Scroll affects its edit control.|
|number|A long specifying the direction and number of lines you want to scroll. To scroll down, use a positive long value. To scroll up, use a negative long value.|



Return value Long. For RichTextEdit controls, Scroll returns 1 if it succeeds. For other controls, Scroll returns the line number of the first visible line in editname if it succeeds. Scroll returns -1 if an error occurs. If any argument's value is null, Scroll returns null.
