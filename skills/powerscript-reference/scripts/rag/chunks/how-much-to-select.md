# How much to select

When you want to select all the text of a line edit or select the contents from a specified position to the end of the edit, use the Len function to obtain the length of the control's text.



To select text in a DataWindow with the RichTextEdit presentation style, use Syntax 2. Examples This statement sets the insertion point at the end of the text in the SingleLineEdit sle_name:



sle_name.SelectText(Len(sle_name.Text), 0)



This statement selects the entire contents of the SingleLineEdit sle_name:



sle_name.SelectText(1, Len(sle_name.Text))



The rest of these examples assume the MultiLineEdit mle_EmpAddress contains Boston Street.



The following statement selects the string ost and returns 3:



mle_EmpAddress.SelectText(2, 3)



The next statement selects the string oston Street and returns 12:



mle_EmpAddress.SelectText(2, & Len(mle_EmpAddress.Text))



These statements select the string Bos, returns 3, and sets the focus to mle_EmpAddress so that Bos is highlighted:



mle_EmpAddress.SelectText(1, 3) mle_EmpAddress.SetFocus()



See also Len Position SelectedItem SelectedText SetFocus TextLine



- 10.576.2 Syntax 2: For RichTextEdit controls and presentation styles Description Selects text beginning and ending at a line and character position in a RichTextEdit control. Applies to RichTextEdit and DataWindow controls Syntax rtename.SelectText ( fromline, fromchar, toline, tochar { band } )


- Table 10.714:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit or DataWindow control in which you want to select text. The DataWindow object in the DataWindow control must be a RichTextEdit DataWindow.|
|fromline|A long specifying the line number where the selection starts.|
|fromchar|A long specifying the number in the line of the first character in the selection.|
|toline|A long specifying the line number where the selection ends. To specify an insertion point, set toline and tochar to 0.|



|Argument|Description|
|---|---|
|tochar|A long specifying the number in the line of the character before which the selection ends.|
|band (optional)|A value of the Band enumerated datatype specifying the band in which to make the selection. Values are:<br><br>• Detail!<br>• Header!<br>• Footer! The default is the band that contains the insertion point.<br>|



Return value Long. Returns the number of characters selected. A carriage return with a line feed counts as a single character. If an error occurs SelectText returns -1. If any argument's value is null, it returns null. Usage



The insertion point is at the "to" end of the selection, that is, the position specified by toline and tochar. If toline and tochar are before fromline and fromchar, then the insertion point is at the beginning of the selection.



You cannot specify 0 for a character position when making a selection. You cannot always use the values returned by Position to make a selection. Position can return a character position of 0 when the insertion point is at the beginning of a line.



To select an entire line, set the insertion point and call SelectTextLine. To select the rest of a line, set the insertion point and call SelectText with a character position greater than the line length.
