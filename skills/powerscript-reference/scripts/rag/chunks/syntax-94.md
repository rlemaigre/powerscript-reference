# Syntax

controlname.Paste ( )



- Table 10.570:




|Argument|Description|
|---|---|
|controlname|The name of the DataWindow control, EditMask, InkEdit, MultiLineEdit, SingleLineEdit, RichTextEdit, DropDownListBox, DropDownPictureListBox, or OLE control into which you want to insert the contents of the clipboard.<br><br>If controlname is a DataWindow, text is pasted into the edit control over the current row and column. If controlname is a DropDownListBox or DropDownPictureListBox, the AllowEdit property must be true|



Return value Integer for DataWindow, InkEdit, and list boxes, Long for other controls. For edit controls, returns the number of characters that were pasted into controlname. If nothing has been cut or copied (the clipboard is empty), the Paste function does not change the contents of the edit control and returns 0. If the clipboard contains nontext data (for example, a bitmap or OLE object) and the control cannot accept that data, Paste does not change the contents and returns 0. For OLE controls, returns 0 if it succeeds and one of the following negative values if an error occurs:



- -1 -- No data or clipboard content is not embeddable
- -9 -- Other error Usage




For editable controls, if text is selected in controlname, Paste replaces the text with the contents of the clipboard. If the clipboard contains more lines than fit in the edit control, only the number of lines that fit are pasted.



In a DataWindow control, the text is pasted into the edit control over the current row and column. If the clipboard contains more text that is allowed for that column, the text is truncated. If the clipboard text does not match the column's datatype, all the text is truncated, so that any selected text is replaced with an empty string.



You can paste bitmaps, as well as text, into a RichTextEdit control. To insert a specific string in controlname or to replace selected text with a specific string, use the ReplaceText function. When you use Paste to put an OLE object in an OLE control, the data is embedded in the PowerBuilder application, not linked. Examples



If the clipboard contains Proposal good for 90 days and no text is selected, this statement pastes Proposal good for 90 days in mle_Comment1 at the insertion point and returns 25:



- mle_Comment1.Paste()




If the clipboard contains the string Final Edition, mle_Comment2 contains This is a Preliminary Draft, and the text in mle_Comment2 is selected, this statement deletes This is a Preliminary Draft, replaces it with Final Edition, and returns 13:



- mle_Comment2.Paste()




If the clipboard contains an OLE object, this statement makes it the contents of the control ole_1 and returns 0:



ole_1.Paste()



See also Copy Cut PasteLink PasteSpecial ReplaceText
