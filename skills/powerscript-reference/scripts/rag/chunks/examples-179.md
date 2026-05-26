# Examples

These statements import the DataWindow object d_emp into the library called dwTemp and store any errors in ErrorBuffer. Note that the syntax is obtained by using the Describe function:



string dwsyntax, ErrorBuffer integer rtncode



dwsyntax = dw_1.Describe("DataWindow.Syntax") rtncode = LibraryImport("c:\pb\dwTemp.pbl", &



"d_emp", ImportDataWindow!, & dwsyntax, ErrorBuffer )



These statements import the DataWindow object d_emp into the library called dwTemp, store any errors in ErrorBuffer, and associate the comment Employee DataWindow 1 with the entry:



string dwsyntax, ErrorBuffer integer rtncode



dwsyntax = dw_1.Describe("DataWindow.Syntax") rtncode = LibraryImport("c:\pb\dwTemp.pbl", &



"d_emp", ImportDataWindow!, & dwsyntax, ErrorBuffer, & "Employee DataWindow 1")



See also Describe method for DataWindows in Section 9.23, “Describe” in DataWindow Reference. LibraryCreate LibraryDelete LibraryDirectory LibraryImport



- 10.378 LineCount Description Determines the number of lines in an edit control that allows multiple lines. Applies to RichTextEdit, MultiLineEdit, EditMask, and DataWindow controls Syntax editname.LineCount ( )


- Table 10.458:




|Argument|Description|
|---|---|
|editname|The name of the DataWindow control, EditMask, MultiLineEdit, or RichTextEdit for which you want the number of lines|



Return value Long. Returns the number of lines in editname if it succeeds and -1 if an error occurs. If editname is null, LineCount returns null. Usage LineCount counts each visible line, whether it was the result of wrapping or carriage returns. When you call LineCount for a DataWindow, it reports the number of lines in the edit control over the current row and column. A user can enter multiple lines in a DataWindow column only if it has a text datatype and its box is large enough to display those lines. The size of the column's box determines the number of lines allowed in the column. When the user is typing, lines do not wrap automatically; the user must press enter to type additional lines. In a MultiLineEdit control, lines wrap when the user's typing fills the control horizontally, unless either the HScrollBar or AutoHScroll property is true. If horizontal scrolling is enabled with these properties, the user must press enter to type additional lines. A RichTextEdit control always contains an end-of-file mark even if there is no text in the control. Therefore, its line count is always at least 1. Other edit controls, when empty, have a line count of 0. Examples If the MultiLineEdit mle_Instructions has 9 lines, this example sets li_Count to 9:



integer li_Count li_Count = mle_Instructions.LineCount()



These statements display a MessageBox if fewer than two lines have been entered in the MultiLineEdit mle_Address:



integer li_Lines li_Lines = mle_Address.LineCount() IF li_Lines < 2 THEN



MessageBox("Warning", "2 lines are required.") END IF



- 10.379 LineLength Description Determines the length of the line containing the insertion point in an edit control. Applies to RichTextEdit, MultiLineEdit, and EditMask controls Syntax editname.LineLength ( )


- Table 10.459:




|Argument|Description|
|---|---|
|editname|The name of the RichTextEdit, MultiLineEdit, or EditMask in which you want to determine the length of the line containing the insertion point|



Return value Long. Returns the length of the line containing the insertion point in editname. Returns -1 if an error occurs. If editname is null, LineLength returns null. Usage



If the control contains a selection instead of a single insertion point, LineLength counts the line at the beginning of the selection.



PowerBuilder remembers where the insertion point is in each editable control. When the user moves the focus to another control, you can still find out the length of the line most recently edited by calling the LineLength function for that control.
