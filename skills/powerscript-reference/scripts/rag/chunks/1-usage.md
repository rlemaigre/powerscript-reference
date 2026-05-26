# -1. Usage

The current page in a RichTextEdit control is the page that contains the insertion point in text entry mode or the page currently being displayed in preview mode.



When the RichTextEdit shares data with a DataWindow, SelectedPage returns the page number within the document instance for the current row.



For more information about document instances, see DataSource. Examples This example returns the page number of the current page:



integer li_pagect li_pagect = rte_1.SelectedPage()



See also DataSource PageCount Preview SelectedLength SelectedLine SelectedStart SelectedText



- 10.570 SelectedStart Description Reports the position of the first selected character in an editable control. Applies to




DataWindow, EditMask, MultiLineEdit, SingleLineEdit, RichTextEdit, DropDownListBox, and DropDownPictureListBox controls
