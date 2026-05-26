# Examples

If the user clicks in the upper left corner of the window, this code sets focus to the button cb_clear:



IF (xpos <= 600 AND ypos <= 600) THEN



cb_clear.SetFocus( ) END IF



See also DoubleClicked MouseDown MouseMove MouseUp RButtonDown



- 9.10.6 Syntax 6: For other controls Description Occurs when the user clicks on the control. Event ID


- Table 9.34:




|Event ID|Objects|
|---|---|
|pbm_bnclicked|CheckBox, CommandButton, Graph, OLE, Picture, PictureHyperLink, PictureButton, RadioButton, StaticText, StaticHyperLink|
|pbm_lbuttondow|nDatePicker, MonthCalendar|
