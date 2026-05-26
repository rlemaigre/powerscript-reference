# See also Check

- 10.729 Undo Description Cancels the last edit in an edit control, restoring the text to the content before the last change. Applies to DataWindow, MultiLineEdit, RichTextEdit, and SingleLineEdit controls Syntax editname.Undo ( )


- Table 10.902:




|Argument|Description|
|---|---|
|editname|The name of the DataWindow control, MultiLineEdit, RichTextEdit, or SingleLineEdit in which you want to cancel (reverse) the last edit. For a DataWindow control, reverses the last edit in the edit control over the current row and column.|



Return value Integer. Returns 1 when it succeeds and -1 if an error occurs. If editname is null, Undo returns null. Usage To determine whether the last action can be canceled, call the CanUndo function. Examples This statement reverses the last edit in MultiLineEdit mle_Contact:



mle_Contact.Undo()



The following statement checks to see if the last edit in the MultiLineEdit mle_Contact can be reversed, and if so reverse it:



IF mle_Contact.CanUndo() THEN mle_Contact.Undo()



See also CanUndo
