# 10.564 SelectedColumn Description

Obtains the number of the character column just after the insertion point in a RichTextEdit control.



Applies to RichTextEdit controls Syntax



rtename.SelectedColumn ( )



- Table 10.697:




|Argument|Description|
|---|---|
|rtename|The name of the RichTextEdit in which you want the number of the character after the insertion point|



Return value Long. Returns the number of the character just after the insertion point in rtename. If an error occurs, SelectedColumn returns -1. Usage



The insertion point can be at the beginning or end of the selection. Therefore, SelectedColumn can return the first character of the selection or the character just after the selection, depending on the position of the insertion point.
