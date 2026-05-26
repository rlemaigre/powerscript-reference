# 10.568 SelectedLine Description

Obtains the number of the line that contains the insertion point in an editable control. The insertion point moves to the next line if the current line contains a carriage return.



Applies to DataWindow, MultiLineEdit, and RichTextEdit controls Syntax



editname.SelectedLine ( )



- Table 10.701:




|Argument|Description|
|---|---|
|editname|The name of the DataWindow, MultiLineEdit, or RichTextEdit in which you want the number of the line containing the insertion point. For a DataWindow, it reports the line number in the edit control over the current row and column.|



Return value Long. Returns the number of the line containing the insertion point in editname. If an error occurs, SelectedLine returns -1. If editname is null, SelectedLine returns null. Usage For EditMask controls, SelectedLine compiles but always returns 1. The insertion point can be at the beginning or end of the selection. Therefore, SelectedLine can return the first or last selected line, depending on the position of the insertion point. Examples



If the insertion point is positioned anywhere in line 5 of the MultiLineEdit mle_Contact, the following example sets li_SL to 5:



integer li_SL



li_SL = mle_Contact.SelectedLine()



In this example, the line the user selects in the MultiLineEdit mle_winselect determines which window to open:



integer li_SL li_SL = mle_winselect.SelectedLine() IF li_SL = 1 THEN



Open(w_emp_data) ELSEIF li_SL = 2 THEN



Open(w_dept_data) END IF



See also LineLength Position SelectedColumn SelectedPage SelectedText TextLine



- 10.569 SelectedPage Description Obtains the number of the current page in a RichTextEdit control. Applies to RichTextEdit controls Syntax rtename.SelectedPage ( )


- Table 10.702:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit control in which you want the number of the current page|



Return value Integer. Returns the number of the current page in rtename. If an error occurs, SelectedPage returns
