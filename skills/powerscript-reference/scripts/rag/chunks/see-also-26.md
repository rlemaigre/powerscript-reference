# See also

GetValue SetValue



- 10.280 GetTextColor Description Obtains the color of selected text in a RichTextEdit control. Applies to RichTextEdit controls Syntax rtename.GetTextColor ( )


- Table 10.345:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit control in which you want to find out the color of selected text|



Return value Long. Returns the long value that specifies the color of the currently selected text. If text of different colors is selected, GetTextColor returns the color of the first selected character. GetTextColor returns -1 if an error occurs. Examples This example stores a long representing the color of the selected text in rte_1:



long ll_color ll_color = rte_1.GetTextColor()



See also GetTextStyle



SetTextColor SetTextStyle



- 10.281 GetTextStyle Description Finds out whether selected text has text styles (such as bold or italic) assigned to it. Applies to RichTextEdit controls Syntax rtename.GetTextStyle ( textstyle )


- Table 10.346:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit control in which you want to find the formatting of selected text.|
|textstyle|A value of the enumerated datatype TextStyle specifying the text style you want to check for. Values are:<br><br>Bold! Italic! Strikeout! Subscript! Superscript! Underlined!|
