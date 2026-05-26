# Syntax

editname.CanUndo ( )



- Table 10.60:



|Argument|Description|
|---|---|
|editname|The name of the DataWindow control, MultiLineEdit, SingleLineEdit, or RichTextEdit for which you want to determine whether the last edit can be reversed by the Undo function. In a DataWindow, CanUndo applies to the edit control over the current row and column.|



Return value



Boolean. Returns true if the last edit can be reversed (undone) using the Undo function and false if the last edit cannot be reversed. If editname is null, CanUndo returns null.



Examples



These statements check to see if the last edit in mle_contact can be reversed; if yes the statements reverse it, and if no they display a message:



IF mle_contact.CanUndo() THEN



mle_contact.Undo() ELSE



MessageBox(Parent.Title, "Nothing to Undo") END IF



See also Undo



10.50 CategoryCount



Description Counts the number of categories on the category axis of a graph. Applies to Graph controls in windows and user objects, and graphs in DataWindow controls Syntax



controlname.CategoryCount ( { graphcontrol } )



- Table 10.61:




|Argument|Description|
|---|---|
|controlname|The name of the graph for which you want the number of categories, or the name of a DataWindow control containing the graph.|
|graphcontrol (DataWindow control only) (optional)|A string whose value is the name of the graph in the DataWindow for which you want the number of categories. Graphcontrol is required if controlname is a DataWindow control.|
